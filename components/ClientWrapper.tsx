'use client'

import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

