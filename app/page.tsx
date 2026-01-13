'use client'

import Link from 'next/link'

export default function Home() {
  const services = [
    {
      title: 'Analyse & Audit',
      description: 'Évaluation complète de votre infrastructure technologique actuelle',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Applications Sur Mesure',
      description: 'Développement personnalisé qui regroupe tous vos outils en une seule solution',
      icon: (
        <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      title: 'Automatisation Totale',
      description: 'Automatisation de vos processus pour maximiser votre productivité',
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  const benefits = [
    {
      title: 'Tout Centralisé',
      desc: 'Une seule application qui regroupe tous vos outils et processus métier',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
    },
    {
      title: 'Personnalisé',
      desc: 'Solution 100% sur mesure adaptée à vos besoins spécifiques',
      icon: (
        <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: 'Automatisé',
      desc: 'Éliminez les tâches répétitives et gagnez un temps précieux',
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: 'Évolutif',
      desc: 'Solutions qui grandissent avec votre entreprise',
      icon: (
        <svg className="w-10 h-10 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
        </svg>
      ),
    },
  ]

  return (
    <div className="relative min-h-screen bg-mesh">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fadeInUp">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                <span className="gradient-text">SwissAutoFlow</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
                Nous regroupons tous vos outils en une seule application personnalisée
              </p>
              
              <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
                Analyse • Développement • Automatisation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Link
                  href="/rendez-vous"
                  className="px-10 py-4 btn-primary text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover-shimmer"
                >
                  Commencer Gratuitement
                </Link>
                
                <Link
                  href="/services"
                  className="px-10 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg font-semibold text-lg hover:border-red-600 hover:text-red-700 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Nos Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trois Étapes Simples
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une méthode éprouvée pour transformer votre entreprise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 card-hover shadow-sm animate-fadeInUp hover-shimmer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi SwissAutoFlow ?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 text-center card-hover shadow-sm animate-fadeInUp hover-shimmer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-white border border-gray-100 rounded-2xl p-12 max-w-4xl mx-auto shadow-sm animate-fadeInUp hover-shimmer">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Prêt à Automatiser ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Commencez par une analyse gratuite de votre situation technologique actuelle
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/rendez-vous"
                className="px-10 py-4 btn-primary text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Prendre Rendez-vous
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg font-semibold text-lg hover:border-red-600 hover:text-red-700 transition-all duration-300"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
