import { describe, test, expect, beforeEach } from 'vitest'
import { WordleGame } from './game'
import { stats } from './stats'

describe('Unité : WordleGame', () => {

  beforeEach(() => {
    // Réinitialiser les stats avant chaque test pour éviter effet de bord
    stats.partiesJouées = 0
    stats.partiesGagnées = 0
    stats.sérieEnCours = 0
    stats.meilleureSérie = 0
    stats.totalEssais = 0
  })

  test('détecte une victoire immédiate au premier essai', () => {
    const partie = new WordleGame('pomme')
    const resultat = partie.faireEssai('pomme')

    expect(resultat).toEqual(['correct', 'correct', 'correct', 'correct', 'correct'])
    expect(partie.aGagné).toBe(true)
    expect(partie.estTerminé).toBe(true)

    // Vérifier que le comportement attendu sur les stats s’est produit
    expect(stats.partiesJouées).toBe(1)
    expect(stats.partiesGagnées).toBe(1)
  })

  test('détecte la fin après 6 essais ratés', () => {
    const partie = new WordleGame('pomme')
    for (let i = 0; i < 6; i++) {
      partie.faireEssai('xxxxx')
    }

    expect(partie.estTerminé).toBe(true)
    expect(partie.aGagné).toBe(false)
    expect(partie.getEssaisRestants()).toBe(0)

    // Ici on teste que la partie a bien été comptabilisée comme perdue
    expect(stats.partiesJouées).toBe(1)
    expect(stats.partiesGagnées).toBe(0)
  })

  test('refuse de jouer après la fin de la partie', () => {
    const partie = new WordleGame('pomme')
    for (let i = 0; i < 6; i++) {
      partie.faireEssai('xxxxx')
    }

    expect(() => partie.faireEssai('pomme')).toThrow('La partie est terminée')
  })
})
