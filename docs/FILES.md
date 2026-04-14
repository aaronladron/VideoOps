# Guide de navigation VideoOps

## Arborescence actuelle

```text
VideoOps/
├── .github/workflows/
│   ├── ci-spaceword.yml
│   ├── ci-keep-white-space.yml
│   └── deploy-pages.yml
├── games/
│   ├── spaceword/
│   │   ├── assets/
│   │   ├── src/main.js
│   │   └── tests/
│   └── keep-white-space/
│       ├── assets/
│       ├── src/main.js
│       └── tests/
├── web/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── docs/
│   ├── QUICKSTART.md
│   ├── CONTRIBUTING.md
│   ├── DEPLOYMENT.md
│   ├── DEVOPS_REPORT.md
│   ├── STATUS.md
│   ├── CHANGELOG.md
│   ├── FILES.md
│   ├── reports/
│   └── screenshots/
├── scripts/check-games.mjs
├── package.json
├── package-lock.json
└── README.md
```

## Où trouver quoi

- Démarrage rapide : `docs/QUICKSTART.md`
- Contribution : `docs/CONTRIBUTING.md`
- Déploiement : `docs/DEPLOYMENT.md`
- Rapport technique : `docs/DEVOPS_REPORT.md`
- État courant : `docs/STATUS.md`
- Historique : `docs/CHANGELOG.md`

## Commandes utiles

```bash
npm run check:games
npm test
npm run lint
npm run audit
```

