import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { RegistrationModal } from '../components/modals';
import { type Page } from '../hooks/useNavigation';

interface LandingPageProps {
  onNavigate?: (page: Page) => void;
  onScrollToSection?: (sectionId: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate, onScrollToSection }) => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onNavigate={onNavigate}
        onScrollToSection={onScrollToSection}
        onOpenRegistration={() => setIsRegistrationModalOpen(true)}
      />
      
      {/* Hero Section - Enhanced & Professional */}
      <section className="relative min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 text-slate-900 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e2e8f0%22%20fill-opacity%3D%220.2%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60 animate-pulse"></div>
          
          {/* Floating Car Icons with Animation */}
          <div className="absolute top-20 right-20 w-10 h-10 text-purple-300 animate-bounce">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full drop-shadow-sm">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
            </svg>
          </div>
          <div className="absolute bottom-20 left-20 w-8 h-8 text-purple-400 animate-pulse">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full drop-shadow-sm">
              <path d="M19 7h-1V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM8 6h8v1H8V6zm8 13H8a1 1 0 0 1-1-1V9h10v9a1 1 0 0 1-1 1z"/>
            </svg>
          </div>
          <div className="absolute top-1/2 left-10 w-6 h-6 text-blue-300 animate-pulse delay-1000">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
            </svg>
          </div>
          
          {/* Subtle Gradient Orbs */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-blue-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
          <div className="text-center w-full">
            {/* Enhanced Logo */}
            <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-3xl mb-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <svg className="w-14 h-14 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            {/* Enhanced Title with Car Icon */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
              <div className="flex flex-col xs:flex-row items-center justify-center gap-3 xs:gap-4 sm:gap-6 mb-6">
                <div className="relative">
                  <svg className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-purple-600 drop-shadow-lg animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
                  <div className="absolute -top-1 -right-1 xs:-top-1.5 xs:-right-1.5 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 text-yellow-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent animate-pulse text-center">
                  Communication automobile
                </span>
              </div>
              <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-slate-700 font-light text-center">
                sécurisée & instantanée
              </span>
            </h1>

            {/* Problem Statement */}
            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-8 max-w-4xl mx-auto">
              <p className="text-lg text-purple-800 font-medium">
                <span className="font-bold">Problème :</span> Lorsqu'un véhicule gêne ou est accidenté, il est difficile d'informer rapidement le propriétaire.
              </p>
            </div>

            {/* Solution Description */}
            <p className="text-xl md:text-2xl mb-8 text-slate-600 max-w-4xl mx-auto leading-relaxed">
              <span className="font-bold text-purple-600">Notifcar</span> propose une application mobile permettant de prévenir instantanément un automobiliste 
              grâce à un <span className="font-bold text-purple-500">QR code apposé sur son pare-brise</span>.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Fluidifier la communication</h3>
                <p className="text-purple-600">Entre automobilistes en 3 clics maximum</p>
              </div>
              
              <div className="bg-purple-100 p-6 rounded-lg border border-purple-300">
                <div className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Anonyme & sécurisé</h3>
                <p className="text-purple-700">Alternative universelle et conforme RGPD</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Réduire les désagréments</h3>
                <p className="text-gray-600">Liés aux incidents mineurs</p>
              </div>
            </div>

            {/* Slogan */}
            <p className="text-2xl font-bold text-purple-600 mb-12">
              "Votre véhicule vous parle, écoutez-le."
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button 
                onClick={() => setIsRegistrationModalOpen(true)}
                className="group relative bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-purple-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>S'inscrire maintenant</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                </div>
              </button>
              <button 
                onClick={() => onScrollToSection?.('features')}
                className="group bg-white/80 backdrop-blur-sm border-2 border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 px-10 py-5 rounded-2xl font-semibold text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-purple-200/50"
              >
                <svg className="w-6 h-6 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>En savoir plus</span>
                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>

            {/* Target Audience */}
            <div className="bg-gray-50 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Public cible :</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Particuliers</span>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-4 h-4 text-purple-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Professionnels</span>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Entreprises</span>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Collectivités</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Key Features Section */}
      <section id="features" className="py-24 bg-gradient-to-br from-white via-purple-50/20 to-blue-50/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-200/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-blue-200/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Fonctionnalités principales
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-700 bg-clip-text text-transparent mb-6">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Une solution complète et innovante pour la communication automobile
            </p>
            
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-3 h-3 text-yellow-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  Scannez le QR code
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pointez votre caméra vers le QR code apposé sur le pare-brise du véhicule. 
                  <span className="font-semibold text-purple-600"> Reconnaissance automatique en moins d'1 seconde.</span>
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-3 h-3 text-green-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  Rédigez votre message
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Choisissez le type de notification (info, alerte, urgent) et rédigez votre message personnalisé.
                  <span className="font-semibold text-purple-600"> Interface intuitive en 3 clics maximum.</span>
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-3 h-3 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  Envoi instantané
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Le propriétaire reçoit immédiatement une notification push sur son mobile.
                  <span className="font-semibold text-gray-600"> Temps de réponse garanti &lt; 3 secondes.</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-3 h-3 text-green-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Authentification sécurisée</h3>
              <p className="text-gray-600 leading-relaxed">Email, Google, Apple - Conformité RGPD</p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-xs font-bold text-yellow-800">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">QR code unique</h3>
              <p className="text-gray-600 leading-relaxed">Apposé sur le pare-brise de chaque véhicule</p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 1 0-15 0v5h5l-5 5-5-5h5v-5a7.5 7.5 0 1 1 15 0v5z" />
                </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-xs font-bold text-blue-800">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Notifications push</h3>
              <p className="text-gray-600 leading-relaxed">Temps de réponse &lt; 5 secondes</p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-400 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-xs font-bold text-red-800">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Historique des échanges</h3>
              <p className="text-gray-600 leading-relaxed">Messagerie interne et traçabilité</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Element */}
      <div className="relative bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <div className="w-8 h-0.5 bg-purple-200"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="w-8 h-0.5 bg-purple-200"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tarifs
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez le plan qui correspond à vos besoins
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan Gratuit */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 relative">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Gratuit</h3>
                <p className="text-gray-600 mb-6">Pour essayer l'application</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900">0€</span>
                  <span className="text-gray-600">/mois</span>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Jusqu'à 5 notifications/mois</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">1 véhicule</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Support par email</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200">
                  Commencer gratuitement
                </button>
              </div>
            </div>

            {/* Plan Professionnel */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Populaire
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professionnel</h3>
                <p className="text-gray-600 mb-6">Pour les utilisateurs réguliers</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-purple-600">9,99€</span>
                  <span className="text-gray-600">/mois</span>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Notifications illimitées</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Jusqu'à 5 véhicules</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Historique complet</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Support prioritaire</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Statistiques avancées</span>
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200">
                  Choisir ce plan
                </button>
              </div>
            </div>

            {/* Plan Entreprise */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 relative">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Entreprise</h3>
                <p className="text-gray-600 mb-6">Pour les flottes automobiles</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900">29,99€</span>
                  <span className="text-gray-600">/mois</span>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Tout du plan Professionnel</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Véhicules illimités</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Gestion multi-utilisateurs</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">API personnalisée</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Support dédié 24/7</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200">
                  Nous contacter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white relative overflow-hidden border-t border-gray-100">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-100/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-blue-100/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-8xl mx-auto text-center px-1 xs:px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 relative">
          <div className="inline-flex items-center gap-1.5 xs:gap-2 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 px-3 py-1.5 xs:px-4 xs:py-2 sm:px-6 sm:py-3 rounded-full text-xs xs:text-sm sm:text-sm font-semibold mb-4 xs:mb-5 sm:mb-6 md:mb-8 shadow-lg border border-purple-200">
            <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="hidden xs:inline">Rejoignez la révolution</span>
            <span className="xs:hidden">Révolution</span>
          </div>
          
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 xs:mb-5 sm:mb-6 md:mb-8 leading-tight px-0.5">
            Prêt à révolutionner la 
            <span className="block bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              communication automobile ?
            </span>
          </h2>
          
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 max-w-6xl mx-auto leading-relaxed px-1">
            Rejoignez des milliers d'automobilistes qui utilisent déjà Notifcar pour une communication plus fluide et sécurisée
          </p>
          
          <div className="flex flex-col xs:flex-col sm:flex-row gap-3 xs:gap-4 sm:gap-6 md:gap-8 justify-center items-center w-full">
            {/* Bouton Principal - S'inscrire */}
            <button 
              onClick={() => setIsRegistrationModalOpen(true)}
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white px-6 py-3 xs:px-8 xs:py-4 sm:px-12 sm:py-5 md:px-16 md:py-6 lg:px-20 lg:py-7 rounded-xl xs:rounded-2xl sm:rounded-3xl font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 hover:-rotate-1 shadow-2xl hover:shadow-purple-500/30 w-full xs:w-full sm:w-auto max-w-xs xs:max-w-sm sm:max-w-none mx-auto xs:mx-auto sm:mx-0"
            >
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Particules flottantes */}
              <div className="absolute top-2 left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-3 right-6 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></div>
              <div className="absolute top-4 right-8 w-1 h-1 bg-purple-500 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-600 delay-400"></div>
              
              <div className="relative flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4">
                <div className="relative">
                  <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-white group-hover:animate-bounce transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <div className="absolute -top-0.5 -right-0.5 xs:-top-1 xs:-right-1 w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <span className="text-white group-hover:text-purple-100 transition-all duration-300 whitespace-nowrap text-center">
                  <span className="hidden xs:inline">S'inscrire maintenant</span>
                  <span className="xs:hidden">S'inscrire</span>
                </span>
                <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
            
            {/* Bouton Secondaire - En savoir plus */}
            <button 
              onClick={() => onScrollToSection?.('features')}
              className="group relative overflow-hidden bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 border-2 border-gray-300 text-gray-700 px-6 py-3 xs:px-8 xs:py-4 sm:px-12 sm:py-5 md:px-16 md:py-6 lg:px-20 lg:py-7 rounded-xl xs:rounded-2xl sm:rounded-3xl font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl hover:from-gray-200 hover:via-gray-300 hover:to-gray-200 hover:border-gray-400 transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 hover:rotate-1 shadow-2xl hover:shadow-gray-300/20 w-full xs:w-full sm:w-auto max-w-xs xs:max-w-sm sm:max-w-none mx-auto xs:mx-auto sm:mx-0"
            >
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Particules flottantes */}
              <div className="absolute top-3 left-6 w-2 h-2 bg-purple-400/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-purple-300/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300"></div>
              <div className="absolute top-5 right-10 w-1 h-1 bg-purple-500/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-600 delay-500"></div>
              
              <div className="relative flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4">
                <div className="relative">
                  <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-gray-600 group-hover:animate-pulse transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="absolute -top-0.5 -right-0.5 xs:-top-1 xs:-right-1 w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
                <span className="group-hover:text-purple-600 transition-colors duration-300 whitespace-nowrap text-center">
                  <span className="hidden xs:inline">En savoir plus</span>
                  <span className="xs:hidden">En savoir +</span>
                </span>
                <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-gray-600 group-hover:translate-y-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Registration Modal */}
      <RegistrationModal 
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
    </div>
  );
};

export default LandingPage;