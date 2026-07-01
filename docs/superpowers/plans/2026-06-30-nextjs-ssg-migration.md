# Next.js SSG Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the Vite + React SPA at this repo to Next.js (App Router), so every route is rendered to full HTML at build time (SSG) instead of an empty `<div id="root">`, fixing the crawlability/SEO issue described in `docs/superpowers/specs/2026-06-30-nextjs-ssg-migration-design.md`.

**Architecture:** Keep all existing components/services/i18n under `src/`, add a new `src/app/` directory for Next.js App Router routing (5 routes: `/`, `/tarifs`, `/contact`, `/cgu`, `/confidentialite`). Components that use hooks or browser APIs get `'use client'`; route `page.tsx` files stay Server Components so they can export `generateMetadata` (fixes the duplicated-canonical bug). The `onNavigate` prop pattern is replaced by a single client hook (`useAppNavigation`, in the same file/path as today's `Page` type) called directly inside `Header`, `Footer`, `Profils`, `ContactPage`, and `PricingPage` — removing prop-drilling instead of threading it through Server Component pages (which can't pass functions as props). `api/contact.ts` becomes a Next.js Route Handler.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, react-i18next, deployed on Vercel.

**Testing approach:** This repo has no test suite today (confirmed during brainstorming; out of scope to add one). Verification here is: TypeScript compiles, `next build` succeeds, and the manual checklist in the final task (curl + visual + functional check of each route) — matching the verification plan in the approved design doc. Many intermediate file edits can't be type-checked in isolation because the old Vite entry points and the new Next.js entry points coexist only transiently; the authoritative verification is the `next build` in the final task.

---

## Task 1: Install Next.js, remove Vite-only dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Edit `package.json` scripts and dependencies**

Replace the whole file:

```json
{
  "name": "landing",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "deploy": "vercel --prod",
    "deploy:preview": "vercel"
  },
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "@supabase/supabase-js": "^2.57.4",
    "@vercel/speed-insights": "^1.2.0",
    "i18next": "^26.3.3",
    "i18next-browser-languagedetector": "^8.2.1",
    "next": "^15.5.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-i18next": "^17.0.8",
    "resend": "^6.10.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.33.0",
    "@types/node": "^22.10.2",
    "@types/react": "^19.1.10",
    "@types/react-dom": "^19.1.7",
    "autoprefixer": "^10.4.21",
    "concurrently": "^9.2.1",
    "eslint": "^9.33.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "globals": "^16.3.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.8.3",
    "typescript-eslint": "^8.39.1"
  }
}
```

This removes `react-router-dom`, `vite`, `@vitejs/plugin-react-swc`, `eslint-plugin-react-refresh`, `@vercel/node` (no longer imported anywhere after Task 30), and adds `next` + `@types/node`.

- [ ] **Step 2: Install**

Run: `npm install`
Expected: install completes without errors, `next` appears in `node_modules/.bin`.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: swap Vite/react-router-dom deps for Next.js"
```

---

## Task 2: Replace tsconfig with a single Next.js config

**Files:**
- Create: `tsconfig.json` (overwrite)
- Delete: `tsconfig.app.json`
- Delete: `tsconfig.node.json`

- [ ] **Step 1: Delete the two project-reference configs**

Run: `rm tsconfig.app.json tsconfig.node.json`

- [ ] **Step 2: Overwrite `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Delete the now-unneeded Vite env types**

Run: `rm src/vite-env.d.ts`

(`next dev`/`next build` will generate `next-env.d.ts` automatically the first time they run — Task 31 adds it to `.gitignore`.)

- [ ] **Step 4: Commit**

```bash
git add tsconfig.json
git rm tsconfig.app.json tsconfig.node.json src/vite-env.d.ts
git commit -m "chore: collapse tsconfig to single Next.js config"
```

---

## Task 3: Add `next.config.ts`

**Files:**
- Create: `next.config.ts`
- Delete: `vite.config.ts` (deleted in Task 31, alongside the other Vite entry files, to keep this task focused on additions)

- [ ] **Step 1: Create `next.config.ts`**

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {};

export default nextConfig;
```

- [ ] **Step 2: Commit**

```bash
git add next.config.ts
git commit -m "chore: add next.config.ts"
```

---

## Task 4: Update `.gitignore` for Next.js build output

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Edit**

old_string:
```
node_modules
dist
dist-ssr
*.local
```

new_string:
```
node_modules
.next
next-env.d.ts
*.local
```

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: ignore .next build output instead of dist"
```

---

## Task 5: Update `eslint.config.js` (drop Vite-only refresh plugin)

**Files:**
- Modify: `eslint.config.js`

- [ ] **Step 1: Edit**

old_string:
```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
```

new_string:
```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['.next']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
```

- [ ] **Step 2: Commit**

```bash
git add eslint.config.js
git commit -m "chore: drop Vite-only eslint-plugin-react-refresh"
```

---

## Task 6: Update `tailwind.config.js` content paths

**Files:**
- Modify: `tailwind.config.js`

- [ ] **Step 1: Edit**

old_string:
```js
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
```

new_string:
```js
    content: [
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
```

- [ ] **Step 2: Commit**

```bash
git add tailwind.config.js
git commit -m "chore: remove index.html from tailwind content globs"
```

---

## Task 7: Move global CSS into `src/app/globals.css`, delete dead `src/App.css`

**Files:**
- Create: `src/app/globals.css` (copy of current `src/index.css`)
- Delete: `src/index.css`
- Delete: `src/App.css`

