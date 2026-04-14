import { beforeEach, describe, expect, test } from 'vitest';
import vm from 'node:vm';
import { createKeepWhiteSpaceStubs, loadGameScript } from '../helpers/load-game.mjs';

const scriptPath = new URL('../../src/main.js', import.meta.url);

describe('Keep White Space - comportement utilisateur', () => {
  let context;

  beforeEach(() => {
    context = loadGameScript(scriptPath, createKeepWhiteSpaceStubs());
  });

  test('init prépare la scène avec plusieurs canvas', () => {
    context.init();
    expect(context.gamepanel.children).toHaveLength(5);
    expect(context.logs.rafCount).toBeGreaterThan(0);
  });

  test('updatePlayerDirection démarre le jeu quand on appuie sur espace', () => {
    context.init();
    expect(vm.runInContext('gameStatus.isGameStart', context)).toBe(false);
    context.updatePlayerDirection({ key: ' ', keyCode: 32 }, true);
    expect(vm.runInContext('gameStatus.isGameStart', context)).toBe(true);
  });

  test('GameStatus.draw affiche l ecran titre au démarrage', () => {
    context.init();
    vm.runInContext('gameStatus.draw()', context);
    expect(context.logs.entries.some(entry => entry[0] === 'fillText')).toBe(true);
  });
});