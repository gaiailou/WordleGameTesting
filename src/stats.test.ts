import { describe, test, expect } from 'vitest'
import { WordleGameStats } from './stats'

describe('Unité : WordleGameStats', () => {
  test('enregistre une victoire', () => {
    const stats = new WordleGameStats()
    stats.enregistrerPartie(true, 3)

    expect(stats.partiesJouées).toBe(1)
    expect(stats.partiesGagnées).toBe(1)
    expect(stats.sérieEnCours).toBe(1)
    expect(stats.meilleureSérie).toBe(1)
    expect(stats.moyenneEssais()).toBe(3)
  })

  test('réinitialise la série en cas d’échec', () => {
    const stats = new WordleGameStats()
    stats.enregistrerPartie(true, 4)
    stats.enregistrerPartie(false, 6)

    expect(stats.sérieEnCours).toBe(0)
    expect(stats.meilleureSérie).toBe(1)
  })
})
