import { beforeEach, describe, expect, test } from 'vitest';
import { createSpaceWordStubs, loadGameScript } from '../helpers/load-game.mjs';

const scriptPath = new URL('../../games/SpaceWord/script.js', import.meta.url);

describe('SpaceWord - fonctions pures', () => {
  let context;

  beforeEach(() => {
    context = loadGameScript(scriptPath, createSpaceWordStubs());
  });

  test('getRandomInt respecte les bornes inclusives', () => {
    Object.defineProperty(context.Math, 'random', { value: () => 0, configurable: true, writable: true });
    expect(context.getRandomInt(5, 9)).toBe(5);
    Object.defineProperty(context.Math, 'random', { value: () => 0.999999, configurable: true, writable: true });
    expect(context.getRandomInt(5, 9)).toBe(9);
  });

  test('rectIntersect renvoie false si les rectangles sont séparés', () => {
    expect(context.rectIntersect(1, 1, 2, 1, 4, 1, 1, 2)).toBe(false);
  });

  test('rectIntersect renvoie true si les rectangles se touchent', () => {
    expect(context.rectIntersect(1, 1, 5, 2, 4, 1, 1, 2)).toBe(true);
  });

  test('circleIntersect renvoie false quand les cercles ne se touchent pas', () => {
    expect(context.circleIntersect(3, 2, 1, 6, 1, 1.5)).toBe(false);
  });

  test('circleIntersect renvoie true quand les cercles se chevauchent', () => {
    expect(context.circleIntersect(3, 2, 1, 3, -2, 4)).toBe(true);
  });

  test('timeToString formate les millisecondes', () => {
    expect(context.timeToString(123456789)).toBe('17:36:78');
  });

  test('timeToString formate zéro proprement', () => {
    expect(context.timeToString(0)).toBe('00:00:00');
  });

  test('timeToString garde NaN pour une entrée invalide', () => {
    expect(context.timeToString('toto')).toBe('NaN:NaN:NaN');
  });

  test('getRandomInt avec min égal à max retourne toujours cette valeur', () => {
    expect(context.getRandomInt(42, 42)).toBe(42);
  });

  test('getRandomInt génère des valeurs dans l intervalle maximal', () => {
    let allInRange = true;
    for (let i = 0; i < 50; i++) {
      const val = context.getRandomInt(-42, 42);
      if (val < -42 || val > 42) allInRange = false;
    }
    expect(allInRange).toBe(true);
  });
});