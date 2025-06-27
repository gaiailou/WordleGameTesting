import { describe, test, expect } from 'vitest'
import { checkGuess } from './wordleGame'

describe('Unité : checkGuess', () => {
  test('doit renvoyer "correct" pour toutes les lettres si le mot deviné est identique au mot secret', () => {
    //assert
    const motSecret = 'salut'
    const tentative = 'salut'
    //act
    const resultat = checkGuess(motSecret, tentative)
    //assert
    expect(resultat).toEqual(['correct', 'correct', 'correct', 'correct', 'correct'])
  })

  test('doit identifier les lettres présentes mais mal placées', () => {
    // Préparation
    const motSecret = 'salut'
    const tentative = 'lusta'

    const resultat = checkGuess(motSecret, tentative)
    expect(resultat).toEqual(['present', 'present', 'present', 'present', 'present'])
  })

  test('doit signaler toutes les lettres comme absentes si aucune n’est dans le mot secret', () => {
    const motSecret = 'salut'
    const tentative = 'xxxxx'
    const resultat = checkGuess(motSecret, tentative)
    expect(resultat).toEqual(['absent', 'absent', 'absent', 'absent', 'absent'])
  })

  test('doit lever une erreur si les longueurs sont différentes', () => {

    const motSecret = 'salut'
    const tentative = 'salute'
    expect(() => checkGuess(motSecret, tentative)).toThrow()
  })
  test('doit gérer correctement les lettres en double', () => {
    const résultat = checkGuess('pelle', 'lente')
    expect(résultat).toEqual(['present', 'correct', 'absent', 'absent', 'correct'])
  })

})
