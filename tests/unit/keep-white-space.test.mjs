import { beforeEach, describe, expect, test } from 'vitest';
import vm from 'node:vm';
import { createKeepWhiteSpaceStubs, loadGameScript } from '../helpers/load-game.mjs';

const scriptPath = new URL('../../games/keep-white-space/main.js', import.meta.url);

describe('Keep White Space - classes utilitaires', () => {
  let context;

  beforeEach(() => {
    context = loadGameScript(scriptPath, createKeepWhiteSpaceStubs());
  });

  test('Vec construit un vecteur simple', () => {
    expect(vm.runInContext('new Vec(1, 2)', context)).toEqual({ x: 1, y: 2 });
  });

  test('Vec.add additionne les coordonnées', () => {
    expect(vm.runInContext('new Vec(1, 2).add(new Vec(3, 4))', context)).toEqual({ x: 4, y: 6 });
  });

  test('Vec.mul applique le bon facteur', () => {
    expect(vm.runInContext('new Vec(1, 2).mul(-2, 3)', context)).toEqual({ x: -2, y: 6 });
  });

  test('Vec.dot calcule le produit scalaire', () => {
    expect(vm.runInContext('new Vec(1, 2).dot(new Vec(2, 1))', context)).toBe(4);
  });

  test('Vec.cross calcule le produit vectoriel', () => {
    expect(vm.runInContext('new Vec(1, 2).cross(new Vec(3, 4).mul(-2, 3))', context)).toBe(24);
  });

  test('Vec.add avec un nombre retourne NaN', () => {
    expect(vm.runInContext('new Vec(1, 2).add(3)', context)).toEqual({ x: NaN, y: NaN });
  });

  test('GameStatus.getTimeStr formate les temps négatifs', () => {
    expect(vm.runInContext('(new GameStatus({})).getTimeStr(-123456)', context)).toBe('-3:-4.-4');
  });

  test('Vec.add et dot combinés calculent correctement', () => {
    const result = vm.runInContext(
      'new Vec(1, 2).dot(new Vec(1, 2).add(new Vec(new Vec(1, 2).dot(new Vec(2, 1)), new Vec(1, 2).cross(new Vec(3, 4).mul(-2, 3)))))',
      context
    );
    expect(result).toBe(57);
  });

  test('Vec.cross avec deux vecteurs identiques retourne zéro', () => {
    expect(vm.runInContext('new Vec(5, 5).cross(new Vec(5, 5))', context)).toBe(0);
  });

  test('Vec.mul avec zéro retourne un vecteur zéro', () => {
    expect(vm.runInContext('new Vec(5, 10).mul(0, 0)', context)).toEqual({ x: 0, y: 0 });
  });
});