import React, { useState } from 'react';

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
    name: 'Basic',
    subtitle: 'Gratuit',
    price: '0€',
    per: '/mois',
    cta: 'Commencer gratuitement',
    features: [
      { label: 'Notifications mensuelles : 5 / mois' },
      { label: 'Nombre de véhicules : 1' },
      { label: "Historique des alertes : 7 jours" },
      { label: 'Support utilisateur : Email standard' },
      { label: 'QR Code véhicule : Standard (générique)' },
      { label: 'Messagerie instantanée : Non' },
      { label: "Rapports d’activité : Non" },
      { label: 'Gestion multi-utilisateurs : Non' },
    ],
  },
  {
    name: 'Premium',
    subtitle: '3,99 euros / mois',
    price: '3,99€',
    per: '/mois',
    cta: 'Choisir ce plan',
    highlighted: true,
    features: [
      { label: 'Notifications mensuelles : Illimitées' },
      { label: 'Nombre de véhicules : 3' },
      { label: 'Historique des alertes : Historique complet' },
      { label: 'Support utilisateur : Prioritaire' },
      { label: 'QR Code véhicule : Personnalisé (couleur)' },
      { label: 'Messagerie instantanée : Chat direct entre conducteurs' },
      { label: "Rapports d’activité : Avancées" },
      { label: 'Gestion multi-utilisateurs : Non' },
    ],
  },
  {
    name: 'Entreprise',
    subtitle: 'Ajustable',
    price: '29,99€',
    per: '/mois',
    cta: 'Nous contacter',
    features: [
      { label: 'Notifications mensuelles : Illimitées' },
      { label: 'Nombre de véhicules : Illimité' },
      { label: 'Historique des alertes : Historique complet' },
      { label: 'Support utilisateur : Dédié 24/7' },
      { label: 'QR Code véhicule : Personnalisation entreprise' },
      { label: 'Messagerie instantanée : Chat personnalisé' },
      { label: "Rapports d’activité : Multi‑véhicules" },
      { label: 'Gestion multi-utilisateurs : Oui' },
    ],
  },
];

const CheckItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start space-x-2 sm:space-x-3">
    <span className="mt-0.5 inline-flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs sm:text-sm">✓</span>
    <span className="text-gray-600 text-sm sm:text-base">{text}</span>
  </li>
);

const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  const cardRing = plan.highlighted ? 'ring-2 ring-blue-500 border-l-4 border-l-blue-500' : 'ring-1 ring-gray-200';
  const priceColor = plan.highlighted ? 'text-blue-600' : 'text-gray-900';
  const badge = plan.highlighted ? (
    <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 z-10">
      <span className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        Plus populaire
      </span>
    </div>
  ) : null;

  return (
    <div className={`relative rounded-2xl bg-white p-4 sm:p-6 md:p-8 shadow-sm ${cardRing} ${plan.highlighted ? 'pt-6 sm:pt-8' : ''}`}> 
      {badge}
      <div className="mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl  text-gray-900">{plan.name}</h3>
        <p className="text-sm sm:text-base text-gray-600 mt-1">{plan.subtitle}</p>
      </div>

      <div className="mb-6 sm:mb-8 flex items-baseline gap-2 py-1">
        <span className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ${priceColor} leading-none`}>{plan.price}</span>
        <span className="text-gray-500 text-sm sm:text-base">{plan.per}</span>
      </div>

      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
        {plan.features.map((f) => (
          <CheckItem key={f.label} text={f.label} />
        ))}
      </ul>

      <button
        className={`w-full font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-200 text-sm sm:text-base ${
          plan.highlighted 
            ? 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:scale-105'
        }`}
      >
        {plan.cta}
      </button>
    </div>
  );
};

const Price: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Commencer sur le 2ème slide (plan à 9,99€)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % plans.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + plans.length) % plans.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className=" text-[#2633E1] font-light text-4xl">
            Choisissez le plan qui correspond à vos besoins
          </h2>
          <p className=" text-gray-600 text-2xl max-w-2xl mx-auto mt-4 sm:mt-6">
            Des options flexibles pour tous types d'utilisateurs, des particuliers aux entreprises avec des flottes importantes.
          </p>
        </div>

        {/* Desktop/Tablet Grid View */}
        <div className="hidden md:grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* Mobile/Tablet Slider */}
        <div className="md:hidden ">
          <div className="relative overflow-hidden pt-2 sm:pt-12">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {plans.map((plan) => (
                <div key={plan.name} className="font-poppins w-full flex-shrink-0 px-3 sm:px-4 pb-2">
                  <PlanCard plan={plan} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {plans.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-blue-600 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-4 sm:space-x-6">
            <button
              onClick={prevSlide}
              className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:scale-105 shadow-sm"
              aria-label="Slide précédent"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:scale-105 shadow-sm"
              aria-label="Slide suivant"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
