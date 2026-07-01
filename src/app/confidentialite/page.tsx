import type { Metadata } from 'next';
import { buildMetadata } from '../../lib/seo';
import PrivacyPage from '../../views/PrivacyPage';

export const metadata: Metadata = buildMetadata({
  title: 'Politique de confidentialité — NotifCar',
  description:
    "Politique de confidentialité de NotifCar, conforme au RGPD. Informations sur la collecte, l'utilisation et la protection de vos données personnelles.",
  path: '/confidentialite',
});

export default function Page() {
  return <PrivacyPage />;
}
