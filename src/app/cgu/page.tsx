import type { Metadata } from 'next';
import { buildMetadata } from '../../lib/seo';
import CGUPage from '../../views/CGUPage';

export const metadata: Metadata = buildMetadata({
  title: "Conditions générales d'utilisation — NotifCar",
  description:
    "Conditions générales d'utilisation de NotifCar. Règles d'utilisation du service, abonnements, responsabilités et droit applicable.",
  path: '/cgu',
});

export default function Page() {
  return <CGUPage />;
}
