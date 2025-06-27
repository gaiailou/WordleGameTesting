import { describe, test, expect } from 'vitest'
import { estMotValide } from './dictionnaire'

describe('Unité : estMotValide', () => {
  test('accepte un mot du dictionnaire', () => {
    expect(estMotValide('pomme')).toBe(true)
  })

  test('rejette un mot inconnu', () => {
    expect(estMotValide('azert')).toBe(false)
  })
})
