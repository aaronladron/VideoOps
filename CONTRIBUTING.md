# Guide de Contribution

Merci de vouloir contribuer au projet DevOps Video Games ! Ce guide explique comment configurer votre environnement et contribuer efficacement.

## 🔧 Configuration de l'environnement local

### Prérequis
- Node.js 20+ ([installation](https://nodejs.org/))
- Docker et docker-compose (optionnel, pour containerisation)
- Git

### Étapes d'installation
```bash
# 1. Cloner le dépôt
git clone <url-du-repo>
cd VideoOps

# 2. Installer les dépendances
npm install

# 3. Vérifier la configuration
npm run check:games
```

## 🧪 Développement & Test

### Exécuter les tests
```bash
# Tous les tests
npm test

# Tests unitaires uniquement
npm test:unit

# Tests fonctionnels uniquement  
npm test:functional

# Mode watch (pour développement)
npm run test:watch
```

### Linting du code
```bash
# Vérifier les erreurs
npm run lint

# Corriger automatiquement
npm run lint:fix
```

### Vérification de sécurité
```bash
# Audit des dépendances
npm run audit
```

## 🚀 Lancement local

### Serveur HTTP simple
```bash
npm run serve
# Accessible à http://localhost:8080
```

### Avec Docker
```bash
# Build de l'image
npm run docker:build

# Lancement du conteneur
npm run docker:run

# Ou avec docker-compose
npm run docker:compose
```

## 📝 Écrire des tests

### Tests unitaires
Les tests unitaires doivent vérifier les **fonctions pures** et **utilités**.

Exemple pour SpaceWord (`tests/unit/spaceword.test.mjs`) :
```javascript
test('rectIntersect détecte les collisions', () => {
  expect(context.rectIntersect(1, 1, 5, 2, 4, 1, 1, 2)).toBe(true);
});
```

### Tests fonctionnels
Les tests fonctionnels vérifient le **comportement du jeu** (initialization, user interaction, etc.).

Exemple pour Keep White Space (`tests/functional/keep-white-space.test.mjs`) :
```javascript
test('init prépare la scène avec plusieurs canvas', () => {
  context.init();
  expect(context.gamepanel.children).toHaveLength(5);
});
```

## 👾 Ajouter un nouveau jeu

1. Créer un dossier dans `games/<game-name>/`
2. Implémenter les fichiers (`index.html`, `script.js`, etc.)
3. Ajouter une entrée dans `scripts/check-games.mjs`
4. Créer `tests/unit/<game-name>.test.mjs` avec au moins 5 tests unitaires**
5. Créer `tests/functional/<game-name>.test.mjs` avec au least 3 tests fonctionnels**
6. Ajouter une section dans `index.html` pour lier le jeu
7. Mettre à jour `README.md` et `DEVOPS_REPORT.md`

*Note: Respecter les exigences de la consigne*

## 🔄 Workflowde contribution

1. **Créer une branche** : `git checkout -b feature/<description>`
2. **Faire les changements** + tester localement
3. **Valider les tests** : `npm test`
4. **Valider le linting** : `npm run lint`
5. **Commiter avec des messages clairs** : `git commit -m "feat: description"`
6. **Pousser la branche** : `git push origin feature/<description>`
7. **Créer une Pull Request** vers `main`
8. **Attendre la validation** du workflow GitHub Actions

## ⚠️ Règles importantes

### Code Quality
- ✅ Respecter le Google JavaScript Style Guide
- ✅ Tests pour chaque nouvelle fonctionnalité
- ✅ Communication claire dans les commits
- ❌ Pas de `console.log` en production
- ❌ Pas de secrets ou tokens en dur

### DevOps
- ✅ Tous les tests doivent passer avant merge
- ✅ Le linting doit être OK
- ✅ L'audit de sécurité ne doit pas bloquer (warning acceptés)
- ✅ Docker build doit réussir

### Documentation
- ✅ Mettre à jour README si structure change
- ✅ Commenter le code complexe
- ✅ Ajouter des tests et documentation pour les nouvelles features

## 🚨 Troubleshooting

### "npm test" échoue
```bash
# Vérifier que les dépendances sont à jour
npm install --legacy-peer-deps

# Vérifier la structure des jeux
npm run check:games

# Vérifier qu'il n'y a pas de fichiers manquants
ls games/SpaceWord/ games/keep-white-space/
```

### "npm run lint" trouve des erreurs
```bash
# Voir les erreurs spécifiques
npm run lint | head -20

# Corriger automatiquement
npm run lint:fix
```

### Docker ne build pas
```bash
# Vérifier que Docker est lancé
docker --version

# Nettoyer et rebuild
rm -rf .dockerignore
npm run docker:build
```

## 📊 Métriques et statut

Voir le workflow GitHub Actions pour :
- Statut des 26 tests
- Résultats du linting
- Audit de sécurité
- Déploiement GitHub Pages

## 📞 Besoin d'aide ?

Vérifier d'abord :
- Le README.md
- DEVOPS_REPORT.md
- Les tests existants pour des exemples
- L'historique des commits

---

**Bonne contribution ! 🚀**
