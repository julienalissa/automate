'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCheckCircle, FiDownload, FiArrowRight, FiSearch, FiCode, FiSettings, FiBarChart } from 'react-icons/fi'

export default function Services() {
  const services = [
    {
      icon: <FiSearch size={40} />,
      title: 'Diagnostic du système',
      description: 'Analyse complète de votre infrastructure informatique actuelle',
      features: [
        'Audit technique approfondi',
        'Identification des points de blocage',
        'Recommandations personnalisées',
        'Rapport détaillé avec plan d\'action',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <FiCode size={40} />,
      title: 'Refonte sur-mesure',
      description: 'Création de solutions adaptées à vos besoins spécifiques',
      features: [
        'Architecture personnalisée',
        'Développement sur-mesure',
        'Intégration avec vos outils existants',
        'Tests et validation',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <FiSettings size={40} />,
      title: 'Automatisation & suivi',
      description: 'Automatisez vos processus et suivez vos performances',
      features: [
        'Automatisation des tâches répétitives',
        'Tableaux de bord en temps réel',
        'Alertes et notifications',
        'Rapports automatisés',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <FiBarChart size={40} />,
      title: 'Optimisation continue',
      description: 'Amélioration continue de vos performances',
      features: [
        'Monitoring 24/7',
        'Optimisations régulières',
        'Mises à jour de sécurité',
        'Support technique dédié',
      ],
      color: 'from-orange-500 to-orange-600',
    },
  ]

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
            <h1 className="heading-1 mb-6">Nos Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Des solutions complètes pour transformer votre système informatique 
              et améliorer l'efficacité de votre entreprise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className={`bg-gradient-to-br ${service.color} p-8 text-white`}>
                  <div className="mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                  <p className="text-white/90">{service.description}</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <FiCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/rendez-vous"
                    className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center transition-colors"
                  >
                    En savoir plus
                    <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Notre Processus</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une méthodologie éprouvée pour garantir le succès de votre projet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Diagnostic', desc: 'Analyse de votre situation actuelle' },
              { step: '02', title: 'Conception', desc: 'Élaboration de la solution sur-mesure' },
              { step: '03', title: 'Développement', desc: 'Mise en œuvre et intégration' },
              { step: '04', title: 'Suivi', desc: 'Optimisation et maintenance continue' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 text-white mb-4">
              Téléchargez notre brochure
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Découvrez en détail nos services et notre approche dans notre brochure complète
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center">
              <FiDownload className="mr-2" size={20} />
              Télécharger le PDF
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 mb-4">Prêt à commencer ?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Prenez rendez-vous pour discuter de vos besoins et découvrir comment nous pouvons vous aider
            </p>
            <Link href="/rendez-vous" className="btn-primary inline-flex items-center">
              Prendre rendez-vous
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

