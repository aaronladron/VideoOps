# 📁 Guide de Navigation - VideoOps

Structure du projet et où trouver chaque composant important.

## 📂 Arborescence

```
VideoOps/
│
├── 📖 DOCUMENTATION
│  ├── README.md                    ← Points de départ
│  ├── QUICKSTART.md                ← Démarrage rapide
│  ├── CONTRIBUTING.md              ← Guide contributeur
│  ├── DEPLOYMENT.md                ← Options de déploiement
│  ├── DEVOPS_REPORT.md             ← Rapport technique
│  ├── CHANGELOG.md                 ← Historique des changements
│  └── STATUS.md                    ← État du projet
│
├── 🚀 INFRASTRUCTURE
│  ├── .github/workflows/
│  │  └── ci.yml                    ← Workflow GitHub Actions
│  ├── Dockerfile                   ← Containerisation
│  ├── docker-compose.yml           ← Orchestration locale
│  ├── .dockerignore                ← Optimisation Docker
│  ├── .gitignore                   ← Protection des fichiers
│  ├── .env.example                 ← Configuration exemple
│  └── eslint.config.js             ← Règles linting
│
├── 🎮 JEUX
│  └── games/
│     ├── SpaceWord/
│     │  ├── index.html             ← Interface du jeu
│     │  ├── script.js              ← Logique du jeu
│     │  ├── style.css              ← Styles
│     │  └── README.md              ← Doc SpaceWord
│     └── keep-white-space/
│        ├── index.html             ← Interface
│        ├── main.js                ← Logique
│        └── README.md              ← Doc jeu
│
├── 🧪 TESTS
│  └── tests/
│     ├── unit/
│     │  ├── spaceword.test.mjs    ← 10 tests SpaceWord
│     │  └── keep-white-space.test.mjs ← 10 tests Keep White
│     ├── functional/
│     │  ├── spaceword.test.mjs    ← 3 tests SpaceWord
│     │  └── keep-white-space.test.mjs ← 3 tests Keep White
│     └── helpers/
│        └── load-game.mjs          ← Utilitaires de test
│
├── 📜 SCRIPTS
│  └── scripts/
│     └── check-games.mjs           ← Vérification structure
│
├── 🌐 PAGE D'ACCUEIL
│  └── index.html                   ← Portail web principal
│
└── ⚙️ CONFIGURATION
   ├── package.json                 ← Scripts + dépendances
   ├── package-lock.json            ← Lock des dépendances
   └── .git/                        ← Historique Git
```

---

## 📍 Où aller selon votre besoin

### 🎯 Je veux démarrer rapidement
→ Lire **QUICKSTART.md**

### 📚 Je veux comprendre l'architecture
→ Lire **README.md**

### 🤝 Je veux contribuer
→ Lire **CONTRIBUTING.md**

### 🚀 Je veux déployer
→ Lire **DEPLOYMENT.md**

### 📊 Je veux voir le détail technique
→ Lire **DEVOPS_REPORT.md**

### ✅ Je veux voir l'état du projet
→ Lire **STATUS.md**

### 📋 Je veux voir les changements
→ Lire **CHANGELOG.md**

---

## 🔧 Fichiers Clés par Fonction

### Tests
```
tests/unit/          ← Tests unitaires (20 tests)
tests/functional/    ← Tests du comportement (6 tests)
tests/helpers/       ← Utilitaires de test
```

### CI/CD
```
.github/workflows/ci.yml    ← Toute la magie du workflow
```

### Code du Jeu
```
games/SpaceWord/script.js          ← Logique SpaceWord
games/keep-white-space/main.js     ← Logique Keep White
```

### Configuration & Déploiement
```
Dockerfile              ← Image Docker
docker-compose.yml      ← Orchestration locale
eslint.config.js        ← Linting du code
package.json            ← Scripts npm + dépendances
.gitignore             ← Protection fichiers
.env.example           ← Configuration
```

---

## 🔍 Checklist Avant de Committer

- [ ] `npm test` → 26/26 ✅
- [ ] `npm run lint` → 0 erreurs ✅
- [ ] `npm run audit` → Check audit ✅
- [ ] `npm run check:games` → Structure OK ✅
- [ ] Commit message clair ✅

Puis :
```bash
git push origin ma-branche
```

Le workflow GitHub feras le reste ! 🤖

---

## 📊 Fichiers à Consulter par Rôle

### 👨‍💻 Développeur Backend/Jeux
- `games/*/script.js` ou `main.js` ← Code métier
- `tests/unit/` ← Tests associés
- `tests/functional/` ← Tests intégration

### 🔨 DevOps/Infrastructure
- `.github/workflows/ci.yml` ← Pipeline
- `Dockerfile` + `docker-compose.yml` ← Containerisation
- `DEPLOYMENT.md` ← Options deploy
- `scripts/` ← Scripts utilitaires

### 📝 Tech Lead/Architect
- `README.md` ← Vue d'ensemble
- `DEVOPS_REPORT.md` ← Détails techniques
- `architecture/` (futur) ← Diagrammes
- `CONTRIBUTING.md` ← Standards

### 🎓 Nouveau contributeur
- **QUICKSTART.md** ← À lire EN PREMIER
- `CONTRIBUTING.md` ← À lire deuxièmement
- `README.md` ← À lire troisièmement

---

## 🎯 Commandes Essentielles

Par rôle :

### Développeur
```bash
npm run test:watch          # Développement
npm run serve              # Serveur local
npm run lint:fix           # Auto-correction
```

### DevOps
```bash
npm run ci                 # Pipeline locale
npm run docker:build       # Build Docker
npm run docker:compose     # Docker local
```

### QA
```bash
npm test                   # Tous les tests
npm run audit              # Vérifier sécurité
npm run lint               # Vérifier code
```

---

## 📞 Besoin d'aide ?

1. **"Comment démarrer ?"** → QUICKSTART.md
2. **"Comment contribuer ?"** → CONTRIBUTING.md
3. **"Comment déployer ?"** → DEPLOYMENT.md
4. **"Questions techniques ?"** → DEVOPS_REPORT.md
5. **"État du projet ?"** → STATUS.md

---

**Navigation facile = Projet maintenable ! 🎯**

