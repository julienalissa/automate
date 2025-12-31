'use client'

import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'

export default function Contact() {
  const email = 'contact@automatisation.ch'
  const telephone = '076 745 32 25'
  const telephoneLink = 'tel:+41767453225'

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-1 mb-6">Contactez-nous</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Une question ? Un projet ? N'hésitez pas à nous contacter directement par téléphone ou email. 
              Nous serons ravis de vous répondre.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Téléphone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                  <FiPhone className="text-primary-600" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Téléphone</h2>
                <p className="text-gray-600 mb-6">
                  Appelez-nous directement pour toute question ou demande
                </p>
                <a
                  href={telephoneLink}
                  className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors block mb-4"
                >
                  {telephone}
                </a>
                <a
                  href={telephoneLink}
                  className="btn-primary inline-flex items-center"
                >
                  Appeler maintenant
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                  <FiMail className="text-primary-600" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Email</h2>
                <p className="text-gray-600 mb-6">
                  Envoyez-nous un email avec vos questions ou demandes
                </p>
                <a
                  href={`mailto:${email}`}
                  className="text-xl font-semibold text-primary-600 hover:text-primary-700 transition-colors block mb-4 break-all"
                >
                  {email}
                </a>
                <a
                  href={`mailto:${email}?subject=Demande d'information`}
                  className="btn-primary inline-flex items-center"
                >
                  Envoyer un email
                </a>
              </motion.div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Horaires */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <FiClock className="text-primary-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Horaires</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-medium">9h00 - 18h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-medium">Sur rendez-vous</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="font-medium">Fermé</span>
                  </li>
                </ul>
              </motion.div>

              {/* Localisation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <FiMapPin className="text-primary-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Disponibilité</h3>
                </div>
                <p className="text-gray-700">
                  Disponible en présentiel ou en visioconférence selon vos préférences. 
                  Nous nous adaptons à vos besoins.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 text-white mb-4">
              Besoin d'une réponse rapide ?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contactez-nous directement par téléphone ou email, nous vous répondrons rapidement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={telephoneLink}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                <FiPhone className="mr-2" />
                {telephone}
              </a>
              <a
                href={`mailto:${email}`}
                className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center border-2 border-white/20"
              >
                <FiMail className="mr-2" />
                {email}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
