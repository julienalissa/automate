import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import InteractiveGrid from '@/components/InteractiveGrid'
import CursorGlow from '@/components/CursorGlow'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SwissAutoFlow - Solutions Professionnelles en Suisse',
  description: 'SwissAutoFlow, votre partenaire de confiance en Suisse pour des services exceptionnels et des solutions sur mesure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <InteractiveGrid />
        <CursorGlow />
        <Navbar />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
