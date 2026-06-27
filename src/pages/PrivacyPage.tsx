import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { type Page } from '../hooks/useNavigation';

interface PrivacyPageProps {
  onNavigate?: (page: Page) => void;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm border border-gray-100">
      <h2 className="text-sm font-bold mb-4" style={{ color: '#285AFF' }}>{title}</h2>
      {children}
    </div>
  );
}

function Body({ children }: { children: string }) {
  return <p className="text-sm text-gray-500 leading-relaxed mb-2 whitespace-pre-line">{children}</p>;
}

function Sub({ title }: { title: string }) {
  return <p className="text-xs font-bold text-gray-800 mt-4 mb-2">{title}</p>;
}

function BulletItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 mb-2">
      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#285AFF' }} />
      <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
    </div>
  );
}

function DurationRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start py-3 border-b border-gray-100 gap-4 last:border-0">
      <span className="text-sm font-medium text-gray-800">{label}</span>
      <span className="text-sm text-gray-500 text-right flex-shrink-0 max-w-[45%]">{value}</span>
    </div>
  );
}

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

      {/* Hero */}
      <div className="relative overflow-hidden pt-[calc(7rem+env(safe-area-inset-top,0px))] sm:pt-28 pb-12 sm:pb-14 px-4 sm:px-6 text-center"
        style={{ background: 'linear-gradient(160deg, #6EC6F5 0%, #3B7FFF 42%, #2048D8 75%, #1535B8 100%)' }}>
        <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.18)', color: 'white', border: '1px solid rgba(255,255,255,0.28)' }}>
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            {t('privacy.heroBadge')}
          </span>
          <h1 className="font-black text-white mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            {t('privacy.heroTitle')}
          </h1>
          <p className="text-white/70 text-base max-w-md mx-auto">{t('privacy.heroSubtitle')}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-10 sm:py-12 pb-[max(2.5rem,calc(1.5rem+env(safe-area-inset-bottom,0px)))]">

        <div className="flex items-start gap-4 rounded-2xl p-5 mb-6 border" style={{ backgroundColor: '#EFF6FF', borderColor: 'rgba(40,90,255,0.12)' }}>
          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="#285AFF" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0110 0v4"/>
          </svg>
          <p className="text-sm leading-relaxed font-medium" style={{ color: '#1E40AF' }}>{t('privacy.intro')}</p>
        </div>

        <Section title={t('privacy.art1Title')}>
          <Body>{t('privacy.art1Body')}</Body>
          <Body>{t('privacy.art1Email')}</Body>
        </Section>

        <Section title={t('privacy.art2Title')}>
          <Body>{t('privacy.art2Body')}</Body>
          <BulletItem text={t('privacy.art2B1')} />
          <BulletItem text={t('privacy.art2B2')} />
          <BulletItem text={t('privacy.art2B3')} />
          <BulletItem text={t('privacy.art2B4')} />
          <BulletItem text={t('privacy.art2B5')} />
          <BulletItem text={t('privacy.art2B6')} />
          <BulletItem text={t('privacy.art2B7')} />
        </Section>

        <Section title={t('privacy.art3Title')}>
          <Sub title={t('privacy.art3Sub1')} />
          <BulletItem text={t('privacy.art3B1_1')} />
          <BulletItem text={t('privacy.art3B1_2')} />
          <BulletItem text={t('privacy.art3B1_3')} />
          <Sub title={t('privacy.art3Sub2')} />
          <BulletItem text={t('privacy.art3B2_1')} />
          <BulletItem text={t('privacy.art3B2_2')} />
          <BulletItem text={t('privacy.art3B2_3')} />
          <Sub title={t('privacy.art3Sub3')} />
          <BulletItem text={t('privacy.art3B3_1')} />
          <BulletItem text={t('privacy.art3B3_2')} />
          <BulletItem text={t('privacy.art3B3_3')} />
          <Sub title={t('privacy.art3Sub4')} />
          <BulletItem text={t('privacy.art3B4_1')} />
          <BulletItem text={t('privacy.art3B4_2')} />
          <BulletItem text={t('privacy.art3B4_3')} />
          <Sub title={t('privacy.art3Sub5')} />
          <BulletItem text={t('privacy.art3B5_1')} />
          <BulletItem text={t('privacy.art3B5_2')} />
          <Sub title={t('privacy.art3Sub6')} />
          <Body>{t('privacy.art3Body6')}</Body>
          <Sub title={t('privacy.art3Sub7')} />
          <Body>{t('privacy.art3Body7')}</Body>
        </Section>

        <Section title={t('privacy.art4Title')}>
          <BulletItem text={t('privacy.art4B1')} />
          <BulletItem text={t('privacy.art4B2')} />
          <BulletItem text={t('privacy.art4B3')} />
          <BulletItem text={t('privacy.art4B4')} />
          <BulletItem text={t('privacy.art4B5')} />
          <BulletItem text={t('privacy.art4B6')} />
          <BulletItem text={t('privacy.art4B7')} />
          <BulletItem text={t('privacy.art4B8')} />
          <BulletItem text={t('privacy.art4B9')} />
          <BulletItem text={t('privacy.art4B10')} />
        </Section>

        <Section title={t('privacy.art5Title')}>
          <Sub title={t('privacy.art5Sub1')} />
          <Body>{t('privacy.art5Body1')}</Body>
          <Sub title={t('privacy.art5Sub2')} />
          <Body>{t('privacy.art5Body2')}</Body>
          <Sub title={t('privacy.art5Sub3')} />
          <Body>{t('privacy.art5Body3')}</Body>
          <Sub title={t('privacy.art5Sub4')} />
          <Body>{t('privacy.art5Body4')}</Body>
        </Section>

        <Section title={t('privacy.art6Title')}>
          <Body>{t('privacy.art6Body')}</Body>
        </Section>

        <Section title={t('privacy.art7Title')}>
          <BulletItem text={t('privacy.art7B1')} />
          <BulletItem text={t('privacy.art7B2')} />
          <BulletItem text={t('privacy.art7B3')} />
          <BulletItem text={t('privacy.art7B4')} />
          <BulletItem text={t('privacy.art7B5')} />
          <BulletItem text={t('privacy.art7B6')} />
          <BulletItem text={t('privacy.art7B7')} />
        </Section>

        <Section title={t('privacy.art8Title')}>
          <DurationRow label={t('privacy.art8R1L')} value={t('privacy.art8R1V')} />
          <DurationRow label={t('privacy.art8R2L')} value={t('privacy.art8R2V')} />
          <DurationRow label={t('privacy.art8R3L')} value={t('privacy.art8R3V')} />
          <DurationRow label={t('privacy.art8R4L')} value={t('privacy.art8R4V')} />
          <DurationRow label={t('privacy.art8R5L')} value={t('privacy.art8R5V')} />
          <DurationRow label={t('privacy.art8R6L')} value={t('privacy.art8R6V')} />
        </Section>

        <Section title={t('privacy.art9Title')}>
          <Body>{t('privacy.art9Body')}</Body>
        </Section>

        <Section title={t('privacy.art10Title')}>
          <Body>{t('privacy.art10Body')}</Body>
          <BulletItem text={t('privacy.art10B1')} />
          <BulletItem text={t('privacy.art10B2')} />
          <BulletItem text={t('privacy.art10B3')} />
        </Section>

        <Section title={t('privacy.art11Title')}>
          <Body>{t('privacy.art11Body')}</Body>
        </Section>

        <Section title={t('privacy.art12Title')}>
          <Body>{t('privacy.art12Body1')}</Body>
          <BulletItem text={t('privacy.art12B1')} />
          <BulletItem text={t('privacy.art12B2')} />
          <Body>{t('privacy.art12Body2')}</Body>
        </Section>

        <Section title={t('privacy.art13Title')}>
          <Body>{t('privacy.art13Body1')}</Body>
          <BulletItem text={t('privacy.art13B1')} />
          <BulletItem text={t('privacy.art13B2')} />
          <Body>{t('privacy.art13Body2')}</Body>
        </Section>

        <Section title={t('privacy.art14Title')}>
          <Body>{t('privacy.art14Body')}</Body>
        </Section>

        <Section title={t('privacy.art15Title')}>
          <Body>{t('privacy.art15Body1')}</Body>
          <BulletItem text={t('privacy.art15B1')} />
          <BulletItem text={t('privacy.art15B2')} />
          <BulletItem text={t('privacy.art15B3')} />
          <BulletItem text={t('privacy.art15B4')} />
          <Body>{t('privacy.art15Body2')}</Body>
        </Section>

        <Section title={t('privacy.art16Title')}>
          <Body>{t('privacy.art16Body')}</Body>
        </Section>

        <Section title={t('privacy.art17Title')}>
          <Body>{t('privacy.art17Body')}</Body>
        </Section>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default PrivacyPage;
