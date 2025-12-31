'use client'

import Link from 'next/link'
import { FiMail, FiPhone, FiLinkedin, FiInstagram } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold text-white">Automatisation</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Simplifiez votre système informatique. Diagnostic, refonte sur-mesure, 
              automatisation et suivi pour gagner en efficacité.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-primary-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/rendez-vous" className="hover:text-primary-400 transition-colors">
                  Prendre rendez-vous
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <FiMail size={18} />
                <a href="mailto:contact@automatisation.ch" className="hover:text-primary-400 transition-colors">
                  contact@automatisation.ch
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FiPhone size={18} />
                <a href="tel:+41767453225" className="hover:text-primary-400 transition-colors">
                  076 745 32 25
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Automatisation. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

