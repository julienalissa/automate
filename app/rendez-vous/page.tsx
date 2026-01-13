'use client'

export default function Appointment() {
  const contactMethods = [
    {
      title: 'Email',
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
      title: 'Téléphone',
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

  const services = [
    'Analyse Technologique',
    'Application Web Sur Mesure',
    'Application Mobile',
    'Automatisation Complète',
    'Intégration Systèmes',
    'Maintenance & Support',
  ]

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 bg-mesh">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Prendre Rendez-vous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Contactez-nous directement par email ou téléphone pour discuter de votre projet
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 card-hover border border-gray-100 shadow-sm animate-fadeInUp text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white shadow-lg">
                  {method.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{method.title}</h3>
              <p className="text-xl text-gray-700 mb-6 font-semibold">{method.value}</p>
              
              <a
                href={method.link}
                className="inline-block w-full py-3 btn-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                {method.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Services Info */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm animate-fadeInUp">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Nos Services Disponibles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg"
              >
                <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-12 text-center animate-fadeInUp">
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 section-pattern opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Disponibilité & Réactivité
              </h3>
              <p className="text-red-100 mb-6 max-w-2xl mx-auto">
                Nous nous engageons à vous répondre rapidement. N'hésitez pas à nous contacter pour discuter de votre projet d'automatisation !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:swissautoflow@hotmail.com"
                  className="px-8 py-3 bg-white text-red-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl"
                >
                  Envoyer un Email
                </a>
                <a
                  href="tel:+41767453225"
                  className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-all duration-300"
                >
                  Appeler
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
