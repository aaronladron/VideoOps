# Status

**Dernière mise à jour** : 14/04/2026

**Statut global** : ✅ complet

## Ce qui est en place

- Deux jeux autonomes dans `games/spaceword/` et `games/keep-white-space/`.
- Une vitrine web dans `web/`.
- Trois workflows GitHub Actions séparés.
- 26 tests automatisés au total.
- `npm audit` vert sur les deux jeux.
- Docker et docker-compose pour le local.

## Vérifications validées

- `npm run check:games`
- `npm test`
- `npm run lint`
- `npm run audit`

## Workflow CI/CD

- `ci-spaceword.yml` : tests, lint et audit pour SpaceWord.
- `ci-keep-white-space.yml` : tests, lint et audit pour Keep White Space.
- `deploy-pages.yml` : vérifie que les deux CI du commit sont passées puis publie GitHub Pages.

## Déploiement

- La publication GitHub Pages sert le contenu préparé depuis `web/` et `games/`.
- Le local passe par `docker-compose.yml`.

## À montrer pendant la démo

1. Les deux workflows CI en parallèle.
2. Les résultats Vitest sur chaque jeu.
3. Le déploiement Pages avec la vérification des CI.
4. Le portail web et les liens vers les jeux.
