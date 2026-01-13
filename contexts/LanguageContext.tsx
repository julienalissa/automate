'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'fr' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    'nav.appointment': 'Prendre RDV',

    // Home Page
    'home.title': 'SwissAutoFlow',
    'home.subtitle': 'Nous regroupons tous vos outils en une seule application personnalisée',
    'home.tagline': 'Analyse • Développement • Automatisation',
    'home.cta.start': 'Commencer Gratuitement',
    'home.cta.services': 'Nos Services',
    
    'home.services.title': 'Trois Étapes Simples',
    'home.services.subtitle': 'Notre approche pour transformer votre entreprise',
    
    'home.service1.title': 'Analyse & Audit',
    'home.service1.desc': 'Évaluation complète de votre infrastructure technologique actuelle',
    
    'home.service2.title': 'Applications Sur Mesure',
    'home.service2.desc': 'Développement personnalisé qui regroupe tous vos outils en une seule solution',
    
    'home.service3.title': 'Automatisation Totale',
    'home.service3.desc': 'Automatisation de vos processus pour maximiser votre productivité',
    
    'home.benefits.title': 'Pourquoi SwissAutoFlow ?',
    'home.benefits.subtitle': 'Une approche complète pour simplifier votre technologie',
    
    'home.benefit1.title': 'Tout Centralisé',
    'home.benefit1.desc': 'Une seule application qui regroupe tous vos outils et processus métier',
    
    'home.benefit2.title': 'Personnalisé',
    'home.benefit2.desc': 'Solution 100% sur mesure adaptée à vos besoins spécifiques',
    
    'home.benefit3.title': 'Automatisé',
    'home.benefit3.desc': 'Éliminez les tâches répétitives et gagnez un temps précieux',
    
    'home.benefit4.title': 'Évolutif',
    'home.benefit4.desc': 'Solutions qui grandissent avec votre entreprise',
    
    'home.cta.final.title': 'Prêt à Automatiser Votre Entreprise ?',
    'home.cta.final.subtitle': 'Discutons de votre projet et découvrez comment nous pouvons vous aider',
    'home.cta.final.button': 'Commencer Maintenant',

    // Services Page
    'services.title': 'Nos Services',
    'services.subtitle': 'Des solutions complètes pour transformer votre entreprise',
    
    'services.analysis.title': 'Analyse Technologique',
    'services.analysis.desc': 'Audit complet de votre infrastructure pour identifier les opportunités',
    'services.analysis.feature1': 'Audit complet de votre infrastructure actuelle',
    'services.analysis.feature2': 'Identification des processus à automatiser',
    'services.analysis.feature3': 'Recommandations personnalisées',
    'services.analysis.feature4': 'Rapport détaillé avec plan d\'action',
    
    'services.webapp.title': 'Application Web',
    'services.webapp.desc': 'Développement d\'applications web modernes et performantes',
    'services.webapp.feature1': 'Design moderne et responsive',
    'services.webapp.feature2': 'Interface intuitive et personnalisée',
    'services.webapp.feature3': 'Intégration avec vos outils existants',
    'services.webapp.feature4': 'Hébergement sécurisé en Suisse',
    
    'services.mobile.title': 'Application Mobile',
    'services.mobile.desc': 'Applications iOS et Android natives pour votre entreprise',
    'services.mobile.feature1': 'Développement iOS et Android',
    'services.mobile.feature2': 'Interface native et fluide',
    'services.mobile.feature3': 'Synchronisation cloud en temps réel',
    'services.mobile.feature4': 'Notifications push personnalisées',
    
    'services.automation.title': 'Automatisation',
    'services.automation.desc': 'Automatisation complète de vos processus métier',
    'services.automation.feature1': 'Automatisation des tâches répétitives',
    'services.automation.feature2': 'Intégration entre vos différents outils',
    'services.automation.feature3': 'Workflows personnalisés',
    'services.automation.feature4': 'Gain de temps et réduction d\'erreurs',
    
    'services.integration.title': 'Intégration Systèmes',
    'services.integration.desc': 'Connectez tous vos outils en un seul écosystème',
    'services.integration.feature1': 'Connexion de vos logiciels existants',
    'services.integration.feature2': 'API personnalisées',
    'services.integration.feature3': 'Synchronisation de données en temps réel',
    'services.integration.feature4': 'Migration de données sécurisée',
    
    'services.support.title': 'Support & Maintenance',
    'services.support.desc': 'Accompagnement continu pour garantir votre succès',
    'services.support.feature1': 'Support technique réactif',
    'services.support.feature2': 'Mises à jour régulières',
    'services.support.feature3': 'Formation de vos équipes',
    'services.support.feature4': 'Évolution selon vos besoins',
    
    'services.cta': 'En Savoir Plus',

    // About Page
    'about.title': 'À Propos de SwissAutoFlow',
    'about.subtitle': 'Une entreprise suisse innovante fondée par des étudiants passionnés d\'informatique',
    
    'about.story.title': 'Notre Histoire',
    'about.story.p1': 'SwissAutoFlow est une entreprise suisse fondée par des étudiants en informatique professionnelle. Conscients des défis technologiques auxquels font face les entreprises modernes, nous avons décidé de mettre nos compétences au service de leur transformation digitale.',
    'about.story.p2': 'Notre mission est simple : analyser la situation technologique actuelle de votre entreprise, comprendre vos processus, et créer une application personnalisée qui regroupe tous vos outils en automatisant un maximum de tâches.',
    'about.story.p3': 'Grâce à notre formation en informatique et notre passion pour l\'innovation, nous créons des solutions sur mesure - sites web, applications mobiles, systèmes d\'automatisation - qui simplifient vraiment le quotidien des entreprises suisses.',
    
    'about.mission.title': 'Notre Mission',
    'about.mission.desc': 'Permettre aux entreprises suisses de se concentrer sur leur cœur de métier en automatisant leurs processus technologiques et en centralisant leurs outils dans des applications personnalisées.',
    
    'about.mission.step1.title': 'Analyse',
    'about.mission.step1.desc': 'Comprendre vos besoins réels',
    
    'about.mission.step2.title': 'Création',
    'about.mission.step2.desc': 'Développer des solutions sur mesure',
    
    'about.mission.step3.title': 'Automatisation',
    'about.mission.step3.desc': 'Optimiser vos processus',
    
    'about.cta.title': 'Travaillons Ensemble',
    'about.cta.desc': 'Découvrez comment SwissAutoFlow peut transformer votre entreprise grâce à l\'automatisation',
    'about.cta.button': 'Contactez-Nous',

    // Contact Page
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'N\'hésitez pas à nous contacter directement pour discuter de votre projet d\'automatisation',
    
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.email.cta': 'Envoyer un email',
    'contact.phone.cta': 'Appeler maintenant',
    
    'contact.info.title': 'Nous Sommes Là Pour Vous',
    'contact.info.desc': 'Que vous ayez une question, un projet en tête ou simplement besoin de conseils sur l\'automatisation de votre entreprise, nous serons ravis d\'échanger avec vous !',
    'contact.info.fast': 'Réponse rapide',
    'contact.info.free': 'Conseil gratuit',
    'contact.info.swiss': '100% Suisse',

    // Appointment Page
    'appointment.title': 'Prendre Rendez-vous',
    'appointment.subtitle': 'Contactez-nous directement par email ou téléphone pour discuter de votre projet',
    
    'appointment.services.title': 'Nos Services Disponibles',
    'appointment.services.desc': 'Nous nous engageons à vous répondre rapidement. N\'hésitez pas à nous contacter pour discuter de votre projet !',
    
    'appointment.service1': 'Analyse Technologique',
    'appointment.service2': 'Application Web Sur Mesure',
    'appointment.service3': 'Application Mobile',
    'appointment.service4': 'Automatisation Complète',
    'appointment.service5': 'Intégration Systèmes',
    'appointment.service6': 'Maintenance & Support',

    // Footer
    'footer.tagline': 'Votre partenaire suisse pour l\'automatisation et la transformation digitale',
    'footer.links': 'Liens Rapides',
    'footer.contact': 'Contact',
    'footer.location': 'Suisse',
    'footer.made': 'Fait en Suisse',
    'footer.rights': 'Tous droits réservés.',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.appointment': 'Book Appointment',

    // Home Page
    'home.title': 'SwissAutoFlow',
    'home.subtitle': 'We consolidate all your tools into one customized application',
    'home.tagline': 'Analysis • Development • Automation',
    'home.cta.start': 'Get Started Free',
    'home.cta.services': 'Our Services',
    
    'home.services.title': 'Three Simple Steps',
    'home.services.subtitle': 'Our approach to transform your business',
    
    'home.service1.title': 'Analysis & Audit',
    'home.service1.desc': 'Complete assessment of your current technological infrastructure',
    
    'home.service2.title': 'Custom Applications',
    'home.service2.desc': 'Personalized development that consolidates all your tools into one solution',
    
    'home.service3.title': 'Total Automation',
    'home.service3.desc': 'Process automation to maximize your productivity',
    
    'home.benefits.title': 'Why SwissAutoFlow?',
    'home.benefits.subtitle': 'A comprehensive approach to simplify your technology',
    
    'home.benefit1.title': 'Everything Centralized',
    'home.benefit1.desc': 'A single application that consolidates all your tools and business processes',
    
    'home.benefit2.title': 'Customized',
    'home.benefit2.desc': '100% bespoke solution tailored to your specific needs',
    
    'home.benefit3.title': 'Automated',
    'home.benefit3.desc': 'Eliminate repetitive tasks and save valuable time',
    
    'home.benefit4.title': 'Scalable',
    'home.benefit4.desc': 'Solutions that grow with your business',
    
    'home.cta.final.title': 'Ready to Automate Your Business?',
    'home.cta.final.subtitle': 'Let\'s discuss your project and discover how we can help you',
    'home.cta.final.button': 'Start Now',

    // Services Page
    'services.title': 'Our Services',
    'services.subtitle': 'Complete solutions to transform your business',
    
    'services.analysis.title': 'Technology Analysis',
    'services.analysis.desc': 'Complete audit of your infrastructure to identify opportunities',
    'services.analysis.feature1': 'Complete audit of your current infrastructure',
    'services.analysis.feature2': 'Identification of processes to automate',
    'services.analysis.feature3': 'Personalized recommendations',
    'services.analysis.feature4': 'Detailed report with action plan',
    
    'services.webapp.title': 'Web Application',
    'services.webapp.desc': 'Development of modern and high-performance web applications',
    'services.webapp.feature1': 'Modern and responsive design',
    'services.webapp.feature2': 'Intuitive and customized interface',
    'services.webapp.feature3': 'Integration with your existing tools',
    'services.webapp.feature4': 'Secure hosting in Switzerland',
    
    'services.mobile.title': 'Mobile Application',
    'services.mobile.desc': 'Native iOS and Android applications for your business',
    'services.mobile.feature1': 'iOS and Android development',
    'services.mobile.feature2': 'Native and fluid interface',
    'services.mobile.feature3': 'Real-time cloud synchronization',
    'services.mobile.feature4': 'Personalized push notifications',
    
    'services.automation.title': 'Automation',
    'services.automation.desc': 'Complete automation of your business processes',
    'services.automation.feature1': 'Automation of repetitive tasks',
    'services.automation.feature2': 'Integration between your different tools',
    'services.automation.feature3': 'Custom workflows',
    'services.automation.feature4': 'Time savings and error reduction',
    
    'services.integration.title': 'System Integration',
    'services.integration.desc': 'Connect all your tools into one ecosystem',
    'services.integration.feature1': 'Connection of your existing software',
    'services.integration.feature2': 'Custom APIs',
    'services.integration.feature3': 'Real-time data synchronization',
    'services.integration.feature4': 'Secure data migration',
    
    'services.support.title': 'Support & Maintenance',
    'services.support.desc': 'Continuous support to guarantee your success',
    'services.support.feature1': 'Responsive technical support',
    'services.support.feature2': 'Regular updates',
    'services.support.feature3': 'Team training',
    'services.support.feature4': 'Evolution according to your needs',
    
    'services.cta': 'Learn More',

    // About Page
    'about.title': 'About SwissAutoFlow',
    'about.subtitle': 'An innovative Swiss company founded by passionate IT students',
    
    'about.story.title': 'Our Story',
    'about.story.p1': 'SwissAutoFlow is a Swiss company founded by professional IT students. Aware of the technological challenges faced by modern businesses, we decided to put our skills at the service of their digital transformation.',
    'about.story.p2': 'Our mission is simple: analyze your company\'s current technological situation, understand your processes, and create a customized application that consolidates all your tools while automating as many tasks as possible.',
    'about.story.p3': 'Thanks to our IT training and passion for innovation, we create tailor-made solutions - websites, mobile applications, automation systems - that truly simplify the daily life of Swiss businesses.',
    
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'Enable Swiss companies to focus on their core business by automating their technological processes and centralizing their tools in customized applications.',
    
    'about.mission.step1.title': 'Analysis',
    'about.mission.step1.desc': 'Understand your real needs',
    
    'about.mission.step2.title': 'Creation',
    'about.mission.step2.desc': 'Develop custom solutions',
    
    'about.mission.step3.title': 'Automation',
    'about.mission.step3.desc': 'Optimize your processes',
    
    'about.cta.title': 'Let\'s Work Together',
    'about.cta.desc': 'Discover how SwissAutoFlow can transform your business through automation',
    'about.cta.button': 'Contact Us',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Feel free to contact us directly to discuss your automation project',
    
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.email.cta': 'Send an email',
    'contact.phone.cta': 'Call now',
    
    'contact.info.title': 'We Are Here For You',
    'contact.info.desc': 'Whether you have a question, a project in mind, or simply need advice on automating your business, we\'ll be happy to talk with you!',
    'contact.info.fast': 'Fast response',
    'contact.info.free': 'Free advice',
    'contact.info.swiss': '100% Swiss',

    // Appointment Page
    'appointment.title': 'Book an Appointment',
    'appointment.subtitle': 'Contact us directly by email or phone to discuss your project',
    
    'appointment.services.title': 'Our Available Services',
    'appointment.services.desc': 'We are committed to responding quickly. Feel free to contact us to discuss your project!',
    
    'appointment.service1': 'Technology Analysis',
    'appointment.service2': 'Custom Web Application',
    'appointment.service3': 'Mobile Application',
    'appointment.service4': 'Complete Automation',
    'appointment.service5': 'System Integration',
    'appointment.service6': 'Maintenance & Support',

    // Footer
    'footer.tagline': 'Your Swiss partner for automation and digital transformation',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.location': 'Switzerland',
    'footer.made': 'Made in Switzerland',
    'footer.rights': 'All rights reserved.',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr')

  useEffect(() => {
    // Charger la langue sauvegardée
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
      setLanguageState(savedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
