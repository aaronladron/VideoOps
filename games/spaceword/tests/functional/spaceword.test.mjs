import { beforeEach, describe, expect, test } from 'vitest';
import vm from 'node:vm';
import { createSpaceWordStubs, loadGameScript } from '../helpers/load-game.mjs';

const scriptPath = new URL('../../src/main.js', import.meta.url);

describe('SpaceWord - comportement utilisateur', () => {
  let context;

  beforeEach(() => {
    context = loadGameScript(scriptPath, createSpaceWordStubs());
  });

  test('beginGame démarre la partie et masque le panneau retry', () => {
    context.beginGame();
    expect(vm.runInContext('isGameBegins', context)).toBe(true);
    expect(context.document.getElementById('retry').style.visibility).toBe('hidden');
  });

  test('init configure le canvas et branche la saisie clavier', () => {
    context.init();
    expect(context.document.getElementById('canvas').width).toBe(800);
    expect(context.document.getElementById('canvas').height).toBe(600);
    expect(context.logs.listeners.some(([type]) => type === 'keydown')).toBe(true);
    expect(context.logs.rafCount).toBeGreaterThan(0);
  });

  test('restartStateGame remet les variables de base à zéro', () => {
    vm.runInContext('secondsPassed = 3; oldTimeStamp = 10; words = ["abc"]', context);
    context.restartStateGame();
    expect(vm.runInContext('secondsPassed', context)).toBe(0);
    expect(vm.runInContext('oldTimeStamp', context)).toBe(0);
    expect(vm.runInContext('words', context)).toEqual([]);
  });
});