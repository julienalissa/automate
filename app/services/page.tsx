'use client'

export default function Services() {
  const services = [
    {
      title: 'Analyse Technologique',
      description: 'Évaluation complète de votre infrastructure technologique actuelle pour identifier les opportunités d\'optimisation et d\'automatisation',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      features: ['Audit complet', 'Identification des processus', 'Analyse des besoins', 'Recommandations personnalisées'],
      color: 'from-blue-600 to-indigo-700',
    },
    {
      title: 'Application Web Sur Mesure',
      description: 'Développement d\'applications web personnalisées qui regroupent tous vos outils et processus en une seule plateforme centralisée',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      features: ['Interface intuitive', 'Solution centralisée', 'Intégration complète', 'Performance optimale'],
      color: 'from-emerald-600 to-teal-700',
    },
    {
      title: 'Application Mobile',
      description: 'Applications mobiles natives ou cross-platform pour iOS et Android, parfaitement adaptées à vos besoins métier',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      features: ['iOS & Android', 'Design moderne', 'Synchronisation cloud', 'Notifications push'],
      color: 'from-purple-600 to-violet-700',
    },
    {
      title: 'Automatisation Complète',
      description: 'Automatisation de vos processus métier pour gagner du temps, réduire les erreurs et améliorer l\'efficacité',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: ['Workflows automatisés', 'Intégrations API', 'Scripts personnalisés', 'Gains de productivité'],
      color: 'from-orange-600 to-amber-700',
    },
    {
      title: 'Intégration Systèmes',
      description: 'Connexion et synchronisation de tous vos outils existants pour créer un écosystème technologique cohérent',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      features: ['API REST', 'Webhooks', 'Bases de données', 'Services cloud'],
      color: 'from-cyan-600 to-blue-700',
    },
    {
      title: 'Maintenance & Support',
      description: 'Support technique continu et maintenance pour garantir le bon fonctionnement de vos solutions',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: ['Support réactif', 'Mises à jour', 'Monitoring', 'Documentation'],
      color: 'from-pink-600 to-rose-700',
    },
  ]

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50"></div>
      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-24 animate-fadeInUp">
          <span className="inline-block px-6 py-2 bg-slate-100 rounded-full text-slate-700 font-bold text-sm mb-6">
            NOS SOLUTIONS
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 text-slate-900">
            Nos <span className="gradient-text">Services</span>
          </h1>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Nous analysons votre situation technologique et créons des solutions personnalisées pour automatiser votre entreprise
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-effect rounded-3xl p-10 card-modern animate-scaleIn overflow-hidden hover-shimmer flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-500/10 to-transparent rounded-bl-[80px]"></div>
              
              <div className={`relative z-10 mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                {service.icon}
              </div>
              
              <h3 className="text-3xl font-black text-slate-900 mb-4">{service.title}</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-slate-700 flex items-center font-medium">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mr-3 opacity-80`}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 btn-primary text-white rounded-2xl font-bold text-lg flex items-center justify-center group mt-auto">
                <span className="relative z-10">En Savoir Plus</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="py-24 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 rounded-[3rem] relative overflow-hidden">
          <div className="absolute inset-0 section-pattern opacity-20"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-bold text-sm mb-6">
                NOTRE MÉTHODE
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Notre Approche</h2>
              <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
                Un processus en quatre étapes pour garantir votre succès
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { num: '01', title: 'Analyse', desc: 'Audit complet de vos outils et processus' },
                { num: '02', title: 'Conception', desc: 'Design d\'une solution sur mesure' },
                { num: '03', title: 'Développement', desc: 'Création de votre application' },
                { num: '04', title: 'Automatisation', desc: 'Mise en place des automatisations' },
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm mb-6 group-hover:bg-white/20 transition-all duration-300">
                    <div className="text-5xl font-black text-white">{step.num}</div>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">{step.title}</h3>
                  <p className="text-slate-300 text-lg">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center animate-fadeInUp">
          <div className="glass-effect rounded-[3rem] p-16 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <span className="inline-block px-6 py-2 bg-slate-100 rounded-full text-slate-700 font-bold text-sm mb-6">
                PRÊT À COMMENCER ?
              </span>
              <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-900">
                Transformez Votre
                <br />
                <span className="gradient-text">Entreprise</span>
              </h2>
              <p className="text-2xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium">
                Contactez-nous pour une analyse gratuite de votre situation technologique
              </p>
              <a
                href="/contact"
                className="inline-block px-12 py-6 btn-primary text-white rounded-2xl font-black text-2xl shadow-2xl hover:shadow-red-500/50"
              >
                <span className="relative z-10">Demander une Analyse</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
