import { checkGuess, LetterStatus } from './wordleGame'
import { estMotValide } from './dictionnaire'
import { validerMot } from './validation'
import { stats } from './stats'  // Import de l'instance singleton stats

export class WordleGame {
  private motSecret: string
  private essaisRestants: number
  public estTerminé: boolean = false
  public aGagné: boolean = false
  private tentatives: number = 0

  constructor(motSecret: string, essaisMax: number = 6) {
    this.motSecret = motSecret
    this.essaisRestants = essaisMax
  }

  faireEssai(mot: string): LetterStatus[] {
    if (this.estTerminé) throw new Error('La partie est terminée')
    if (!validerMot(mot)) throw new Error('Mot invalide (format)')
    if (!estMotValide(mot)) throw new Error('Mot absent du dictionnaire')

    const resultat = checkGuess(this.motSecret, mot)
    this.essaisRestants--
    this.tentatives++

    if (resultat.every(l => l === 'correct')) {
      this.estTerminé = true
      this.aGagné = true
    } else if (this.essaisRestants <= 0) {
      this.estTerminé = true
    }

    if (this.estTerminé) {
      stats.enregistrerPartie(this.aGagné, this.tentatives)
    }

    return resultat
  }

  getEssaisRestants(): number {
    return this.essaisRestants
  }

  nbEssais(): number {
    return this.tentatives
  }

  estGagné(): boolean {
    return this.aGagné
  }
}
