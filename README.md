# Site Web - Services Informatiques sur-mesure

Site web professionnel pour une entreprise de services informatiques avec automatisation et optimisation.

## 🚀 Fonctionnalités

### Pages principales
- ✅ **Accueil** - Phrase d'accroche, présentation des services, CTA
- ✅ **Services** - Détails des offres (Diagnostic, Refonte, Automatisation, Optimisation)
- ✅ **À propos** - Présentation de l'entreprise, méthodologie, valeurs
- ✅ **Rendez-vous** - Formulaire avec intégration Google Calendar
- ✅ **Contact** - Formulaire de contact et informations
- ✅ **Réalisations** - Statistiques et résultats

### Fonctionnalités techniques
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Animations modernes avec Framer Motion
- ✅ Formulaire de rendez-vous avec envoi email
- ✅ Intégration Google Calendar
- ✅ SEO optimisé (métadonnées, titres, descriptions)
- ✅ Liens réseaux sociaux (LinkedIn, Instagram)
- ✅ Navigation fluide avec Header/Footer
- ✅ Design minimaliste et professionnel

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Démarrer le serveur de production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🛠️ Technologies utilisées

- **Next.js 15** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icônes

## 📁 Structure du projet

```
automatisation/
├── app/
│   ├── page.tsx              # Page d'accueil
│   ├── services/
│   │   └── page.tsx           # Page services
│   ├── a-propos/
│   │   └── page.tsx            # Page à propos
│   ├── rendez-vous/
│   │   └── page.tsx           # Page rendez-vous
│   ├── contact/
│   │   └── page.tsx           # Page contact
│   ├── temoignages/
│   │   └── page.tsx           # Page réalisations
│   ├── layout.tsx             # Layout principal
│   └── globals.css            # Styles globaux
├── components/
│   ├── Header.tsx             # Header avec navigation
│   └── Footer.tsx             # Footer avec liens
└── ...
```

## 🎨 Personnalisation

### Couleurs
Les couleurs peuvent être modifiées dans `tailwind.config.js` :
- Primary (bleu) : `primary-500` à `primary-900`
- Secondary (gris) : `secondary-500` à `secondary-900`

### Contenu
- Modifier les textes directement dans les fichiers de pages
- Personnaliser les services dans `app/services/page.tsx`
- Coordonnées : Email `contact@automatisation.ch` et Téléphone `076 745 32 25`

### Formulaire de rendez-vous
Le formulaire envoie actuellement un email via `mailto:` et ouvre Google Calendar.
Pour une intégration complète, vous pouvez :
- Utiliser un service comme Formspree, SendGrid, ou Resend
- Intégrer avec un backend (API Routes Next.js)
- Utiliser un service de calendrier comme Calendly

## 📧 Configuration Email

Pour activer l'envoi d'emails automatiques, vous pouvez :
1. Utiliser un service comme Resend, SendGrid, ou Mailgun
2. Créer une API Route Next.js pour gérer l'envoi
3. Intégrer avec un service de formulaire comme Formspree

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Autres plateformes
- Netlify
- AWS Amplify
- Cloudflare Pages

## 📝 Notes

- Les formulaires utilisent actuellement `mailto:` pour l'envoi d'emails
- L'intégration Google Calendar ouvre le calendrier dans un nouvel onglet
- Pour une production complète, configurez un service d'email backend
- Les images peuvent être ajoutées dans le dossier `public/`

## 📄 Licence

Ce projet est privé et destiné à un usage commercial.

