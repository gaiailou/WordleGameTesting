import { describe, test, expect } from 'vitest'
import { WordleGame } from './game'

describe('Unité : WordleGame', () => {
  test('détecte une victoire immédiate au premier essai', () => {
    //assert
    const partie = new WordleGame('pomme')

    //act
    const resultat = partie.faireEssai('pomme')

    //assert
    expect(resultat).toEqual(['correct', 'correct', 'correct', 'correct', 'correct'])
    expect(partie.aGagné).toBe(true)
    expect(partie.estTerminé).toBe(true)
  })

  test('détecte la fin après 6 essais ratés', () => {
    const partie = new WordleGame('pomme')
    for (let i = 0; i < 6; i++) {
      partie.faireEssai('xxxxx')
    }

    expect(partie.estTerminé).toBe(true)
    expect(partie.aGagné).toBe(false)
    expect(partie.getEssaisRestants()).toBe(0)
  })

  test('refuse de jouer après la fin de la partie', () => {
    const partie = new WordleGame('pomme')
    for (let i = 0; i < 6; i++) {
      partie.faireEssai('xxxxx')
    }

    expect(() => partie.faireEssai('pomme')).toThrow('La partie est terminée')
  })
})
