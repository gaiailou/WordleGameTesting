export function validerMot(mot: string): boolean {
  return /^[a-zA-Z]{5}$/.test(mot)
}