- [ ] **Step 1: Create `src/app/globals.css` with the exact current content of `src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Styles de base pour l'application */
html {
  overflow-x: hidden;
  -webkit-text-size-adjust: 100%;
  background: linear-gradient(160deg, #6EC6F5 0%, #3B7FFF 42%, #2048D8 75%, #1535B8 100%);
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #6EC6F5;
}

body {
  overflow-x: hidden;
}

#root {
  width: 100%;
  min-height: 100vh;
}

/* Scrollbar personnalisée */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Styles responsive pour la section sécurité */
@media (max-width: 768px) {
  .grid-container {
    display: flex !important;
    flex-direction: column !important;
    gap: 1rem !important;
  }
  .div1, .div2, .div3, .div4, .div5 {
    grid-area: unset !important;
    width: 100% !important;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .grid-container {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    grid-template-rows: auto !important;
    gap: 1rem !important;
  }
  .div1 { grid-area: 1 / 1 / 2 / 3 !important; }
  .div2 { grid-area: 2 / 1 / 4 / 3 !important; }
  .div3 { grid-area: 4 / 1 / 5 / 2 !important; }
  .div4 { grid-area: 4 / 2 / 5 / 3 !important; }
  .div5 { grid-area: 5 / 1 / 6 / 3 !important; }
}

@media (min-width: 1025px) {
  .grid-container {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    grid-template-rows: repeat(3, 1fr) !important;
    gap: 1rem !important;
  }
}

/* Unified responsive section titles */
.section-title {
  font-size: 1.875rem; /* text-3xl / 30px */
  line-height: 1.2;
  font-weight: 400;
}

@media (min-width: 640px) {
  .section-title {
    font-size: 2.25rem; /* text-4xl / 36px */
  }
}

@media (min-width: 768px) {
  .section-title {
    font-size: 3rem; /* text-5xl / 48px */
  }
}

/* Classe commune pour tous les sous-titres */
.subtitle {
  font-size: 1.5rem; /* 24px mobile */
  line-height: 2rem; /* 32px mobile */
  font-weight: 400; /* normal */
}

@media (min-width: 1024px) {
  .subtitle {
    font-size: 2rem; /* 32px desktop */
    line-height: 2.5rem; /* 40px desktop */
  }
}
```

- [ ] **Step 2: Delete the old files**

Run: `rm src/index.css src/App.css`

(`src/App.css` was unused Vite-template boilerplate — its only meaningful rule, `#root`, is already in `globals.css`, and there's no `#root` div in the Next.js output anyway.)

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git rm src/index.css src/App.css
git commit -m "chore: move global CSS to src/app/globals.css"
```

---

## Task 8: Add the shared metadata helper

**Files:**
- Create: `src/lib/seo.ts`

- [ ] **Step 1: Create the file**

```ts
import type { Metadata } from 'next';

const SITE_URL = 'https://notifcar.fr';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: 'NotifCar',
      title,
      description,
      url,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: 'NotifCar — Application de protection véhicule par QR code',
        },
      ],
      locale: 'fr_FR',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
```

This replaces the single hardcoded `<title>`/`<meta>`/`og:url`/`canonical` block that `index.html` served identically on every route (the duplicated-canonical bug from the design doc).

- [ ] **Step 2: Commit**

```bash
git add src/lib/seo.ts
git commit -m "feat: add per-route metadata helper"
```

---

## Task 9: Rewrite the navigation hook for Next.js routing

**Files:**
- Modify: `src/hooks/useNavigation.ts`

- [ ] **Step 1: Replace the whole file**

Current content (for reference — this hook's `useNavigation` function is currently dead code; only its exported `Page` type is used elsewhere, and `App.tsx` does its own routing inline):

```ts
import { useState, useCallback } from 'react';

export type Page = 'landing' | 'auth' | 'dashboard' | 'profile' | 'contact' | 'pricing' | 'privacy' | 'cgu';

export const useNavigation = () => {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  return {
    currentPage,
    navigateTo,
    scrollToSection
  };
};
```

New content — same file path (so every existing `import { type Page } from '../hooks/useNavigation'` / `'../../hooks/useNavigation'` keeps working unchanged), now backed by `next/navigation` and carrying the route map that used to live in `App.tsx`:

```ts
'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

export type Page = 'landing' | 'auth' | 'dashboard' | 'profile' | 'contact' | 'pricing' | 'privacy' | 'cgu';

const PAGE_PATHS: Record<Page, string> = {
  landing: '/',
  contact: '/contact',
  pricing: '/tarifs',
  privacy: '/confidentialite',
  cgu: '/cgu',
  auth: '/',
  dashboard: '/',
  profile: '/',
};

