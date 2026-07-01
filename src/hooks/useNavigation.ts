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
