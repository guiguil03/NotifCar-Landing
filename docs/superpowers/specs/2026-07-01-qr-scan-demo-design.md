# Démo interactive de scan QR dans "Comment ça marche"

## Contexte

La section "Comment ça marche" (`src/components/features/Fonctionnement.tsx`) présente 3 étapes (coller le QR code, scan par un passant, notification reçue) via un carrousel auto-rotatif de captures d'écran statiques dans un mockup téléphone. L'étape 2 ("Un passant scanne le QR code NotifCar") et l'étape 3 (notification reçue) décrivent exactement le cœur de la proposition de valeur du produit, mais ne sont représentées que par des screenshots passifs. L'objectif est de rendre cette étape vivante en la transformant en démo cliquable : l'utilisateur scanne un faux QR et voit apparaître une notification simulée, exactement comme le ferait un vrai utilisateur de l'app.

## Placement & flux UX

Quand l'étape 2 est active (par clic sur l'onglet ou lors de l'auto-rotation existante), le mockup téléphone n'affiche plus la capture `screen1.jpg` mais un widget interactif :

1. **État initial (`idle`)** : un faux QR code (SVG décoratif) avec l'invite "Toucher pour scanner".
2. **Clic** → état `scanning` : une ligne de balayage anime le QR pendant ~800ms.
3. **Transition automatique** → état `notified` : une carte de notification glisse depuis le haut de l'écran du téléphone (imitant une vraie notification push : "🔔 NotifCar — Nouveau signalement détecté près de vous"), reste visible ~2,5s.
4. **Retour automatique** à `idle`, permettant de rejouer la démo.

Les étapes 1 et 3 gardent leurs captures d'écran statiques actuelles, inchangées. Seule l'étape 2 devient interactive. Le widget se réinitialise à `idle` chaque fois que l'utilisateur quitte puis revient sur l'étape 2 (via une `key` React liée à `active`, pattern déjà utilisé ailleurs dans le codebase pour rejouer une animation à l'entrée d'une étape).

## Architecture des composants

- **Nouveau fichier `src/components/features/QRScanDemo.tsx`** : widget autonome et isolé, avec son propre state local (`idle` → `scanning` → `notified` → retour à `idle`), animations en CSS pur (`@keyframes` via un tag `<style>` inline, même pattern que le reste du codebase — aucune nouvelle dépendance). Responsabilité unique : rendre le contenu interactif de l'écran du téléphone pour l'étape "scan". `'use client'` requis (state + interaction).
- **Modification de `Fonctionnement.tsx`** : dans le bloc `STEP_SCREENS.map(...)` qui affiche les captures d'écran crossfade, quand `active === 1` (index de l'étape scan), on rend `<QRScanDemo key={active} />` à la place de l'`<img>` correspondant. Les deux autres étapes ne changent pas.
- **Nouvelles clés i18n** dans `fr.json`, `en.json`, `es.json`, sous un nouveau namespace `qrScanDemo` (ou imbriqué sous `howItWorks`), suivant le pattern existant : invite de scan ("Toucher pour scanner"), texte de la notification simulée.

## Détails d'implémentation

- Le QR factice est un SVG simple (motif de carrés type QR, purement décoratif — pas besoin d'être scannable).
- Le déclencheur est un vrai `<button>` accessible (label ARIA explicite, zone de clic ≥44px, cohérent avec le reste du site — voir les boutons `stepDotLabel` existants).
- Enchaînement `scanning → notified → idle` géré via `setTimeout` en state, avec nettoyage (`clearTimeout`) au démontage ou changement d'étape, pour éviter les fuites (le composant parent a déjà ce genre de nettoyage sur son `setInterval` d'auto-avance).
- Aucune dépendance externe ajoutée (pas de librairie d'animation) — cohérent avec le reste du codebase qui n'utilise que des animations CSS pures.

## Vérification

- Démarrage du serveur de dev, clic manuel sur l'étape 2 dans le navigateur, déclenchement du scan, vérification visuelle de l'animation et de la notification simulée.
- Confirmation qu'aucune erreur console n'apparaît (notamment pas de mise à jour de state après démontage).
- Pas de tests automatisés (cohérent avec l'absence de suite de tests dans le reste du repo).

## Hors périmètre

- Le simulateur de coût "Sans vs Avec NotifCar" (deuxième idée du même échange) est un projet séparé, traité dans un spec/plan distinct ultérieur.
- Aucune modification du carrousel auto-rotatif pour les étapes 1 et 3.
