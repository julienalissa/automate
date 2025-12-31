'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCheckCircle, FiArrowRight, FiTarget, FiUsers, FiAward } from 'react-icons/fi'

export default function APropos() {
  const values = [
    {
      icon: <FiTarget size={32} />,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet que nous réalisons',
    },
    {
      icon: <FiUsers size={32} />,
      title: 'Proximité',
      description: 'Un accompagnement personnalisé et une écoute attentive',
    },
    {
      icon: <FiAward size={32} />,
      title: 'Innovation',
      description: 'Des solutions à la pointe de la technologie',
    },
  ]

  const methodology = [
    'Écoute active de vos besoins',
    'Analyse approfondie de votre contexte',
    'Proposition de solutions adaptées',
    'Mise en œuvre avec suivi rigoureux',
    'Optimisation continue',
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
            className="max-w-3xl"
          >
            <h1 className="heading-1 mb-6">À propos de nous</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Spécialistes en services informatiques sur-mesure, nous accompagnons 
              les entreprises dans leur transformation digitale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 mb-6">Qui sommes-nous ?</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Nous sommes une équipe de professionnels passionnés par l'informatique 
                  et l'innovation. Notre mission est d'aider les entreprises à optimiser 
                  leurs systèmes informatiques pour gagner en efficacité et en productivité.
                </p>
                <p>
                  Avec une expertise solide en diagnostic, développement sur-mesure et 
                  automatisation, nous proposons des solutions adaptées à chaque contexte 
                  et à chaque besoin.
                </p>
                <p>
                  Notre approche se base sur l'écoute, la transparence et l'excellence 
                  technique pour garantir la réussite de chaque projet.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                        <FiUsers size={32} className="text-primary-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">10+</div>
                        <div className="text-gray-600">Clients satisfaits</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                        <FiAward size={32} className="text-primary-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">20+</div>
                        <div className="text-gray-600">Projets réalisés</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                        <FiTarget size={32} className="text-primary-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">1 an</div>
                        <div className="text-gray-600">D'expérience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Nos Valeurs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-primary-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="heading-3 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-1">
                <div className="bg-white rounded-xl p-8">
                  <div className="space-y-4">
                    {methodology.map((step, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="text-gray-700 font-medium">{step}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="heading-2 mb-6">Notre Méthodologie</h2>
              <p className="text-lg text-gray-600 mb-6">
                Une approche structurée et éprouvée pour garantir le succès de votre projet
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Nous suivons une méthodologie rigoureuse qui place vos besoins au centre 
                de notre démarche. Chaque étape est pensée pour vous apporter de la valeur 
                et garantir la réussite de votre transformation digitale.
              </p>
              <Link href="/rendez-vous" className="btn-primary inline-flex items-center">
                Discutons de votre projet
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="heading-2 text-white mb-6">Pourquoi nous faire confiance ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <FiCheckCircle size={24} className="text-primary-200 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Expertise technique</h3>
                  <p className="text-primary-100">Une expertise solide dans le domaine informatique</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FiCheckCircle size={24} className="text-primary-200 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Solutions sur-mesure</h3>
                  <p className="text-primary-100">Chaque projet est adapté à vos besoins spécifiques</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FiCheckCircle size={24} className="text-primary-200 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Support continu</h3>
                  <p className="text-primary-100">Un accompagnement même après la livraison</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FiCheckCircle size={24} className="text-primary-200 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Transparence totale</h3>
                  <p className="text-primary-100">Communication claire à chaque étape du projet</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

