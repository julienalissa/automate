'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  const contactMethods = [
    {
      title: t('contact.email'),
      value: 'info@swissautoflow.ch',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: 'mailto:info@swissautoflow.ch',
      cta: t('contact.email.cta')
    },
    {
      title: t('contact.phone'),
      value: '+41 76 745 32 25',
      icon: (
        <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      link: 'tel:+41767453225',
      cta: t('contact.phone.cta')
    },
  ]

  const services = [
    t('appointment.service1'),
    t('appointment.service2'),
    t('appointment.service3'),
    t('appointment.service4'),
    t('appointment.service5'),
    t('appointment.service6'),
  ]

  return (
    <div className="relative pt-32 pb-12 px-4 bg-mesh">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className="bg-white rounded-2xl p-8 card-hover border border-gray-100 shadow-sm animate-fadeInUp text-center hover-shimmer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-center">
                {method.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{method.title}</h3>
              <p className="text-lg text-gray-600 mb-6 font-medium">{method.value}</p>
              
              <span className="inline-flex items-center text-gray-700 font-semibold">
                {method.cta}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* Services Info */}
        <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm animate-fadeInUp">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            {t('appointment.services.title')}
          </h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            {t('appointment.services.desc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center p-3 bg-gray-50 rounded-lg"
              >
                <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
