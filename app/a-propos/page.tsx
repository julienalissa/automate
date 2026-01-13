'use client'

export default function About() {
  const values = [
    {
      title: 'Innovation',
      description: 'À la pointe des dernières technologies pour créer des solutions modernes',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Expertise',
      description: 'Formation professionnelle en informatique et passion pour l\'automatisation',
      icon: (
        <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Engagement',
      description: 'Déterminés à faire évoluer votre entreprise grâce à la technologie',
      icon: (
        <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Personnalisation',
      description: 'Chaque solution est conçue sur mesure pour répondre à vos besoins spécifiques',
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
  ]

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 bg-mesh">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            À Propos de SwissAutoFlow
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une entreprise suisse innovante fondée par des étudiants passionnés d'informatique
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20 animate-fadeInUp">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-12 shadow-sm hover-shimmer">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Notre Histoire
                </h2>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                  SwissAutoFlow est une entreprise suisse fondée par des étudiants en informatique professionnelle. 
                  Conscients des défis technologiques auxquels font face les entreprises modernes, nous avons décidé 
                  de mettre nos compétences au service de leur transformation digitale.
                </p>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                  Notre mission est simple : analyser la situation technologique actuelle de votre entreprise, 
                  comprendre vos processus, et créer une application personnalisée qui regroupe tous vos outils 
                  en automatisant un maximum de tâches.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Grâce à notre formation en informatique et notre passion pour l'innovation, nous créons des solutions 
                  sur mesure - sites web, applications mobiles, systèmes d'automatisation - qui simplifient vraiment 
                  le quotidien des entreprises suisses.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square flex items-center justify-center">
                  <svg className="w-full h-full text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-20 animate-fadeInUp">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Notre Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Permettre aux entreprises suisses de se concentrer sur leur cœur de métier en automatisant 
              leurs processus technologiques et en centralisant leurs outils dans des applications personnalisées.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { 
                  icon: (
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  ),
                  title: 'Analyse', 
                  desc: 'Comprendre vos besoins réels'
                },
                { 
                  icon: (
                    <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Création', 
                  desc: 'Développer des solutions sur mesure'
                },
                { 
                  icon: (
                    <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: 'Automatisation', 
                  desc: 'Optimiser vos processus'
                },
              ].map((item, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 card-hover shadow-sm hover-shimmer">
                  <div className="mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 text-center card-hover shadow-sm animate-fadeInUp hover-shimmer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fadeInUp">
          <div className="bg-white border border-gray-100 rounded-2xl p-12 max-w-4xl mx-auto shadow-sm hover-shimmer">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Travaillons Ensemble
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Découvrez comment SwissAutoFlow peut transformer votre entreprise grâce à l'automatisation
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 btn-primary text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl"
            >
              Contactez-Nous
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
