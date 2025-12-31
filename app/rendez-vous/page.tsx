'use client'

import { motion } from 'framer-motion'
import { FiCalendar, FiMail, FiPhone, FiArrowRight } from 'react-icons/fi'

export default function RendezVous() {
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
            <h1 className="heading-1 mb-6">Prenez rendez-vous</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Contactez-nous directement par téléphone ou email pour planifier un rendez-vous. 
              Nous serons ravis de discuter de vos besoins et de vous proposer une solution adaptée.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
                className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white shadow-xl"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                  <FiPhone size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-4">Appelez-nous</h2>
                <p className="text-primary-100 mb-6">
                  Appelez-nous directement pour prendre rendez-vous ou poser vos questions
                </p>
                <a
                  href={telephoneLink}
                  className="text-2xl font-bold hover:text-primary-200 transition-colors block mb-4"
                >
                  {telephone}
                </a>
                <a
                  href={telephoneLink}
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 inline-flex items-center"
                >
                  Appeler maintenant
                  <FiArrowRight className="ml-2" />
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-2xl p-8 text-white shadow-xl"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                  <FiMail size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-4">Écrivez-nous</h2>
                <p className="text-secondary-100 mb-6">
                  Envoyez-nous un email avec vos questions ou pour demander un rendez-vous
                </p>
                <a
                  href={`mailto:${email}`}
                  className="text-xl font-semibold hover:text-secondary-200 transition-colors block mb-4 break-all"
                >
                  {email}
                </a>
                <a
                  href={`mailto:${email}?subject=Demande de rendez-vous`}
                  className="bg-white text-secondary-600 px-6 py-3 rounded-lg font-semibold hover:bg-secondary-50 transition-all duration-300 inline-flex items-center"
                >
                  Envoyer un email
                  <FiArrowRight className="ml-2" />
                </a>
              </motion.div>
            </div>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FiCalendar className="text-primary-600" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Ce qui se passe ensuite
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Nous vous répondrons dans les plus brefs délais (sous 24h)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Nous planifierons un créneau qui vous convient</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Nous préparerons la rencontre en analysant vos besoins</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Discussion de vos besoins et présentation de nos solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 text-white mb-4">
              Prêt à transformer votre système informatique ?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de votre projet
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
                href={`mailto:${email}?subject=Demande de rendez-vous`}
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
