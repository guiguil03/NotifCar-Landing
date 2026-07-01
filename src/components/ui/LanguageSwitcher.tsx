'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.split('-')[0] ?? 'fr';

  return (
    <div className="flex items-center gap-0.5">
      {LANGUAGES.map(({ code, label, flag }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          className={`text-xs font-semibold px-2 py-1 rounded-lg transition-all ${
            currentLang === code
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-400 hover:text-gray-600'
          }`}
          aria-label={`Switch to ${label}`}
          title={flag}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