export const useAppNavigation = () => {
  const router = useRouter();

  const navigateTo = useCallback((page: Page) => {
    router.push(PAGE_PATHS[page] ?? '/');
  }, [router]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return { navigateTo, scrollToSection };
};
```

- [ ] **Step 2: Commit**

```bash
git add src/hooks/useNavigation.ts
git commit -m "feat: rewrite navigation hook on top of next/navigation"
```

---

## Task 10: Mark `AuthContext` as a Client Component

**Files:**
- Modify: `src/contexts/AuthContext.tsx`

- [ ] **Step 1: Edit**

old_string:
```ts
import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
```

new_string:
```ts
'use client';

import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
```

- [ ] **Step 2: Commit**

```bash
git add src/contexts/AuthContext.tsx
git commit -m "chore: mark AuthContext as a client component"
```

---

## Task 11: Add the i18n client provider

**Files:**
- Create: `src/components/I18nProvider.tsx`

- [ ] **Step 1: Create the file**

```tsx
'use client';

import { type ReactNode } from 'react';
import '../i18n';

export default function I18nProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
```

This reproduces what `main.tsx` did today (`import './i18n'` before rendering the app) as a Client Component, so `i18next.init()` runs both during the Next.js build/server render (falling back to `fallbackLng: 'fr'`, since `localStorage`/`navigator` aren't available there) and again on hydration in the browser (where the existing `LanguageDetector` re-applies any saved `notifcar-lang` choice). `src/i18n.ts` itself is unchanged — the EN/ES manual language switcher keeps working exactly as it does today.

- [ ] **Step 2: Commit**

```bash
git add src/components/I18nProvider.tsx
git commit -m "feat: add I18nProvider client wrapper"
```

---

## Task 12: Create the root layout

**Files:**
- Create: `src/app/layout.tsx`

- [ ] **Step 1: Create the file**

This ports the static `<head>` content from `index.html` (fonts, GA, EmailJS SDK script, JSON-LD, favicons, theme color) plus wraps children in `AuthProvider`/`I18nProvider`/`SpeedInsights`.

```tsx
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { AuthProvider } from '../contexts/AuthContext';
import I18nProvider from '../components/I18nProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://notifcar.fr'),
  keywords: [
    'NotifCar',
    'QR code voiture',
    'alerte automobiliste',
    'protection véhicule',
    'notification voiture',
    'application mobile voiture',
    'rayure voiture',
    'stationnement gênant',
    'véhicule connecté',
  ],
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/favicon-32.png', sizes: '32x32', type: 'image/png' }],
    apple: [{ url: '/favicon-32.png', sizes: '180x180', type: 'image/png' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#3B7FFF',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MobileApplication',
              name: 'NotifCar',
              description:
                'Application mobile permettant de recevoir des alertes anonymes concernant votre véhicule grâce à un QR code unique.',
              url: 'https://notifcar.fr',
              applicationCategory: 'UtilitiesApplication',
              operatingSystem: 'iOS, Android',
              inLanguage: 'fr-FR',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
              logo: { '@type': 'ImageObject', url: 'https://notifcar.fr/notifcarlogo.png' },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'NotifCar',
              url: 'https://notifcar.fr',
              logo: 'https://notifcar.fr/notifcarlogo.png',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H2BN4NDN48"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H2BN4NDN48');
          `}
        </Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          strategy="afterInteractive"
        />
        <I18nProvider>
          <AuthProvider>{children}</AuthProvider>
        </I18nProvider>
        <SpeedInsights sampleRate={1} />
      </body>
    </html>
  );
}
```

Note: `SpeedInsights` moves from `@vercel/speed-insights/react` (with `framework="vite"`) to `@vercel/speed-insights/next`, which auto-detects the Next.js router — no `framework` prop needed. The `beforeSend` passthrough from the old code (`(data) => data`, a no-op) is dropped since it did nothing.

- [ ] **Step 2: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: add Next.js root layout"
```

---

## Task 13: Migrate `Header.tsx`

**Files:**
- Modify: `src/components/layout/Header.tsx`

- [ ] **Step 1: Add `'use client'`, drop the `react-router`-shaped props, call the hook directly, fix the logo import**

old_string:
```tsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { type Page } from '../../hooks/useNavigation';
import notifcarLogo from '../../assets/notifcarlogo.png';
import { RegistrationModal } from '../modals';
import LanguageSwitcher from '../ui/LanguageSwitcher';

interface HeaderProps {
  onNavigate?: (page: Page) => void;
  onScrollToSection?: (sectionId: string) => void;
  onOpenRegistration?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onOpenRegistration }) => {
  const { t } = useTranslation();
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
```

new_string:
```tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { useAppNavigation } from '../../hooks/useNavigation';
import { RegistrationModal } from '../modals';
import LanguageSwitcher from '../ui/LanguageSwitcher';

interface HeaderProps {
  onOpenRegistration?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenRegistration }) => {
  const { t } = useTranslation();
  const { isAuthenticated, user, logout } = useAuth();
  const { navigateTo } = useAppNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
```

- [ ] **Step 2: Replace the `onNavigate?.(...)` call sites with `navigateTo(...)`**

old_string:
```tsx
  const handleLogout = () => { logout(); onNavigate?.('landing'); };

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    onNavigate?.('landing');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const navLinks = [
    { label: t('header.nav.howItWorks'), action: () => scrollTo('how-it-works') },
    { label: t('header.nav.features'), action: () => scrollTo('features') },
    { label: t('header.nav.pricing'), action: () => onNavigate?.('pricing') },
    { label: t('header.nav.contact'), action: () => onNavigate?.('contact') },
  ];
```

new_string:
```tsx
  const handleLogout = () => { logout(); navigateTo('landing'); };

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    navigateTo('landing');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const navLinks = [
    { label: t('header.nav.howItWorks'), action: () => scrollTo('how-it-works') },
    { label: t('header.nav.features'), action: () => scrollTo('features') },
    { label: t('header.nav.pricing'), action: () => navigateTo('pricing') },
    { label: t('header.nav.contact'), action: () => navigateTo('contact') },
  ];
```

- [ ] **Step 3: Fix the logo `<img>` (was a bundler import, now reads from `public/notifcarlogo.png` directly)**

old_string:
```tsx
          <button onClick={() => onNavigate?.('landing')} className="flex-shrink-0 logo-anim">
            <img src={notifcarLogo} alt="NotifCar" className="h-5 w-auto" />
          </button>
```

new_string:
```tsx
          <button onClick={() => navigateTo('landing')} className="flex-shrink-0 logo-anim">
            <img src="/notifcarlogo.png" alt="NotifCar" className="h-5 w-auto" />
          </button>
```

(`public/notifcarlogo.png` already exists in the repo. The old code imported `src/assets/notifcarlogo.png` as a bundler asset; Next.js's static image imports return a `StaticImageData` object rather than a URL string, which would break a plain `<img src={...}>`, so pointing directly at the existing public file is the simplest correct fix.)

- [ ] **Step 4: Visually confirm no other `onNavigate` references remain in the file**

Run: `grep -n "onNavigate" src/components/layout/Header.tsx`
Expected: no matches.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/Header.tsx
git commit -m "feat: migrate Header to Next.js client navigation"
```

---

## Task 14: Migrate `Footer.tsx`

**Files:**
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Add `'use client'`, drop the prop, call the hook, fix the logo import**

old_string:
```tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import notifcarLogo from '../../assets/notifcarlogo.png';
import { type Page } from '../../hooks/useNavigation';

interface FooterProps {
  onNavigate?: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useTranslation();
```

new_string:
```tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppNavigation } from '../../hooks/useNavigation';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { navigateTo } = useAppNavigation();
```

- [ ] **Step 2: Fix the logo image**

old_string:
```tsx
            <img src={notifcarLogo} alt="NotifCar" className="h-5 w-auto mb-5" style={{ filter: 'brightness(0) invert(1)' }} />
```

new_string:
```tsx
            <img src="/notifcarlogo.png" alt="NotifCar" className="h-5 w-auto mb-5" style={{ filter: 'brightness(0) invert(1)' }} />
```

- [ ] **Step 3: Replace every `onNavigate?.(...)` with `navigateTo(...)`**

old_string:
```tsx
                {[
                  { label: t('footer.links.howItWorks'), action: () => onNavigate?.('landing') },
                  { label: t('footer.links.features'), action: () => onNavigate?.('landing') },
                  { label: t('footer.links.pricing'), action: () => onNavigate?.('pricing') },
                ].map((l) => (
```

new_string:
```tsx
                {[
                  { label: t('footer.links.howItWorks'), action: () => navigateTo('landing') },
                  { label: t('footer.links.features'), action: () => navigateTo('landing') },
                  { label: t('footer.links.pricing'), action: () => navigateTo('pricing') },
                ].map((l) => (
```

old_string:
```tsx
                {[
                  { label: t('footer.links.contact'), action: () => onNavigate?.('contact') },
                  { label: t('footer.links.fleets'), action: () => onNavigate?.('contact') },
                  { label: t('footer.links.partners'), action: () => onNavigate?.('contact') },
                ].map((l) => (
```

new_string:
```tsx
                {[
                  { label: t('footer.links.contact'), action: () => navigateTo('contact') },
                  { label: t('footer.links.fleets'), action: () => navigateTo('contact') },
                  { label: t('footer.links.partners'), action: () => navigateTo('contact') },
                ].map((l) => (
```

old_string:
```tsx
                <li>
                  <button onClick={() => onNavigate?.('privacy')} className="text-xs sm:text-sm transition-colors hover:text-white text-left leading-snug" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {t('footer.links.privacy')}
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate?.('cgu')} className="text-xs sm:text-sm transition-colors hover:text-white text-left leading-snug" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {t('footer.links.cgu')}
                  </button>
                </li>
```

new_string:
```tsx
                <li>
                  <button onClick={() => navigateTo('privacy')} className="text-xs sm:text-sm transition-colors hover:text-white text-left leading-snug" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {t('footer.links.privacy')}
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo('cgu')} className="text-xs sm:text-sm transition-colors hover:text-white text-left leading-snug" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {t('footer.links.cgu')}
                  </button>
                </li>
```

- [ ] **Step 4: Confirm no callers still pass `onNavigate` as a prop to `<Footer>`**

This is fixed up in Tasks 17, 18, 19, 20, 21 (the pages) — covered there, not here.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: migrate Footer to Next.js client navigation"
```

---

## Task 15: Migrate `Profils.tsx`

**Files:**
- Modify: `src/components/features/Profils.tsx`

- [ ] **Step 1: Add `'use client'`, drop the prop, call the hook**

old_string:
```tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { type Page } from '../../hooks/useNavigation';

interface ProfilsProps {
  onNavigate?: (page: Page) => void;
}
```

new_string:
```tsx
'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppNavigation } from '../../hooks/useNavigation';
```

- [ ] **Step 2: Update the component signature and the one call site**

old_string:
```tsx
const Profils: React.FC<ProfilsProps> = ({ onNavigate }) => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
```

new_string:
```tsx
const Profils: React.FC = () => {
  const { t } = useTranslation();
  const { navigateTo } = useAppNavigation();
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
```

old_string:
```tsx
              <button
                onClick={() => onNavigate?.('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: color }}
              >
```

new_string:
```tsx
              <button
                onClick={() => navigateTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: color }}
              >
```

- [ ] **Step 3: Commit**

```bash
git add src/components/features/Profils.tsx
git commit -m "feat: migrate Profils to Next.js client navigation"
```

---

## Task 16: Add `'use client'` to the remaining hook/browser-API-using components

**Files:**
- Modify: `src/components/features/Fonctionnalites.tsx`
- Modify: `src/components/features/Fonctionnement.tsx`
- Modify: `src/components/features/QRCodeSection.tsx`
- Modify: `src/components/features/Scenarios.tsx`
- Modify: `src/components/features/FAQ.tsx`
- Modify: `src/components/ui/CookieBanner.tsx`
- Modify: `src/components/ui/Modal.tsx`
- Modify: `src/components/ui/LanguageSwitcher.tsx`
- Modify: `src/components/modals/RegistrationModal.tsx`

None of these files need any logic change — they only call `useTranslation`, hold local `useState`/`useEffect`, or touch `window`/`document`/`localStorage`, all of which require the file to be a Client Component in the App Router. Insert `'use client';` followed by a blank line as the very first line of each file, leaving the rest of the file untouched.

- [ ] **Step 1: `src/components/features/Fonctionnalites.tsx`**

old_string:
```tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
```

new_string:
```tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
```

- [ ] **Step 2: `src/components/features/Fonctionnement.tsx`**

old_string:
```tsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RegistrationModal } from '../modals';
```

new_string:
```tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RegistrationModal } from '../modals';
```

- [ ] **Step 3: `src/components/features/QRCodeSection.tsx`**

old_string:
```tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
```

new_string:
```tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
```

- [ ] **Step 4: `src/components/features/Scenarios.tsx`**

old_string:
```tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
```

new_string:
```tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
```

- [ ] **Step 5: `src/components/features/FAQ.tsx`**

old_string:
```tsx
import React, { useId, useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
```

new_string:
```tsx
'use client';

import React, { useId, useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
```

- [ ] **Step 6: `src/components/ui/CookieBanner.tsx`**

old_string:
```tsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
```

new_string:
```tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
```

- [ ] **Step 7: `src/components/ui/Modal.tsx`**

old_string:
```tsx
import React, { useEffect } from 'react';
```

new_string:
```tsx
'use client';

import React, { useEffect } from 'react';
```

- [ ] **Step 8: `src/components/ui/LanguageSwitcher.tsx`**

old_string:
```tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
```

new_string:
```tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
```

- [ ] **Step 9: `src/components/modals/RegistrationModal.tsx`**

old_string:
```tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../ui/Modal';
```

new_string:
```tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../ui/Modal';
```

- [ ] **Step 10: Verify every file in this task now starts with `'use client'`**

Run: `for f in src/components/features/Fonctionnalites.tsx src/components/features/Fonctionnement.tsx src/components/features/QRCodeSection.tsx src/components/features/Scenarios.tsx src/components/features/FAQ.tsx src/components/ui/CookieBanner.tsx src/components/ui/Modal.tsx src/components/ui/LanguageSwitcher.tsx src/components/modals/RegistrationModal.tsx; do head -n1 "$f"; done`
Expected: every line printed is `'use client';`.

- [ ] **Step 11: Commit**

```bash
git add src/components/features/Fonctionnalites.tsx src/components/features/Fonctionnement.tsx src/components/features/QRCodeSection.tsx src/components/features/Scenarios.tsx src/components/features/FAQ.tsx src/components/ui/CookieBanner.tsx src/components/ui/Modal.tsx src/components/ui/LanguageSwitcher.tsx src/components/modals/RegistrationModal.tsx
git commit -m "chore: mark hook-using components as client components"
```

---

## Task 17: Migrate `LandingPage.tsx`

**Files:**
- Modify: `src/pages/LandingPage.tsx`

- [ ] **Step 1: Add `'use client'`, drop the props (Header/Profils/Footer are now self-sufficient)**

old_string:
```tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import { RegistrationModal } from '../components/modals';
import QRCodeSection from '../components/features/QRCodeSection';
import Scenarios from '../components/features/Scenarios';
import Fonctionnement from '../components/features/Fonctionnement';
import Fonctionnalites from '../components/features/Fonctionnalites';
import Profils from '../components/features/Profils';
import FAQ from '../components/features/FAQ';
import Footer from '../components/layout/Footer';
import CookieBanner from '../components/ui/CookieBanner';
import { type Page } from '../hooks/useNavigation';

interface LandingPageProps {
  onNavigate?: (page: Page) => void;
  onScrollToSection?: (sectionId: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate, onScrollToSection }) => {
  const { t } = useTranslation();
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header
        onNavigate={onNavigate}
        onScrollToSection={onScrollToSection}
        onOpenRegistration={() => setIsRegistrationModalOpen(true)}
      />
```

new_string:
```tsx
'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import { RegistrationModal } from '../components/modals';
import QRCodeSection from '../components/features/QRCodeSection';
import Scenarios from '../components/features/Scenarios';
import Fonctionnement from '../components/features/Fonctionnement';
import Fonctionnalites from '../components/features/Fonctionnalites';
import Profils from '../components/features/Profils';
import FAQ from '../components/features/FAQ';
import Footer from '../components/layout/Footer';
import CookieBanner from '../components/ui/CookieBanner';

const LandingPage: React.FC = () => {
  const { t } = useTranslation();
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header
        onOpenRegistration={() => setIsRegistrationModalOpen(true)}
      />
```

- [ ] **Step 2: Drop the props passed to `Profils` and `Footer`**

old_string:
```tsx
      <QRCodeSection />
      <Scenarios />
      <Fonctionnement />
      <Fonctionnalites />
      <Profils onNavigate={onNavigate} />
      <FAQ />
      <Footer onNavigate={onNavigate} />
      <CookieBanner />
```

new_string:
```tsx
      <QRCodeSection />
      <Scenarios />
      <Fonctionnement />
      <Fonctionnalites />
      <Profils />
      <FAQ />
      <Footer />
      <CookieBanner />
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/LandingPage.tsx
git commit -m "feat: migrate LandingPage to Next.js, drop nav prop-drilling"
```

---

## Task 18: Migrate `ContactPage.tsx`

**Files:**
- Modify: `src/pages/ContactPage.tsx`

- [ ] **Step 1: Add `'use client'`, drop the prop, call the hook, remove the `document.title` hack**

old_string:
```tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import { type Page } from '../hooks/useNavigation';

interface ContactPageProps {
  onNavigate?: (page: Page) => void;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', profil: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const profiles = t('contact.profiles', { returnObjects: true }) as string[];

  React.useEffect(() => {
    document.title = 'Contacter NotifCar — Réponse sous 24h';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', "Contactez l'équipe NotifCar pour toute question, projet ou partenariat. Réponse garantie sous 24h.");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
```

new_string:
```tsx
'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import { useAppNavigation } from '../hooks/useNavigation';

type Status = 'idle' | 'sending' | 'success' | 'error';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const { navigateTo } = useAppNavigation();
  const [form, setForm] = useState({ name: '', email: '', profil: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const profiles = t('contact.profiles', { returnObjects: true }) as string[];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
```

(The title/description are now set by `generateMetadata` in `src/app/contact/page.tsx`, added in Task 25.)

- [ ] **Step 2: Drop the `Header` prop and fix the one navigation call**

old_string:
```tsx
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onNavigate={onNavigate} />
```

new_string:
```tsx
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
```

old_string:
```tsx
              <button onClick={() => onNavigate?.('landing')}
                className="px-8 py-3.5 rounded-xl font-black text-sm text-white hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #3B7FFF, #5B9FFF)', boxShadow: '0 8px 24px rgba(59,127,255,0.28)' }}>
                {t('contact.backHome')}
              </button>
```

new_string:
```tsx
              <button onClick={() => navigateTo('landing')}
                className="px-8 py-3.5 rounded-xl font-black text-sm text-white hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #3B7FFF, #5B9FFF)', boxShadow: '0 8px 24px rgba(59,127,255,0.28)' }}>
                {t('contact.backHome')}
              </button>
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/ContactPage.tsx
git commit -m "feat: migrate ContactPage to Next.js"
```

---

## Task 19: Migrate `PricingPage.tsx`

**Files:**
- Modify: `src/pages/PricingPage.tsx`

- [ ] **Step 1: Add `'use client'`, drop the prop, call the hook, remove the `document.title` hack**

old_string:
```tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import { type Page } from '../hooks/useNavigation';

const PLAN_META = [
  { accent: '#6b7280', ctaStyle: 'ghost' as const, isPopular: false, isEnterprise: false, tag: null, price: { monthly: '0', yearly: '0' }, suffix: '€' },
  { accent: '#3B7FFF', ctaStyle: 'filled' as const, isPopular: true,  isEnterprise: false, tag: 'popular', price: { monthly: '5,99', yearly: '4,49' }, suffix: '€' },
  { accent: '#26C29E', ctaStyle: 'teal'   as const, isPopular: false, isEnterprise: true,  tag: 'custom', price: { monthly: 'Devis', yearly: 'Devis' }, suffix: '' },
];

interface PricingPageProps {
  onNavigate?: (page: Page) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  const { t } = useTranslation();
  const yearly = false;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
```

new_string:
```tsx
'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import { useAppNavigation } from '../hooks/useNavigation';

const PLAN_META = [
  { accent: '#6b7280', ctaStyle: 'ghost' as const, isPopular: false, isEnterprise: false, tag: null, price: { monthly: '0', yearly: '0' }, suffix: '€' },
  { accent: '#3B7FFF', ctaStyle: 'filled' as const, isPopular: true,  isEnterprise: false, tag: 'popular', price: { monthly: '5,99', yearly: '4,49' }, suffix: '€' },
  { accent: '#26C29E', ctaStyle: 'teal'   as const, isPopular: false, isEnterprise: true,  tag: 'custom', price: { monthly: 'Devis', yearly: 'Devis' }, suffix: '' },
];

const PricingPage: React.FC = () => {
  const { t } = useTranslation();
  const { navigateTo } = useAppNavigation();
  const yearly = false;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
```

- [ ] **Step 2: Remove the `document.title`/meta `useEffect` hack**

old_string:
```tsx
  React.useEffect(() => {
    document.title = 'Tarifs NotifCar — Basic, Premium et Entreprise';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Découvrez les offres NotifCar : version gratuite, Premium à 5,99€/mois (prix de lancement) et formule Entreprise sur mesure pour les flottes de véhicules.');
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onNavigate={onNavigate} />
```

new_string:
```tsx
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
```

- [ ] **Step 3: Fix the two `onNavigate?.('contact')` call sites**

old_string:
```tsx
                ) : plan.ctaStyle === 'teal' ? (
                  <button onClick={() => onNavigate?.('contact')}
                    className="w-full py-4 rounded-xl text-sm font-black transition-all hover:opacity-80"
```

new_string:
```tsx
                ) : plan.ctaStyle === 'teal' ? (
                  <button onClick={() => navigateTo('contact')}
                    className="w-full py-4 rounded-xl text-sm font-black transition-all hover:opacity-80"
```

old_string:
```tsx
        <button onClick={() => onNavigate?.('contact')}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-sm transition-all hover:opacity-90"
          style={{ background: 'white', color: '#3B7FFF', boxShadow: '0 8px 28px rgba(0,0,0,0.15)' }}>
          {t('pricing.ctaCta')}
        </button>
```

new_string:
```tsx
        <button onClick={() => navigateTo('contact')}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-sm transition-all hover:opacity-90"
          style={{ background: 'white', color: '#3B7FFF', boxShadow: '0 8px 28px rgba(0,0,0,0.15)' }}>
          {t('pricing.ctaCta')}
        </button>
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/PricingPage.tsx
git commit -m "feat: migrate PricingPage to Next.js"
```

---

## Task 20: Migrate `PrivacyPage.tsx`

**Files:**
- Modify: `src/pages/PrivacyPage.tsx`

`PrivacyPage` never calls `onNavigate` itself — it only forwards the prop to `Header`/`Footer`, which are now self-sufficient. So the prop is removed entirely with no replacement hook call needed.

- [ ] **Step 1: Add `'use client'`, drop the prop and the title-setting `useEffect`**

old_string:
```tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { type Page } from '../hooks/useNavigation';

interface PrivacyPageProps {
  onNavigate?: (page: Page) => void;
}
```

new_string:
```tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
```

- [ ] **Step 2: Update the component body**

old_string:
```tsx
const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  React.useEffect(() => {
    document.title = 'Politique de confidentialité — NotifCar';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', "Politique de confidentialité de NotifCar, conforme au RGPD. Informations sur la collecte, l'utilisation et la protection de vos données personnelles.");
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F0F4F8' }}>
      <Header onNavigate={onNavigate} />
```

new_string:
```tsx
const PrivacyPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F0F4F8' }}>
      <Header />
```

- [ ] **Step 3: Drop the prop passed to `Footer`**

old_string:
```tsx
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default PrivacyPage;
```

new_string:
```tsx
      <Footer />
    </div>
  );
};

export default PrivacyPage;
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/PrivacyPage.tsx
git commit -m "feat: migrate PrivacyPage to Next.js"
```

---

## Task 21: Migrate `CGUPage.tsx`

**Files:**
- Modify: `src/pages/CGUPage.tsx`

Same shape as Task 20 — `CGUPage` only forwards `onNavigate` to `Header`/`Footer`.

- [ ] **Step 1: Add `'use client'`, drop the prop**

old_string:
```tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { type Page } from '../hooks/useNavigation';

interface CGUPageProps {
  onNavigate?: (page: Page) => void;
}
```

new_string:
```tsx
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
```

- [ ] **Step 2: Update the component body**

old_string:
```tsx
const CGUPage: React.FC<CGUPageProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  React.useEffect(() => {
    document.title = "Conditions générales d'utilisation — NotifCar";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', "Conditions générales d'utilisation de NotifCar. Règles d'utilisation du service, abonnements, responsabilités et droit applicable.");
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F0F4F8' }}>
      <Header onNavigate={onNavigate} />
```

new_string:
```tsx
const CGUPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F0F4F8' }}>
      <Header />
```

- [ ] **Step 3: Drop the prop passed to `Footer`**

old_string:
```tsx
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default CGUPage;
```

new_string:
```tsx
      <Footer />
    </div>
  );
};

export default CGUPage;
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/CGUPage.tsx
git commit -m "feat: migrate CGUPage to Next.js"
```

---

## Task 22: Fix `import.meta.env` usage in `src/config/constants.ts`

**Files:**
- Modify: `src/config/constants.ts`

`import.meta.env` is Vite-specific and doesn't compile the same way under Next.js's bundler. Neither of these two values is actually consumed by any of the 5 migrated pages, but the file must still compile cleanly.

- [ ] **Step 1: Edit**

old_string:
```ts
export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
```

new_string:
```ts
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
```

old_string:
```ts
export const QR_CODE_CONFIG = {
  baseUrl: import.meta.env.VITE_QR_CODE_BASE_URL || 'https://notifcar.com/qr',
```

new_string:
```ts
export const QR_CODE_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_QR_CODE_BASE_URL || 'https://notifcar.com/qr',
```

- [ ] **Step 2: Commit**

```bash
git add src/config/constants.ts
git commit -m "fix: replace import.meta.env with process.env for Next.js"
```

---

## Task 23: Create `src/app/page.tsx` (home route)

**Files:**
- Create: `src/app/page.tsx`

- [ ] **Step 1: Create the file**

```tsx
import type { Metadata } from 'next';
import { buildMetadata } from '../lib/seo';
import LandingPage from '../pages/LandingPage';

export const metadata: Metadata = buildMetadata({
  title: 'NotifCar - Protégez votre voiture avec un QR code, alertes instantanées',
  description:
    "NotifCar protège votre voiture grâce à un QR code unique. Recevez des alertes instantanées en cas de rayure, accident ou stationnement gênant — de façon anonyme et sécurisée.",
  path: '/',
});

export default function Page() {
  return <LandingPage />;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add / route with per-page metadata"
```

---

## Task 24: Create `src/app/tarifs/page.tsx`

**Files:**
- Create: `src/app/tarifs/page.tsx`

- [ ] **Step 1: Create the file**

```tsx
import type { Metadata } from 'next';
import { buildMetadata } from '../../lib/seo';
import PricingPage from '../../pages/PricingPage';

export const metadata: Metadata = buildMetadata({
  title: 'Tarifs NotifCar — Basic, Premium et Entreprise',
  description:
    'Découvrez les offres NotifCar : version gratuite, Premium à 5,99€/mois (prix de lancement) et formule Entreprise sur mesure pour les flottes de véhicules.',
  path: '/tarifs',
});

export default function Page() {
  return <PricingPage />;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/tarifs/page.tsx
git commit -m "feat: add /tarifs route with per-page metadata"
```

---

## Task 25: Create `src/app/contact/page.tsx`

**Files:**
- Create: `src/app/contact/page.tsx`

- [ ] **Step 1: Create the file**

```tsx
import type { Metadata } from 'next';
import { buildMetadata } from '../../lib/seo';
import ContactPage from '../../pages/ContactPage';

export const metadata: Metadata = buildMetadata({
  title: 'Contacter NotifCar — Réponse sous 24h',
  description:
    "Contactez l'équipe NotifCar pour toute question, projet ou partenariat. Réponse garantie sous 24h.",
  path: '/contact',
});

export default function Page() {
  return <ContactPage />;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/contact/page.tsx
git commit -m "feat: add /contact route with per-page metadata"
```

---

## Task 26: Create `src/app/cgu/page.tsx`

**Files:**
- Create: `src/app/cgu/page.tsx`

- [ ] **Step 1: Create the file**

```tsx
import type { Metadata } from 'next';
import { buildMetadata } from '../../lib/seo';
import CGUPage from '../../pages/CGUPage';

export const metadata: Metadata = buildMetadata({
  title: "Conditions générales d'utilisation — NotifCar",
  description:
    "Conditions générales d'utilisation de NotifCar. Règles d'utilisation du service, abonnements, responsabilités et droit applicable.",
  path: '/cgu',
});

export default function Page() {
  return <CGUPage />;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/cgu/page.tsx
git commit -m "feat: add /cgu route with per-page metadata"
```

---

## Task 27: Create `src/app/confidentialite/page.tsx`

**Files:**
- Create: `src/app/confidentialite/page.tsx`

- [ ] **Step 1: Create the file**

```tsx
import type { Metadata } from 'next';
import { buildMetadata } from '../../lib/seo';
import PrivacyPage from '../../pages/PrivacyPage';

export const metadata: Metadata = buildMetadata({
  title: 'Politique de confidentialité — NotifCar',
  description:
    "Politique de confidentialité de NotifCar, conforme au RGPD. Informations sur la collecte, l'utilisation et la protection de vos données personnelles.",
  path: '/confidentialite',
});

export default function Page() {
  return <PrivacyPage />;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/confidentialite/page.tsx
git commit -m "feat: add /confidentialite route with per-page metadata"
```

---

## Task 28: Add a real 404 page

**Files:**
- Create: `src/app/not-found.tsx`

- [ ] **Step 1: Create the file**

```tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4" style={{ backgroundColor: '#F0F4F8' }}>
      <h1 className="font-black text-gray-900 text-3xl mb-3">Page introuvable</h1>
      <p className="text-gray-500 text-sm mb-8">Cette page n'existe pas ou plus.</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl font-bold text-sm text-white"
        style={{ background: 'linear-gradient(135deg, #3B7FFF, #5B9FFF)' }}
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
```

This replaces today's soft-404 behavior (any unknown URL silently serves the SPA shell with a 200 status via the `vercel.json` catch-all rewrite, removed in Task 31) with a real HTTP 404.

- [ ] **Step 2: Commit**

```bash
git add src/app/not-found.tsx
git commit -m "feat: add a real 404 page instead of soft-404"
```

---

## Task 29: Replace the static sitemap with `src/app/sitemap.ts`

**Files:**
- Create: `src/app/sitemap.ts`
- Delete: `public/sitemap.xml`

- [ ] **Step 1: Delete the static file (it would otherwise collide with the generated `/sitemap.xml` route)**

Run: `rm public/sitemap.xml`

- [ ] **Step 2: Create `src/app/sitemap.ts`**

```ts
import type { MetadataRoute } from 'next';

const SITE_URL = 'https://notifcar.fr';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/tarifs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/cgu`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/confidentialite`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
```

The current `public/sitemap.xml` only lists 3 URLs (`/`, `/tarifs`, `/contact`), under-representing 2 of the 5 real routes now that the migration adds `/cgu` and `/confidentialite` (Tasks 26-27) — this was flagged during Task 27's code quality review as a gap that would partially undermine the migration's stated SEO goal (the design doc's whole premise is that `site:notifcar.fr` under-indexes "5 routes de contenu"). This task now emits all 5 real routes, with the two legal pages given a lower priority/yearly changeFrequency since their content rarely changes; Next.js serves this at `/sitemap.xml` with the correct `application/xml` content type automatically.

- [ ] **Step 3: Commit**

```bash
git add src/app/sitemap.ts
git rm public/sitemap.xml
git commit -m "feat: generate sitemap.xml from app/sitemap.ts"
```

---

## Task 30: Migrate the contact API route

**Files:**
- Create: `src/app/api/contact/route.ts`
- Delete: `api/contact.ts`

- [ ] **Step 1: Create the Route Handler with the exact same Resend logic and email template as `api/contact.ts`**

```ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, profil, message } = (await req.json()) as {
    name: string;
    email: string;
    profil: string;
    message: string;
  };

  if (!name || !email || !profil || !message) {
    return NextResponse.json({ error: 'Tous les champs sont obligatoires.' }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: 'NotifCar Contact <contact@notifcar.fr>',
      to: 'contact@notifcar.fr',
      replyTo: email,
      subject: `[NotifCar] Demande — ${profil}`,
      html: `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#3B7FFF 0%,#2048D8 100%);border-radius:16px 16px 0 0;padding:36px 40px;text-align:center;">
          <div style="display:inline-block;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.25);border-radius:50px;padding:6px 16px;margin-bottom:16px;">
            <span style="color:rgba(255,255,255,0.9);font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">Nouveau message</span>
          </div>
          <div style="font-size:28px;font-weight:900;color:#ffffff;letter-spacing:-0.03em;line-height:1.1;margin-bottom:6px;">
            NotifCar
          </div>
          <div style="font-size:14px;color:rgba(255,255,255,0.7);">Formulaire de contact</div>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:36px 40px;">

          <!-- Badge profil -->
          <div style="margin-bottom:28px;">
            <span style="display:inline-block;background:#EEF3FF;color:#3B7FFF;font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;padding:6px 14px;border-radius:50px;border:1px solid #D6E4FF;">
              ${profil}
            </span>
          </div>

          <!-- Infos expéditeur -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
            <tr>
              <td style="padding:14px 18px;background:#f8faff;border-radius:12px 12px 0 0;border-bottom:1px solid #eef1f8;">
                <div style="font-size:10px;font-weight:700;color:#9ba8c0;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px;">Nom</div>
                <div style="font-size:16px;font-weight:700;color:#1a1f36;">${name}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 18px;background:#f8faff;border-radius:0 0 12px 12px;">
                <div style="font-size:10px;font-weight:700;color:#9ba8c0;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px;">Email</div>
                <div style="font-size:15px;font-weight:600;color:#3B7FFF;">
                  <a href="mailto:${email}" style="color:#3B7FFF;text-decoration:none;">${email}</a>
                </div>
              </td>
            </tr>
          </table>

          <!-- Message -->
          <div style="background:#f8faff;border-radius:12px;padding:20px 22px;border-left:3px solid #3B7FFF;">
            <div style="font-size:10px;font-weight:700;color:#9ba8c0;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:12px;">Message</div>
            <div style="font-size:15px;color:#2d3748;line-height:1.7;white-space:pre-wrap;">${message}</div>
          </div>

          <!-- CTA répondre -->
          <div style="text-align:center;margin-top:32px;">
            <a href="mailto:${email}?subject=Re: [NotifCar] Votre demande"
               style="display:inline-block;background:linear-gradient(135deg,#3B7FFF,#5B9FFF);color:#ffffff;font-size:14px;font-weight:800;text-decoration:none;padding:14px 32px;border-radius:50px;letter-spacing:-0.01em;box-shadow:0 6px 20px rgba(59,127,255,0.35);">
              Répondre à ${name} →
            </a>
          </div>

        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f4f6fb;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;border-top:1px solid #eaecf4;">
          <div style="font-size:12px;color:#9ba8c0;line-height:1.6;">
            Ce message a été envoyé depuis le formulaire de contact<br>
            <a href="https://notifcar.fr" style="color:#3B7FFF;text-decoration:none;font-weight:600;">notifcar.fr</a>
            &nbsp;·&nbsp; Hébergé en France &nbsp;·&nbsp; RGPD
          </div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }
}
```

`ContactPage.tsx`'s `fetch('/api/contact', { method: 'POST', ... })` call (Task 18) needs no change — Next.js Route Handlers respond to the same URL shape.

- [ ] **Step 2: Delete the old Vercel function**

Run: `rm api/contact.ts`

(If `api/` is now empty, also run `rmdir api` — check with `ls api` first.)

- [ ] **Step 3: Commit**

```bash
git add src/app/api/contact/route.ts
git rm api/contact.ts
git commit -m "feat: migrate /api/contact to a Next.js Route Handler"
```

---

## Task 31: Remove Vite entry points and Vercel SPA rewrite config

**Files:**
- Delete: `index.html`
- Delete: `src/main.tsx`
- Delete: `src/App.tsx`
- Delete: `vite.config.ts`
- Delete: `vercel.json`

- [ ] **Step 1: Delete the Vite entry files**

Run: `rm index.html src/main.tsx src/App.tsx vite.config.ts`

These are fully superseded: `index.html`/`main.tsx` by `src/app/layout.tsx` (Task 12), `App.tsx`'s routing by the file-based routes in `src/app/*/page.tsx` (Tasks 23–27) and `useAppNavigation` (Task 9).

- [ ] **Step 2: Delete `vercel.json`**

Run: `rm vercel.json`

Vercel auto-detects Next.js with zero config. The old file's `framework: "vite"` + SPA catch-all rewrite to `index.html` would actively break Next.js routing if left in place; the `/assets/(.*)` cache-control rule was for Vite's `dist/assets/` output (Next.js's own `/_next/static/` assets are already cached optimally by the platform); the sitemap/robots content-type rules are superseded by Task 29's `sitemap.ts` and Next.js's built-in `public/` content-type handling.

- [ ] **Step 3: Commit**

```bash
git rm index.html src/main.tsx src/App.tsx vite.config.ts vercel.json
git commit -m "chore: remove Vite entry points and vercel.json SPA rewrite"
```

---

## Task 32: Build, verify, and run the manual checklist

**Files:** none (verification only)

- [ ] **Step 1: Type-check and build**

Run: `npm run build`
Expected: build completes successfully and prints a route table showing `/`, `/tarifs`, `/contact`, `/cgu`, `/confidentialite`, `/api/contact`, `/sitemap.xml` all marked as static (`○`) except `/api/contact` (`ƒ`, server function).

If the build fails, read the error carefully — most likely causes at this point are a leftover `onNavigate`/`Page` import that Tasks 13–21 missed, or a component using a hook without `'use client'`. Fix and re-run.

- [ ] **Step 2: Start the production build locally and curl each route**

Run: `npm run start &`

Wait until it's listening:
```bash
until curl -s -o /dev/null http://localhost:3000; do sleep 0.5; done
```

Then:
```bash
curl -s http://localhost:3000/ | grep -o '<h1[^<]*' | head -5
curl -s http://localhost:3000/tarifs | grep -c '<h1'
curl -s http://localhost:3000/contact | grep -c '<h1'
curl -s http://localhost:3000/cgu | grep -c '<h1'
curl -s http://localhost:3000/confidentialite | grep -c '<h1'
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/does-not-exist
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/formulaire.html
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/robots.txt
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/sitemap.xml
```

Expected: each of `/`, `/tarifs`, `/contact`, `/cgu`, `/confidentialite` returns raw HTML containing real heading text (not just `<meta>` tags) — this is the core fix being verified. The unknown route returns `404`. `/formulaire.html`, `/robots.txt`, `/sitemap.xml` all return `200`.

Stop the server afterward: `kill %1` (or find and kill the `next start` process).

- [ ] **Step 3: Manual functional check (dev server)**

Run: `npm run dev`, then in a browser:
- Visit `/` — header, hero, all sections, footer render; language switcher (FR/EN/ES) changes visible text.
- Click through to `/tarifs`, `/contact`, `/cgu`, `/confidentialite` via header/footer links — confirm each loads and the browser tab title differs per page (open dev tools → check `<title>` and `<meta name="description">` per route).
- Submit the contact form on `/contact` — confirm it POSTs to `/api/contact` and shows the success state (requires `RESEND_API_KEY` to be set locally, e.g. in `.env.local`, for the email to actually send — the success/error UI path can still be checked either way).
- Open the registration modal from the header CTA — confirm it opens/closes correctly.
- Confirm the cookie banner appears on first visit and its accept/decline buttons persist to `localStorage` (check that it doesn't reappear on reload after accepting).
- i18next hydration check: in the browser console, run `localStorage.setItem('notifcar-lang', 'en')`, then hard-reload `/`. Watch the console for React hydration-mismatch warnings, and watch the page for a visible flash from French to English text right after load. This is a known risk flagged during Task 11's review (server render always falls back to `fallbackLng: 'fr'`, since `localStorage` isn't available at build time, while the client picks up the saved `en`/`es` choice via `LanguageDetector` after hydration). If you see hydration warnings or an objectionable flash, report it — it doesn't block this migration's core SEO fix, but should be tracked as a follow-up.

- [ ] **Step 4: Deploy to a Vercel preview (not production) and repeat the curl + visual checks against the preview URL**

Run: `npm run deploy:preview`

Once the preview URL is available, repeat Step 2's curl checks and Step 3's visual checks against it instead of `localhost:3000`.

- [ ] **Step 5: Report back before promoting to production**

This plan stops at the verified preview deployment. Promoting the preview to `notifcar.fr` and the Search Console "Inspect URL" recrawl step from the design doc are a separate, user-confirmed action — do not run `npm run deploy` (production) without explicit go-ahead, per the design doc's rollback/cutover section.
