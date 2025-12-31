# Déploiement sur Vercel

Ce guide vous explique comment déployer le site sur Vercel.

## 🚀 Méthode 1 : Via l'interface Vercel (Recommandé)

### Étape 1 : Préparer le projet Git

1. Initialisez Git si ce n'est pas déjà fait :
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Créez un dépôt sur GitHub :
   - Allez sur https://github.com/new
   - Créez un nouveau dépôt
   - Suivez les instructions pour push votre code

### Étape 2 : Déployer sur Vercel

1. Allez sur https://vercel.com
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur "Add New Project"
4. Importez votre dépôt GitHub
5. Vercel détectera automatiquement Next.js
6. Cliquez sur "Deploy"

Vercel configurera automatiquement :
- Framework : Next.js
- Build Command : `npm run build`
- Output Directory : `.next`
- Install Command : `npm install`

## 🚀 Méthode 2 : Via Vercel CLI

### Installation

```bash
npm i -g vercel
```

### Déploiement

```bash
# Dans le dossier du projet
cd C:\Users\motde\Desktop\automatisation

# Déployer
vercel

# Pour la production
vercel --prod
```

## ✅ Vérifications avant déploiement

- [x] Configuration Next.js correcte
- [x] `package.json` avec les bonnes dépendances
- [x] `.gitignore` configuré
- [x] `vercel.json` créé
- [x] Pas de variables d'environnement sensibles dans le code
- [x] Tous les fichiers nécessaires sont présents

## 📝 Variables d'environnement

Si vous avez besoin de variables d'environnement :
1. Allez dans les paramètres du projet sur Vercel
2. Section "Environment Variables"
3. Ajoutez vos variables

## 🔧 Configuration automatique

Vercel détecte automatiquement :
- **Framework** : Next.js 15
- **Build Command** : `npm run build`
- **Output Directory** : `.next`
- **Node Version** : Automatique (recommandé 18+)

## 🌐 Domaine personnalisé

Après le déploiement :
1. Allez dans les paramètres du projet
2. Section "Domains"
3. Ajoutez votre domaine personnalisé

## 📊 Monitoring

Vercel fournit automatiquement :
- Analytics
- Logs en temps réel
- Performance monitoring
- Déploiements automatiques à chaque push

## ⚠️ Notes importantes

- Ne pas push le dossier `.next/` ou `out/` (déjà dans `.gitignore`)
- Vercel fait le build automatiquement
- Les déploiements sont automatiques à chaque push sur la branche principale
- Le site sera accessible sur `votre-projet.vercel.app`

## 🎉 C'est prêt !

Une fois déployé, votre site sera accessible en ligne et se mettra à jour automatiquement à chaque modification.

