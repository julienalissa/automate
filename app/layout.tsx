import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientWrapper from '@/components/ClientWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Services Informatiques sur-mesure - Automatisation & Optimisation',
  description: 'Simplifiez votre système informatique. Diagnostic, refonte sur-mesure, automatisation et suivi. Gagnez du temps et de l\'efficacité.',
  keywords: 'services informatiques, automatisation, refonte système, diagnostic IT, optimisation informatique',
  authors: [{ name: 'Services Informatiques' }],
  openGraph: {
    title: 'Services Informatiques sur-mesure',
    description: 'Simplifiez votre système informatique. Diagnostic, refonte sur-mesure, automatisation et suivi.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  )
}
