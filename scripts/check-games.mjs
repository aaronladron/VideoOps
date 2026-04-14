import { existsSync } from 'node:fs';

const games = [
  {
    name: 'spaceword',
    files: [
      'games/spaceword/index.html',
      'games/spaceword/src/main.js',
      'games/spaceword/package.json',
      'games/spaceword/package-lock.json',
      'games/spaceword/eslint.config.js',
      'games/spaceword/playwright.config.js',
      'games/spaceword/Dockerfile',
      'games/spaceword/tests/unit/spaceword.test.mjs',
      'games/spaceword/tests/functional/spaceword.test.mjs',
      'games/spaceword/tests/helpers/load-game.mjs'
    ]
  },
  {
    name: 'keep-white-space',
    files: [
      'games/keep-white-space/index.html',
      'games/keep-white-space/src/main.js',
      'games/keep-white-space/package.json',
      'games/keep-white-space/package-lock.json',
      'games/keep-white-space/eslint.config.js',
      'games/keep-white-space/playwright.config.js',
      'games/keep-white-space/Dockerfile',
      'games/keep-white-space/tests/unit/keep-white-space.test.mjs',
      'games/keep-white-space/tests/functional/keep-white-space.test.mjs',
      'games/keep-white-space/tests/helpers/load-game.mjs'
    ]
  }
];

const webFiles = [
  'web/index.html',
  'web/styles.css',
  'web/script.js',
  'web/Dockerfile'
];

const docs = [
  'README.md',
  'docs/QUICKSTART.md',
  'docs/CONTRIBUTING.md',
  'docs/DEPLOYMENT.md',
  'docs/DEVOPS_REPORT.md',
  'docs/STATUS.md',
  'docs/CHANGELOG.md',
  'docs/FILES.md',
  'docs/screenshots/.gitkeep',
  'docs/reports/.gitkeep',
  'docker-compose.yml',
  '.github/workflows/ci-spaceword.yml',
  '.github/workflows/ci-keep-white-space.yml',
  '.github/workflows/deploy-pages.yml'
];

let missing = false;

for (const game of games) {
  for (const file of game.files) {
    if (!existsSync(new URL(`../${file}`, import.meta.url))) {
      console.error(`Missing ${file} for ${game.name}`);
      missing = true;
    }
  }
}

for (const file of webFiles) {
  if (!existsSync(new URL(`../${file}`, import.meta.url))) {
    console.error(`Missing ${file} for web`);
    missing = true;
  }
}

for (const file of docs) {
  if (!existsSync(new URL(`../${file}`, import.meta.url))) {
    console.error(`Missing ${file}`);
    missing = true;
  }
}

if (missing) {
  process.exit(1);
}

console.log('Game structure OK');