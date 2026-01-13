'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
          language === 'fr'
            ? 'bg-white text-red-700 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
          language === 'en'
            ? 'bg-white text-red-700 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('de')}
        className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
          language === 'de'
            ? 'bg-white text-red-700 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        DE
      </button>
    </div>
  )
}
