import { existsSync } from 'node:fs';

const games = [
  {
    name: 'SpaceWord',
    files: ['games/SpaceWord/index.html', 'games/SpaceWord/script.js', 'games/SpaceWord/style.css']
  },
  {
    name: 'keep-white-space',
    files: ['games/keep-white-space/index.html', 'games/keep-white-space/main.js']
  }
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

if (missing) {
  process.exit(1);
}

console.log('Game structure OK');