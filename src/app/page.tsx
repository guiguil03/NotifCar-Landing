import type { Metadata } from 'next';
import { buildMetadata } from '../lib/seo';
import LandingPage from '../views/LandingPage';

export const metadata: Metadata = buildMetadata({
  title: 'NotifCar - Protégez votre voiture avec un QR code, alertes instantanées',
  description:
    "NotifCar protège votre voiture grâce à un QR code unique. Recevez des alertes instantanées en cas de rayure, accident ou stationnement gênant — de façon anonyme et sécurisée.",
  path: '/',
});

export default function Page() {
  return <LandingPage />;
}
