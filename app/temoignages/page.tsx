'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function Temoignages() {
  const stats = [
    { nombre: '10+', label: 'Clients satisfaits' },
    { nombre: '20+', label: 'Projets réalisés' },
    { nombre: '100%', label: 'Taux de satisfaction' },
    { nombre: '1 an', label: 'D\'expérience' },
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
            <h1 className="heading-1 mb-6">Nos Réalisations</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Découvrez nos statistiques et l'impact de nos solutions sur les entreprises
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.nombre}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Client Logos Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Ils nous font confiance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des entreprises de toutes tailles nous font confiance pour optimiser leur système informatique
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['TechCorp', 'Innovate', 'Digital', 'Startup', 'Business', 'E-commerce'].map((nom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-24 hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-400 font-semibold text-sm">{nom}</span>
              </motion.div>
            ))}
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
              Rejoignez nos clients
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Découvrez comment nous pouvons transformer votre système informatique
            </p>
            <Link href="/rendez-vous" className="btn-secondary inline-flex items-center">
              Prendre rendez-vous
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

