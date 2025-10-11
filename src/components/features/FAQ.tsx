import React, { useId, useMemo, useState, useEffect } from 'react';
import { FAQ_ITEMS, type FaqItem } from '../../data/faq';

const FaqItemRow: React.FC<{
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => {
  const contentId = useId();
  return (
    <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white">
      <button
        className="w-full flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary-500"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onToggle}
      >
        <span className="font-semibold text-neutral-900 text-sm sm:text-base pr-2">{item.question}</span>
        <svg
          className={`w-4 h-4 sm:w-5 sm:h-5 text-neutral-600 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 011.06 1.061l-4.24 4.24a.75.75 0 01-1.06 0l-4.24-4.24a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>
      <div
        id={contentId}
        className={`px-4 sm:px-5 pb-3 sm:pb-4 text-neutral-700 transition-[max-height,opacity] duration-300 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pt-1 leading-relaxed text-sm sm:text-base">{item.answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  // JSON-LD (FAQPage)
  const jsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }), []);

  useEffect(() => {
    const hash = window.location.hash?.replace('#', '');
    if (hash) {
      const exists = FAQ_ITEMS.find((f) => f.id === hash);
      if (exists) setOpenId(hash);
    }
  }, []);

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-title mb-3 sm:mb-4 bg-gradient-to-r from-indigo-700 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
            Foire aux questions
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">
            Les réponses aux questions les plus fréquentes sur NotifCar
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {FAQ_ITEMS.map((item) => (
            <FaqItemRow
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId((cur) => (cur === item.id ? null : item.id))}
            />
          ))}
        </div>

        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </section>
  );
};

export default FAQ;


