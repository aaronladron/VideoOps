docker-compose up
# Quickstart

## Installation

```bash
npm install
```

## Vérification rapide

```bash
npm run check:games
npm test
npm run lint
npm run audit
```

## Lancer la vitrine

```bash
npm run serve
```

Le site répond sur `http://localhost:8080`.

## Lancer avec Docker

```bash
npm run docker:compose
```

ou

```bash
docker compose up
```

## Travailler sur un jeu

Chaque jeu est autonome :

```bash
cd games/spaceword
npm test
npm run lint
```

Puis faire la même chose dans `games/keep-white-space/`.

## Vérifier la CI locale

```bash
npm run ci
```

## Ressources

- [README.md](README.md)
- [CONTRIBUTING.md](CONTRIBUTING.md)
- [DEPLOYMENT.md](DEPLOYMENT.md)
- [STATUS.md](STATUS.md)
