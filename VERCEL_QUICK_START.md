# 🚀 Déploiement Rapide sur Vercel

## Méthode la plus simple (5 minutes)

### 1. Préparer Git
```bash
cd C:\Users\motde\Desktop\automatisation
git init
git add .
git commit -m "Site prêt pour Vercel"
```

### 2. Créer un dépôt GitHub
1. Allez sur https://github.com/new
2. Créez un nouveau dépôt (ex: `automatisation-site`)
3. Ne cochez PAS "Initialize with README"
4. Copiez les commandes affichées et exécutez-les :
```bash
git remote add origin https://github.com/VOTRE-USERNAME/automatisation-site.git
git branch -M main
git push -u origin main
```

### 3. Déployer sur Vercel
1. Allez sur https://vercel.com
2. Cliquez sur "Sign Up" et connectez-vous avec GitHub
3. Cliquez sur "Add New Project"
4. Sélectionnez votre dépôt `automatisation-site`
5. Vercel détectera automatiquement Next.js
6. Cliquez sur "Deploy"

**C'est tout !** Votre site sera en ligne en 2-3 minutes.

## ✅ Vérification

Après le déploiement :
- Votre site sera sur `votre-projet.vercel.app`
- Chaque push sur GitHub déclenchera un nouveau déploiement
- Les logs sont disponibles dans le dashboard Vercel

## 📝 Informations du site

- **Email** : contact@automatisation.ch
- **Téléphone** : 076 745 32 25
- **WhatsApp** : 41767453225

## 🔧 Configuration automatique

Vercel a détecté :
- ✅ Framework : Next.js 15
- ✅ Build Command : `npm run build`
- ✅ Install Command : `npm install`
- ✅ Output Directory : `.next`

Tout est déjà configuré ! 🎉

