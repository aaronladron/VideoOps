docker run -p 8080:8080 videogames:latest
# VideoOps

Projet académique DevOps basé sur deux jeux JavaScript rétro, une vitrine web simple et des workflows GitHub Actions séparés par responsabilité.

## Vue d’ensemble

- `games/spaceword/` contient le jeu SpaceWord avec son propre sous-projet npm.
- `games/keep-white-space/` contient Keep White Space avec le même découpage.
- `web/` contient la page d’accueil publiée sur GitHub Pages.
- `docs/` contient les captures et rapports de sortie.

## CI/CD

Le dépôt utilise trois workflows.

- [`.github/workflows/ci-spaceword.yml`](.github/workflows/ci-spaceword.yml) lance les tests, le lint et l’audit pour SpaceWord.
- [`.github/workflows/ci-keep-white-space.yml`](.github/workflows/ci-keep-white-space.yml) fait la même chose pour Keep White Space.
- [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) vérifie que les deux CI du commit courant ont réussi puis déploie la plateforme sur GitHub Pages.

## Vérifications

La base de validation est la suivante :

- 26 tests au total, 13 par jeu.
- Les 8 tests unitaires fournis par l’énoncé sont couverts.
- Chaque jeu ajoute ses tests unitaires et fonctionnels propres.
- `npm audit` est exécuté dans chaque sous-projet.
- ESLint est configuré au niveau de chaque jeu et pour la vitrine web.

## Commandes utiles

```bash
npm run check:games
npm test
npm run lint
npm run audit
npm run serve
npm run docker:compose
```

## Déploiement local

- La vitrine est servie depuis `web/`.
- `docker-compose.yml` lance le site web sur `http://localhost:8080`.
- Chaque jeu dispose aussi de son `Dockerfile` pour être servi seul si besoin.

## Structure

```text
video-ops/
├── .github/
│   └── workflows/
├── games/
│   ├── spaceword/
│   └── keep-white-space/
├── web/
├── docs/
├── scripts/
├── README.md
├── .gitignore
└── docker-compose.yml
```

## Résultat attendu

Le projet est prêt pour la démonstration : code, tests, lint, audit et déploiement sont séparés, reproductibles et faciles à relancer.


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
