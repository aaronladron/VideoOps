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

## Documentation

- [Quickstart](docs/QUICKSTART.md)
- [Guide de contribution](docs/CONTRIBUTING.md)
- [Guide de déploiement](docs/DEPLOYMENT.md)
- [Rapport DevOps](docs/DEVOPS_REPORT.md)
- [État du projet](docs/STATUS.md)
- [Changelog](docs/CHANGELOG.md)
- [Guide de navigation](docs/FILES.md)
