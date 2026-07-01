# Migration vers Next.js (App Router + SSG) pour rendre le contenu crawlable

## Contexte

Un audit externe a montré que le HTML brut servi par notifcar.fr ne contient que les balises `<meta>` (title, description, OG) : le `<body>` est vide. Le site est une SPA Vite + React 19 (react-router-dom v7, mode "library") déployée sur Vercel avec un rewrite catch-all vers `index.html` — `main.tsx` ne fait du `createRoot().render()` que dans le navigateur, donc le contenu n'existe jamais en HTML statique. Conséquences observées :
- `site:notifcar.fr` ne remonte qu'une seule page indexée (la home) malgré 5 routes de contenu.
- Les IA génératives et la plupart des crawlers non-Googlebot ne voient rien.
- Le futur projet de landing page EN avec hreflang sera inopérant tant que le contenu sous-jacent n'est pas crawlable.

Investigation complémentaire : `index.html` sert le **même** title/description/`og:url`/canonical (toujours `https://notifcar.fr`) sur toutes les routes — chaque page se déclare canonique vers la home. C'est un second bug SEO, indépendant du CSR, traité dans ce même chantier.

## Périmètre

- Migration de la stack actuelle (Vite SPA) vers Next.js App Router, déployé sur Vercel, pour que chaque route soit pré-rendue en HTML complet au build (SSG — pas de données par requête nécessaires aujourd'hui).
- Couvre uniquement le site français existant : `/`, `/tarifs`, `/contact`, `/cgu`, `/confidentialite`.
- **Hors périmètre** : routes `/en/`, `/es/` et hreflang (projet séparé à venir, qui s'appuiera sur cette base). Pas de nouvelle stack de tests automatisés (le repo n'en a pas aujourd'hui).

## Architecture & stratégie de rendu

- Next.js App Router, hébergé sur Vercel via la détection native du framework (pas de `output: 'export'`) : Vercel/Next.js pré-rend automatiquement en statique toute route sans dépendance à la requête, ce qui est le cas de toutes les pages actuelles. Effet équivalent à un export statique, sans sacrifier `api/contact.ts`, qui devient un Route Handler Next.js (`app/api/contact/route.ts`) toujours exécuté comme fonction serverless.
- `react-i18next` reste tel quel pour les textes. Les composants qui l'utilisent deviennent des Client Components Next.js, mais un Client Component est **quand même rendu en HTML au build/serveur** (modèle d'hydration standard) — `'use client'` ne signifie pas "navigateur seulement". Le texte FR sera donc bien présent dans le HTML statique généré. La détection `localStorage`/`navigator` n'a pas d'effet pendant le build (pas de `window`) et retombe sur `fallbackLng: 'fr'`, ce qui correspond au périmètre FR-only actuel.
- Chaque route obtient ses propres métadonnées via `generateMetadata()` (title, description, canonical, OG) au lieu du `index.html` global partagé — corrige le bug de canonical dupliqué.

## Mapping des routes & migration des composants

Structure App Router (URLs identiques à aujourd'hui) :

```
app/
  layout.tsx                  → <html lang="fr">, polices, GA, JSON-LD Organisation, providers (i18n, Auth)
  page.tsx                    → / (LandingPage actuelle)
  tarifs/page.tsx              → /tarifs (PricingPage)
  contact/page.tsx             → /contact (ContactPage)
  cgu/page.tsx                 → /cgu (CGUPage)
  confidentialite/page.tsx     → /confidentialite (PrivacyPage)
  api/contact/route.ts         → remplace api/contact.ts
  sitemap.ts                   → remplace public/sitemap.xml (généré depuis les routes réelles)
  not-found.tsx                → 404 propre (au lieu du soft-404 actuel)
```

Changements mécaniques (pas une réécriture) :
- `react-router-dom` (`useNavigate`, `useLocation`, `<Link>`) → `next/navigation` / `next/link`. `useNavigation.ts` et les callbacks `onNavigate`/`onScrollToSection` gardent la même forme, seul le moteur de navigation change.
- Composants avec hooks/état/accès navigateur (`Header`, `Footer`, `CookieBanner`, `LanguageSwitcher`, `RegistrationModal`, `AuthContext`) reçoivent `'use client'`.
- `public/*` (images, favicon, `robots.txt`, `formulaire.html`) migre tel quel.
- Tailwind/PostCSS/ESLint/TypeScript : portage direct, versions compatibles Next.js 15.

## Déploiement & vérification

- `vercel.json` actuel (`framework: vite`, rewrite catch-all) remplacé par la détection native `framework: nextjs`. Headers de cache `/assets/*` et content-types sitemap/robots conservés/adaptés.
- Vérification avant bascule :
  1. `next build` en local + `curl` sur chaque route buildée pour confirmer que le HTML brut contient le vrai texte (pas seulement les `<meta>`).
  2. Déploiement preview Vercel (URL non-prod) : validation visuelle des 5 pages, flow d'inscription (EmailJS/Supabase), formulaire de contact (`api/contact`), GA, cookie banner.
  3. Bascule du domaine `notifcar.fr` sur le déploiement Next.js une fois la preview validée.
  4. Post-bascule : `curl`/view-source en prod sur `/`, `/tarifs`, `/contact` pour confirmer le contenu serveur ; Search Console → "Inspecter l'URL" pour forcer un recrawl.
- Rollback : Vercel conserve l'historique des déploiements — "promote" l'ancien déploiement Vite en un clic en cas de problème.

## Risques / points d'attention

- S'assurer qu'aucun composant client (ex. `Header` avec `mounted` state) ne masque du contenu pendant l'hydration (flash de contenu vide) — à vérifier visuellement sur la preview.
- Mismatch d'hydratation i18next : le rendu serveur retombe toujours sur `fallbackLng: 'fr'` (pas de `window`/`localStorage` au build), alors qu'un visiteur revenant avec un choix EN/ES déjà sauvegardé dans `localStorage` (`notifcar-lang`) verra `LanguageDetector` resoudre une langue différente dès l'hydratation côté client — source classique de warning d'hydratation React et de flash de langue. À tester explicitement sur la preview avec une valeur `notifcar-lang` non-FR déjà présente en `localStorage` avant de charger la page.
- `formulaire.html` (page statique brute dans `public/`) doit rester accessible tel quel, hors du routing App Router.
- Le script GA (`gtag.js`) et le SDK EmailJS chargés en `<head>` dans `index.html` doivent être reproduits dans `app/layout.tsx` (via `next/script` pour GA).
