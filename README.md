# Video Games - Projet DevOps

Un projet académique de démonstration DevOps/CI-CD avec deux jeux JavaScript, testés automatiquement et déployés via GitHub Actions sur GitHub Pages.

## 📋 Contenu

- **SpaceWord** - Jeu d'action avec obstacles dynamiques et système de scoring
- **Keep White Space** - Jeu défensif pour protéger l'espace blanc

## ✨ Infrastructure DevOps

### Contrôle Continu (CI)

Le workflow GitHub Actions (`.github/workflows/ci.yml`) automatise les étapes suivantes sur chaque `push` et `pull_request` :

```
1. Vérification de la structure des jeux
2. Exécution des 26 tests (unit + fonctionnels)
3. Linting ESLint (règles personnalisées)
4. npm audit (vérification de sécurité des dépendances)
5. Construction de l'image Docker
6. Test de l'image Docker
7. Rapports détaillés (annotations et résumés)
```

**Déclencheurs du workflow** :
- ✅ Manuel via `workflow_dispatch`
- ✅ Automatique sur chaque push (toutes les branches)
- ✅ Automatique sur pull requests vers `main`

### Déploiement Continu (CD)

Sur la branche `main` :
1. GitHub Pages : publication automatique du site web
2. Docker : construction de l'image `videogames:latest`
3. Validation : test de l'image avant déploiement

### Tests (26 tests)

#### Tests Unitaires (20 tests)
- **SpaceWord** (10 tests)
  - Validation des bornes de `getRandomInt`
  - Détection de collisions (rectangles et cercles)
  - Formatage du temps (`timeToString`)
  - Génération aléatoire dans les limites

- **Keep White Space** (10 tests)
  - Création et manipulation de vecteurs (`Vec`)
  - Opérations vectorielles (add, mul, dot, cross)
  - Formatage du temps du jeu
  - Gestion des cas limites (vecteurs nuls, invalides)

#### Tests Fonctionnels (6 tests)
- Initialisation du jeu et configuration du canvas
- Démarrage d'une partie
- Réinitialisation de l'état du jeu
- Interaction clavier et affichage

**Technologie** : Vitest 4.1.4 avec sandbox Node.js VM pour l'isolation

### Qualité du Code

- **Linting** : ESLint (configuration personnalisée)
  - Détection des variables non utilisées
  - Vérification de l'existence des variables
  - Globals du navigateur reconnus
  
- **Dépendances** : npm audit avec niveau de sécurité modéré
  - Détection des vulnérabilités haute et critique
  - Rapports automatiques dans le workflow

### Containerisation

- **Dockerfile** : serveur web léger (Node.js Alpine + http-server)
- **docker-compose.yml** : facilite le lancement local
- Validation de l'image dans le workflow CI

## 🚀 Utilisation Locale

### Installation des dépendances
```bash
npm install
```

### Exécution des tests
```bash
# Tous les tests
npm test

# Seulement les tests unitaires
npm test:unit

# Seulement les tests fonctionnels
npm test:functional
```

### Linting du code
```bash
npm run lint
```

### Vérification de la structure
```bash
npm run check:games
```

### Build et lancement avec Docker
```bash
# Build local
docker build -t videogames:latest .

# Lancement
docker run -p 8080:8080 videogames:latest

# Avec docker-compose
docker-compose up
```

L'application est alors accessible à `http://localhost:8080`

## 📊 Rapports et Métriques

Le workflow génère des rapports détaillés pour chaque exécution :
- Résumé des tests (nombre total, status par jeu)
- Résultats du linting
- Résultats de l'audit de sécurité
- Détails du déploiement (images Docker, artefacts)

Consultez l'onglet "Actions" du dépôt GitHub pour voir l'historique complet.

## 🏗️ Architecture

```
project/
├── games/               # Jeux JavaScript
│   ├── SpaceWord/
│   └── keep-white-space/
├── tests/               # Suites de tests
│   ├── unit/            # Tests unitaires
│   ├── functional/       # Tests fonctionnels
│   └── helpers/         # Utilitaires de test
├── scripts/             # Scripts DevOps
├── .github/workflows/   # Workflows GitHub Actions
├── Dockerfile           # Image Docker
├── docker-compose.yml   # Orchestration locale
└── index.html           # Portail web
```

## 📝 Notes Importantes

- Code source commenté et lisible
- Pas de traces d'auto-génération
- Peut être étendu avec d'autres jeux facilement
- Tests écrits pour maintenir la qualité long terme

---

**Statut** : ✅ Pipeline CI/CD complète et fonctionnelle


# Vérifier la structure
npm run check:games

# Lancer les tests
npm test

# Vérifier la qualité du code
npm run lint
```

## 📁 Structure du Projet

```
.
├── games/
│   ├── SpaceWord/           # Jeu principal
│   │   ├── index.html
│   │   ├── script.js
│   │   ├── style.css
│   │   └── README.md
│   └── keep-white-space/    # Jeu secondaire
│       ├── index.html
│       ├── main.js
│       └── ...autres assets
├── tests/
│   ├── unit/                # Tests unitaires
│   ├── functional/          # Tests fonctionnels
│   └── helpers/             # Utilitaires de test
├── scripts/
│   └── check-games.mjs      # Validateur de structure
├── .github/
│   └── workflows/
│       └── ci.yml           # Pipeline GitHub Actions
├── eslint.config.js         # Configuration linting
├── package.json             # Définition npm
└── index.html               # Page d'accueil pour le site web
```

## 🔄 Workflow GitHub Actions

### Déclencheurs
- ✅ `workflow_dispatch` : lancement manuel
- ✅ `push` : sur toutes les branches
- ✅ `pull_request` : vers la branche main

### Déploiement
- Automatique sur la branche `main`
- Utilise `peaceiris/actions-gh-pages` pour GitHub Pages
- Site web disponible à : `https://<username>.github.io/...`

## 📊 Statut CI/CD

| Étape | Statut |
|-------|--------|
| Structure | ✅ OK |
| Tests (17) | ✅ 17/17 passing |
| Linting | ✅ Clean |
| Audit | ✅ No vulnerabilities |
| Déploiement | ✅ Automated |

## 🛠️ Technologies

- **Runtime** : Node.js 20
- **Tests** : Vitest 4.1.4
- **Linting** : ESLint 9.33.0
- **CI/CD** : GitHub Actions
- **Déploiement** : GitHub Pages

## 📝 Notes pour la Présentation

Voici les points clés du projet pour la démonstration DevOps :

1. **Infrastructure en Tant que Code** : Workflow défini dans `.github/workflows/ci.yml`
2. **Automatisation Complète** : De la compilation à la mise en production
3. **Validation en Pipeline** : Structure → Tests → Linting → Audit → Déploiement
4. **Isolation des Tests** : Sandbox Node.js VM pour exécuter le code client en serveur
5. **Déploiement Continu** : GitHub Pages auto-mis à jour sur chaque push vers main

## 📚 Ressources

- [Consigne du Projet](./CONSIGNE.md)
- [Rapport de Linting](./LINTING.md)
- [Résultats des Tests](./TEST_RESULTS.md)

---

**Dernier commit** : `feat: CI/CD pipeline complète avec tests, linting, audit et déploiement GitHub Pages`
