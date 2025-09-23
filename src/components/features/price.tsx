import React from 'react';
import Button from '../ui/Button';

interface PlanFeature {
  label: string;
}

interface Plan {
  name: string;
  subtitle: string;
  price: string;
  per: string;
  cta: string;
  highlighted?: boolean;
  features: PlanFeature[];
}

const plans: Plan[] = [
  {
    name: 'Gratuit',
    subtitle: "Pour essayer l'application",
    price: '0€',
    per: '/mois',
    cta: 'Commencer gratuitement',
    features: [
      { label: "Jusqu'à 5 notifications/mois" },
      { label: '1 véhicule' },
      { label: 'Support par email' },
    ],
  },
  {
    name: 'Professionnel',
    subtitle: 'Pour les utilisateurs réguliers',
    price: '9,99€',
    per: '/mois',
    cta: 'Choisir ce plan',
    highlighted: true,
    features: [
      { label: 'Notifications illimitées' },
      { label: 'Jusqu’à 5 véhicules' },
      { label: 'Historique complet' },
      { label: 'Support prioritaire' },
      { label: 'Statistiques avancées' },
    ],
  },
  {
    name: 'Entreprise',
    subtitle: 'Pour les flottes automobiles',
    price: '29,99€',
    per: '/mois',
    cta: 'Nous Contacter',
    features: [
      { label: 'Tout du plan Professionnel' },
      { label: 'Véhicules illimités' },
      { label: 'Gestion multi-utilisateurs' },
      { label: 'API personnalisée' },
      { label: 'Support dédié 24/7' },
    ],
  },
];

const CheckItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start space-x-3">
    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">✓</span>
    <span className="text-gray-600">{text}</span>
  </li>
);

const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  const cardRing = plan.highlighted ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200';
  const priceColor = plan.highlighted ? 'text-indigo-700' : 'text-gray-900';
  const badge = plan.highlighted ? (
    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
      <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
        ★ Plus populaire
      </span>
    </div>
  ) : null;

  return (
    <div className={`relative rounded-2xl bg-white p-6 md:p-8 shadow-sm ${cardRing}`}> 
      {badge}
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
        <p className="text-sm text-indigo-700 mt-1">{plan.subtitle}</p>
      </div>

      <div className="mb-6 flex items-baseline gap-2">
        <span className={`text-5xl font-bold ${priceColor}`}>{plan.price}</span>
        <span className="text-gray-500">{plan.per}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((f) => (
          <CheckItem key={f.label} text={f.label} />
        ))}
      </ul>

      <Button
        variant={plan.highlighted ? 'primary' : 'outline'}
        size="lg"
        className={plan.highlighted ? 'w-full bg-indigo-600 hover:bg-indigo-700' : 'w-full'}
      >
        {plan.cta}
      </Button>
    </div>
  );
};

const Price: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700">Choisissez le plan qui correspond à vos besoins</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Des options flexibles pour tous types d'utilisateurs, des particuliers aux entreprises avec des flottes importantes.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
