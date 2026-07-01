import type { Metadata } from 'next';
import { buildMetadata } from '../../lib/seo';
import ContactPage from '../../views/ContactPage';

export const metadata: Metadata = buildMetadata({
  title: 'Contacter NotifCar — Réponse sous 24h',
  description:
    "Contactez l'équipe NotifCar pour toute question, projet ou partenariat. Réponse garantie sous 24h.",
  path: '/contact',
});

export default function Page() {
  return <ContactPage />;
}
