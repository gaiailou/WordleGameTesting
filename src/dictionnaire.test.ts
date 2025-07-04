import { describe, test, expect } from 'vitest'
import { estMotValide, tirerMotAleatoire, dictionnaire } from './dictionnaire'

describe('Unité : estMotValide', () => {
  test('accepte un mot du dictionnaire', () => {
    expect(estMotValide('pomme')).toBe(true)
  })

  test('rejette un mot inconnu', () => {
    expect(estMotValide('azert')).toBe(false)
  })

  test('tirer un mot aléatoire renvoie un mot du dictionnaire', () => {
    const mot = tirerMotAleatoire()
    expect(dictionnaire.has(mot)).toBe(true)
  })
})
