import { useState, useCallback } from 'react';

export type Page = 'landing' | 'auth' | 'dashboard' | 'profile';

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
