'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Services() {
  const { t } = useLanguage()

  const getServiceIcon = (index: number) => {
    const icons = [
      <svg key={0} className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>,
      <svg key={1} className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>,
      <svg key={2} className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>,
      <svg key={3} className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
      <svg key={4} className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>,
      <svg key={5} className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ]
    return icons[index]
  }

  const services = [
    {
      title: t('services.analysis.title'),
      description: t('services.analysis.desc'),
      features: [
        t('services.analysis.feature1'),
        t('services.analysis.feature2'),
        t('services.analysis.feature3'),
        t('services.analysis.feature4')
      ],
      color: 'from-blue-600 to-indigo-700',
    },
    {
      title: t('services.webapp.title'),
      description: t('services.webapp.desc'),
      features: [
        t('services.webapp.feature1'),
        t('services.webapp.feature2'),
        t('services.webapp.feature3'),
        t('services.webapp.feature4')
      ],
      color: 'from-emerald-600 to-teal-700',
    },
    {
      title: t('services.mobile.title'),
      description: t('services.mobile.desc'),
      features: [
        t('services.mobile.feature1'),
        t('services.mobile.feature2'),
        t('services.mobile.feature3'),
        t('services.mobile.feature4')
      ],
      color: 'from-purple-600 to-violet-700',
    },
    {
      title: t('services.automation.title'),
      description: t('services.automation.desc'),
      features: [
        t('services.automation.feature1'),
        t('services.automation.feature2'),
        t('services.automation.feature3'),
        t('services.automation.feature4')
      ],
      color: 'from-orange-600 to-amber-700',
    },
    {
      title: t('services.integration.title'),
      description: t('services.integration.desc'),
      features: [
        t('services.integration.feature1'),
        t('services.integration.feature2'),
        t('services.integration.feature3'),
        t('services.integration.feature4')
      ],
      color: 'from-cyan-600 to-blue-700',
    },
    {
      title: t('services.support.title'),
      description: t('services.support.desc'),
      features: [
        t('services.support.feature1'),
        t('services.support.feature2'),
        t('services.support.feature3'),
        t('services.support.feature4')
      ],
      color: 'from-rose-600 to-pink-700',
    },
  ]

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4 bg-mesh">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-effect rounded-3xl p-10 card-modern animate-scaleIn overflow-hidden hover-shimmer flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                {getServiceIcon(index)}
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {service.description}
              </p>

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

              <Link 
                href="/rendez-vous"
                className="w-full py-4 btn-primary text-white rounded-2xl font-bold text-lg flex items-center justify-center group mt-auto"
              >
                <span className="relative z-10">{t('services.cta')}</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
