import { describe, test, expect } from 'vitest'
import { validerMot } from './validation'

describe('Unité : validerMot', () => {
  test('accepte un mot de 5 lettres alphabétiques', () => {
    //assert
    const mot = 'pomme'
    //act
    const estValide = validerMot(mot)
    //assert
    expect(estValide).toBe(true)
    })

    test('refuse un mot avec des chiffres', () => {
        const mot = 'ab12c'
        const estValide = validerMot(mot)
        expect(estValide).toBe(false)
    })

    test('refuse un mot trop court', () => {
        const mot = 'oui'
        const estValide = validerMot(mot)
        expect(estValide).toBe(false)
    })

    test('refuse un mot trop long', () => {
        const mot = 'banane'
        const estValide = validerMot(mot)
        expect(estValide).toBe(false)
    })

    test('refuse un mot avec des caractères spéciaux', () => {
        const mot = 'élève'
        const estValide = validerMot(mot)
        expect(estValide).toBe(false) // uniquement a-z / A-Z
    })

    test('refuse un mot vide', () => {
        const mot = ''
        const estValide = validerMot(mot)
        expect(estValide).toBe(false)
    })
})
