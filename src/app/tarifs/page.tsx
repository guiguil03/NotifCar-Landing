import type { Metadata } from 'next';
import { buildMetadata } from '../../lib/seo';
import PricingPage from '../../views/PricingPage';

export const metadata: Metadata = buildMetadata({
  title: 'Tarifs NotifCar — Basic, Premium et Entreprise',
  description:
    'Découvrez les offres NotifCar : version gratuite, Premium à 5,99€/mois (prix de lancement) et formule Entreprise sur mesure pour les flottes de véhicules.',
  path: '/tarifs',
});

export default function Page() {
  return <PricingPage />;
}
