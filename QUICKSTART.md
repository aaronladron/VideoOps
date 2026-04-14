# 🚀 QUICKSTART - VideoOps

Démarrer rapidement le projet en quelques commandes.

## ⚡ Démarrage en 5 min (Mode développement)

### 1. Installation
```bash
npm install
```

### 2. Vérifier que tout fonctionne
```bash
npm run check:games   # Structure OK
npm test              # 26/26 tests passent
npm run lint          # 0 erreurs
```

### 3. Lancer localement
```bash
npm run serve
# Accéder à http://localhost:8080
```

---

## 🐳 Démarrage avec Docker (30 sec)

```bash
npm run docker:compose
# Ou
docker-compose up
```

Accéder à http://localhost:8080

---

## 📝 Développement

### Modifier un jeu
1. Éditer le fichier (`games/<game>/source.js`)
2. Ajouter les tests correspondants (`tests/unit/<game>.test.mjs`)
3. Exécuter `npm test` pour valider
4. Exécuter `npm run lint` avant de committer

### Ajouter un test
```bash
# Créer le test dans tests/unit/ ou tests/functional/
# Utiliser Vitest comme les tests existants

npm test -- --watch tests/unit/spaceword.test.mjs
```

### Vérifier tout avant push
```bash
npm run ci:local    # Lance la pipeline locale complète
```

---

## 📊 Vérifier la CI/CD

### Localement
```bash
# Simulation du workflow GitHub
npm run ci        # Strict (échoue si erreur)
npm run ci:local  # Sûr (audit peut warning)
```

### Sur GitHub
1. Aller à **Actions** → Voir le dernier workflow
2. Cliquer sur le run pour voir les détails
3. Voir les annotations et résumés en bas

---

## 🔥 Commandes essentielles

```bash
npm test              # Lancer tous les tests
npm test:watch        # Mode watch (dev)
npm run lint          # Vérifier le code
npm run lint:fix      # Corriger automatiquement
npm run lint          # ESLint
npm run audit         # Audit de sécurité
npm run serve         # Serveur web local
npm run docker:build  # Build Docker
npm run docker:run    # Run Docker
npm run docker:compose # docker-compose
```

---

## 🐛 Troubleshooting rapide

| Problème | Solution |
|----------|----------|
| Tests échouent | `npm install`, puis `npm test` |
| Erreurs lint | `npm run lint:fix` |
| Port 8080 occupé | `npm run serve -- --port 3000` |
| Docker error | Vérifier `docker --version` |
| Module not found | `npm install` |

---

## 📚 Autres ressources

- **Architecture** : Voir [README.md](README.md)
- **Contribution** : Voir [CONTRIBUTING.md](CONTRIBUTING.md)
- **Déploiement** : Voir [DEPLOYMENT.md](DEPLOYMENT.md)
- **Détails** : Voir [DEVOPS_REPORT.md](DEVOPS_REPORT.md)
- **Status** : Voir [STATUS.md](STATUS.md)

---

## ✨ Points clés

- **26 tests** : 100% passent ✅
- **ESLint** : 0 erreurs ✅
- **npm audit** : 0 vulnérabilités ✅
- **Workflow** : Automatisé ✅
- **Docker** : Testé et validé ✅

---

**Prêt à développer ? 🎯**

```bash
npm install && npm test    # Let's go! 🚀
```
