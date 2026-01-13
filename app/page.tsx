'use client'

import Link from 'next/link'

export default function Home() {
  const services = [
    {
      title: 'Analyse & Audit',
      description: 'Évaluation complète de votre infrastructure technologique actuelle',
      gradient: 'from-blue-600 to-indigo-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Applications Sur Mesure',
      description: 'Développement personnalisé qui regroupe tous vos outils en une seule solution',
      gradient: 'from-emerald-600 to-teal-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      title: 'Automatisation Totale',
      description: 'Automatisation de vos processus pour maximiser votre productivité',
      gradient: 'from-purple-600 to-violet-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ]

  const stats = [
    { 
      number: '100%', 
      label: 'Personnalisé',
      gradient: 'from-blue-600 to-indigo-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      number: '24/7', 
      label: 'Support',
      gradient: 'from-emerald-600 to-teal-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    { 
      number: '100%', 
      label: 'Suisse',
      gradient: 'from-red-600 to-red-800',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <rect x="9" y="6" width="6" height="12" fill="currentColor" />
          <rect x="6" y="9" width="12" height="6" fill="currentColor" />
        </svg>
      )
    },
    { 
      number: '∞', 
      label: 'Automatisation',
      gradient: 'from-purple-600 to-violet-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
  ]

  const benefits = [
    {
      title: 'Tout Centralisé',
      desc: 'Une seule application qui regroupe tous vos outils et processus métier',
      gradient: 'from-blue-600 to-indigo-700',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
    },
    {
      title: 'Personnalisé',
      desc: 'Solution 100% sur mesure adaptée à vos besoins spécifiques',
      gradient: 'from-orange-600 to-amber-700',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: 'Automatisé',
      desc: 'Éliminez les tâches répétitives et gagnez un temps précieux',
      gradient: 'from-purple-600 to-violet-700',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: 'Évolutif',
      desc: 'Solutions qui grandissent avec votre entreprise',
      gradient: 'from-emerald-600 to-teal-700',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
        </svg>
      ),
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-red-50/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-red-100 rounded-full">
                <svg className="w-4 h-4 text-red-700" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="9" y="6" width="6" height="12" />
                  <rect x="6" y="9" width="12" height="6" />
                </svg>
                <span className="text-red-700 font-semibold text-sm">Made in Switzerland</span>
              </div>
              
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
                <span className="gradient-text text-shadow-soft">Swiss</span>
                <br />
                <span className="gradient-text text-shadow-soft">AutoFlow</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-slate-700 mb-6 max-w-4xl mx-auto leading-relaxed font-medium">
                Nous regroupons tous vos outils en une seule application personnalisée
              </p>
              
              <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
                Analyse • Développement • Automatisation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Link
                  href="/rendez-vous"
                  className="group relative px-12 py-6 btn-primary text-white rounded-2xl font-bold text-xl transition-all duration-500 flex items-center z-10 hover-shimmer"
                >
                  <span className="relative z-10">Commencer Gratuitement</span>
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link
                  href="/services"
                  className="px-12 py-6 glass-effect text-slate-900 rounded-2xl font-bold text-xl hover:shadow-xl transition-all duration-300 hover-shimmer"
                >
                  Nos Services
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-effect rounded-3xl p-8 text-center card-modern animate-scaleIn hover-shimmer"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} text-white mb-4 shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div className="text-5xl md:text-6xl font-black gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 animate-fadeInUp">
            <span className="inline-block px-6 py-2 bg-slate-100 rounded-full text-slate-700 font-bold text-sm mb-6">
              NOTRE MÉTHODE
            </span>
            <h2 className="text-6xl md:text-7xl font-black text-slate-900 mb-6">
              Trois Étapes
            </h2>
            <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
              Un processus simple et efficace pour transformer votre entreprise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative glass-effect rounded-3xl p-10 card-modern animate-fadeInUp overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/20 to-transparent rounded-bl-[100px]"></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 text-white shadow-lg`}>
                    {service.icon}
                  </div>
                  
                  <div className={`inline-block px-4 py-1 rounded-full font-bold text-xs mb-4 bg-gradient-to-r ${service.gradient} text-white`}>
                    ÉTAPE {index + 1}
                  </div>
                  
                  <h3 className="text-3xl font-black text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-slideInLeft order-2 lg:order-1">
              <span className="inline-block px-6 py-2 bg-slate-100 rounded-full text-slate-700 font-bold text-sm mb-6">
                POURQUOI NOUS CHOISIR
              </span>
              <h2 className="text-6xl md:text-7xl font-black text-slate-900 mb-12">
                Pourquoi
                <br />
                <span className="gradient-text">SwissAutoFlow</span> ?
              </h2>
              
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group flex items-start glass-effect rounded-2xl p-6 card-modern hover-shimmer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mr-6 shadow-lg`}>
                      <div className="text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-2">{benefit.title}</h3>
                      <p className="text-lg text-slate-600 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-slideInRight order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-[3rem] blur-3xl opacity-30 animate-float"></div>
                <div className="relative glass-effect rounded-[3rem] p-16 shadow-2xl">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="100" cy="100" r="95" fill="url(#logoGradient)" className="drop-shadow-2xl" />
                    <rect x="85" y="60" width="30" height="80" rx="4" fill="white" opacity="0.95" />
                    <rect x="60" y="85" width="80" height="30" rx="4" fill="white" opacity="0.95" />
                    <g opacity="0.9">
                      <path d="M140 100 L155 85 L147 85 L147 75 L132 90 L140 90 L140 100Z" fill="white" />
                      <path d="M60 100 L45 115 L53 115 L53 125 L68 110 L60 110 L60 100Z" fill="white" />
                    </g>
                    <defs>
                      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#dc2626" />
                        <stop offset="50%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#991b1b" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900"></div>
        <div className="absolute inset-0 section-pattern opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-600/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10 max-w-5xl">
          <div className="animate-fadeInUp">
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-bold text-sm mb-8">
              PRÊT À COMMENCER ?
            </span>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 text-white leading-tight">
              Transformez Votre
              <br />
              <span className="text-red-400">Entreprise</span> Aujourd'hui
            </h2>
            
            <p className="text-2xl md:text-3xl text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
              Commencez avec une analyse gratuite de votre situation technologique
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/rendez-vous"
                className="group relative px-14 py-7 bg-white text-red-700 rounded-2xl font-black text-2xl hover:bg-red-50 transition-all duration-300 shadow-2xl hover:shadow-red-500/50 hover:scale-105"
              >
                Prendre Rendez-vous
                <svg className="w-6 h-6 ml-3 inline-block group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link
                href="/contact"
                className="px-14 py-7 bg-transparent text-white border-4 border-white rounded-2xl font-black text-2xl hover:bg-white hover:text-red-700 transition-all duration-300 shadow-2xl"
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
