'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const navLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.services'), href: '/services' },
    { label: t('nav.about'), href: '/a-propos' },
    { label: t('nav.contact'), href: '/contact' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
      <div className="absolute inset-0 section-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div className="md:col-span-1">
            <h3 className="text-4xl font-black mb-4">
              <span className="gradient-text">SwissAutoFlow</span>
            </h3>
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-red-500/20 rounded-full text-red-400 font-bold text-xs mb-4">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <rect x="9" y="6" width="6" height="12" />
                <rect x="6" y="9" width="12" height="6" />
              </svg>
              {t('footer.made').toUpperCase()}
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed text-lg">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-black mb-6 text-white">{t('footer.links')}</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group text-lg font-medium"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-gradient-to-r from-red-500 to-red-600 mr-0 group-hover:mr-3 transition-all duration-300 rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-6 text-white">{t('footer.contact')}</h4>
            <ul className="space-y-5">
              <li className="flex items-start text-slate-400 group hover:text-white transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center mr-4 group-hover:bg-red-500/30 transition-colors">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">swissautoflow@hotmail.com</span>
              </li>
              <li className="flex items-start text-slate-400 group hover:text-white transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center mr-4 group-hover:bg-red-500/30 transition-colors">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">+41 76 745 32 25</span>
              </li>
              <li className="flex items-start text-slate-400 group hover:text-white transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center mr-4 group-hover:bg-red-500/30 transition-colors">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">{t('footer.location')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm font-medium">
              &copy; 2025 SwissAutoFlow. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-sm">Crafted with</span>
              <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-500 text-sm">in Switzerland</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
