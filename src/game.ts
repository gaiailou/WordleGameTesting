import { checkGuess, LetterStatus } from './wordleGame'

export class WordleGame {
  private motSecret: string
  private essaisRestants: number
  public estTerminé: boolean = false
  public aGagné: boolean = false

  constructor(motSecret: string, essaisMax: number = 6) {
    this.motSecret = motSecret
    this.essaisRestants = essaisMax
  }

  faireEssai(mot: string): LetterStatus[] {
    if (this.estTerminé) {
      throw new Error('La partie est terminée')
    }

    const resultat = checkGuess(this.motSecret, mot)
    this.essaisRestants--

    if (resultat.every(l => l === 'correct')) {
      this.estTerminé = true
      this.aGagné = true
    } else if (this.essaisRestants <= 0) {
      this.estTerminé = true
    }

    return resultat
  }

  getEssaisRestants(): number {
    return this.essaisRestants
  }
}
