'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4 bg-mesh">
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
