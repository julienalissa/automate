'use client'

import { FiMessageCircle } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const phoneNumber = '41767453225' // Format international sans +
  const message = encodeURIComponent('Bonjour, je souhaite obtenir plus d\'informations sur vos services.')

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      aria-label="Contacter sur WhatsApp"
    >
      <FiMessageCircle size={28} />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Discuter sur WhatsApp
      </span>
    </motion.a>
  )
}

