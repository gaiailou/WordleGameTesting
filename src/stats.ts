export class WordleGameStats {
  partiesJouées = 0
  partiesGagnées = 0
  sérieEnCours = 0
  meilleureSérie = 0
  totalEssais = 0

  enregistrerPartie(gagné: boolean, essais: number) {
    this.partiesJouées++
    this.totalEssais += essais

    if (gagné) {
      this.partiesGagnées++
      this.sérieEnCours++
      if (this.sérieEnCours > this.meilleureSérie) {
        this.meilleureSérie = this.sérieEnCours
      }
    } else {
      this.sérieEnCours = 0
    }
  }

  moyenneEssais(): number {
    return this.partiesGagnées === 0 ? 0 : this.totalEssais / this.partiesGagnées
  }
}

// Export d'une instance globale
export const stats = new WordleGameStats()
