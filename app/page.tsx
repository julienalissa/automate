'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiCheckCircle, FiTrendingUp, FiShield, FiZap } from 'react-icons/fi'

export default function Home() {
  const features = [
    {
      icon: <FiTrendingUp size={32} />,
      title: 'Gagnez en efficacité',
      description: 'Automatisez vos processus et libérez du temps pour l\'essentiel',
    },
    {
      icon: <FiShield size={32} />,
      title: 'Sécurité renforcée',
      description: 'Protection optimale de vos données et systèmes',
    },
    {
      icon: <FiZap size={32} />,
      title: 'Performance optimale',
      description: 'Systèmes rapides et réactifs pour votre entreprise',
    },
  ]

  const benefits = [
    'Diagnostic complet de votre système',
    'Refonte sur-mesure adaptée à vos besoins',
    'Automatisation des tâches répétitives',
    'Suivi et maintenance continue',
    'Formation de vos équipes',
    'Support réactif 24/7',
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="heading-1 mb-6">
                Simplifiez votre système informatique
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Diagnostic, refonte sur-mesure, automatisation et suivi. 
                <span className="font-semibold text-primary-600"> Gagnez du temps et de l'efficacité</span> 
                avec nos services informatiques adaptés à votre entreprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/rendez-vous" className="btn-primary inline-flex items-center justify-center">
                  Prendre rendez-vous
                  <FiArrowRight className="ml-2" />
                </Link>
                <Link href="/services" className="btn-secondary inline-flex items-center justify-center">
                  Découvrir nos services
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-20 bg-primary-100 rounded mt-4"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Pourquoi nous choisir ?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions informatiques sur-mesure pour transformer votre entreprise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="heading-3 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 mb-6">Ce que nous vous apportons</h2>
              <p className="text-lg text-gray-600 mb-8">
                Une approche complète pour optimiser votre infrastructure informatique
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={24} />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/services" className="btn-primary inline-flex items-center">
                  En savoir plus
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-1">
                <div className="bg-white rounded-xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-32 h-4 bg-gray-200 rounded"></div>
                      <div className="w-16 h-4 bg-primary-200 rounded"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-gray-100 rounded w-full"></div>
                      <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-100 rounded w-4/6"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-20 bg-primary-50 rounded"></div>
                      <div className="h-20 bg-primary-100 rounded"></div>
                      <div className="h-20 bg-primary-50 rounded"></div>
                    </div>
                  </div>
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
              Prenez rendez-vous pour un diagnostic gratuit et découvrez comment nous pouvons vous aider
            </p>
            <Link href="/rendez-vous" className="btn-secondary inline-flex items-center">
              Prendre rendez-vous gratuitement
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

