export type LetterStatus = 'correct' | 'present' | 'absent'

export function checkGuess(solution: string, tentative: string): LetterStatus[] {
  if (solution.length !== tentative.length) {
    throw new Error("Les deux mots doivent avoir la même longueur.")
  }

  const resultat: LetterStatus[] = Array(solution.length).fill('absent')
  const lettresRestantes: Record<string, number> = {}

  // Étape 1 : marquer les 'correct' et compter les lettres restantes de la solution
  for (let i = 0; i < solution.length; i++) {
    const lettreSolution = solution[i]
    const lettreTentative = tentative[i]

    if (lettreTentative === lettreSolution) {
      resultat[i] = 'correct'
    } else {
      lettresRestantes[lettreSolution] = (lettresRestantes[lettreSolution] || 0) + 1
    }
  }

  // Étape 2 : marquer les 'present' si la lettre restante existe encore
  for (let i = 0; i < solution.length; i++) {
    const lettreTentative = tentative[i]

    if (resultat[i] === 'correct') continue

    if (lettresRestantes[lettreTentative]) {
      resultat[i] = 'present'
      lettresRestantes[lettreTentative]--
    }
  }

  return resultat
}
