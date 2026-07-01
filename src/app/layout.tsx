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
