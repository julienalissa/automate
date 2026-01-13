'use client'

export default function Contact() {
  const contactInfo = [
    { 
      label: 'Email', 
      value: 'swissautoflow@hotmail.com',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: 'mailto:swissautoflow@hotmail.com',
      cta: 'Envoyer un email'
    },
    { 
      label: 'Téléphone', 
      value: '+41 76 745 32 25',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      link: 'tel:+41767453225',
      cta: 'Appeler maintenant'
    },
  ]

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 bg-mesh">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Contactez-Nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            N'hésitez pas à nous contacter directement pour discuter de votre projet d'automatisation
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 card-hover border border-gray-100 shadow-sm animate-fadeInUp text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                  {info.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{info.label}</h3>
              <p className="text-lg text-gray-700 mb-6 font-medium break-words">{info.value}</p>
              
              {info.link && (
                <a
                  href={info.link}
                  className="inline-block w-full py-3 btn-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  {info.cta}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Large CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <a
            href="mailto:swissautoflow@hotmail.com"
            className="group bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-12 text-white card-hover shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 section-pattern opacity-10"></div>
            <div className="relative z-10">
              <svg className="w-16 h-16 mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-3xl font-bold mb-4">Envoyez-nous un Email</h3>
              <p className="text-red-100 mb-6">
                Décrivez-nous votre projet et nous vous répondrons rapidement
              </p>
              <span className="inline-flex items-center text-white font-semibold">
                Ouvrir votre client email
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </div>
          </a>

          <a
            href="tel:+41767453225"
            className="group bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-12 text-white card-hover shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 section-pattern opacity-10"></div>
            <div className="relative z-10">
              <svg className="w-16 h-16 mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="text-3xl font-bold mb-4">Appelez-nous</h3>
              <p className="text-red-100 mb-6">
                Discutons directement de votre situation technologique
              </p>
              <span className="inline-flex items-center text-white font-semibold">
                Lancer l'appel
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </div>
          </a>
        </div>

        {/* Info Section */}
        <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-100 animate-fadeInUp">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nous Sommes Là Pour Vous
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Que vous ayez une question, un projet en tête ou simplement besoin de conseils sur l'automatisation de votre entreprise, n'hésitez pas à nous contacter. Nous serons ravis d'échanger avec vous !
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-700">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Réponse rapide
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Conseil gratuit
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              100% Suisse
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
