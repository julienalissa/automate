'use client'

import { useEffect } from 'react'
import PointingCursor from '@/components/PointingCursor'

export default function Contact() {
  useEffect(() => {
    document.body.classList.add('pointing-cursor-active')
    return () => {
      document.body.classList.remove('pointing-cursor-active')
    }
  }, [])
  const contactInfo = [
    { 
      label: 'Email', 
      value: 'swissautoflow@hotmail.com',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      link: 'tel:+41767453225',
      cta: 'Appeler maintenant'
    },
  ]

  return (
    <div className="relative pt-20 pb-12 px-4 bg-mesh">
      <PointingCursor />
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Contactez-Nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            N'hésitez pas à nous contacter directement pour discuter de votre projet d'automatisation
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              data-pointing-target={info.label === 'Email' ? 'email' : undefined}
              className="bg-white rounded-2xl p-8 card-hover border border-gray-100 shadow-sm animate-fadeInUp text-center hover-shimmer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-center">
                {info.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{info.label}</h3>
              <p className="text-lg text-gray-600 mb-6 font-medium break-words">{info.value}</p>
              
              <span className="inline-flex items-center text-gray-700 font-semibold">
                {info.cta}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* Info Section */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-gray-100 shadow-sm animate-fadeInUp text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Nous Sommes Là Pour Vous
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Que vous ayez une question, un projet en tête ou simplement besoin de conseils sur l'automatisation de votre entreprise, nous serons ravis d'échanger avec vous !
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Réponse rapide
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Conseil gratuit
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <rect x="9" y="6" width="6" height="12" />
                <rect x="6" y="9" width="12" height="6" />
              </svg>
              100% Suisse
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
