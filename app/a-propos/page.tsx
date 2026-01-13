'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 bg-mesh">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20 animate-fadeInUp">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-12 shadow-sm hover-shimmer">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t('about.story.title')}
                </h2>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                  {t('about.story.p1')}
                </p>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                  {t('about.story.p2')}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t('about.story.p3')}
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
              {t('about.mission.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {t('about.mission.desc')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { 
                  icon: (
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  ),
                  title: t('about.mission.step1.title'), 
                  desc: t('about.mission.step1.desc')
                },
                { 
                  icon: (
                    <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: t('about.mission.step2.title'), 
                  desc: t('about.mission.step2.desc')
                },
                { 
                  icon: (
                    <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: t('about.mission.step3.title'), 
                  desc: t('about.mission.step3.desc')
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

        {/* CTA Section */}
        <div className="text-center animate-fadeInUp">
          <div className="bg-white border border-gray-100 rounded-2xl p-12 max-w-4xl mx-auto shadow-sm hover-shimmer">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {t('about.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('about.cta.desc')}
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 btn-primary text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl"
            >
              {t('about.cta.button')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
