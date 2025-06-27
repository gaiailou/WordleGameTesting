export const dictionnaire = new Set<string>([
  'pomme', 'poire', 'banan', 'salut', 'lusta', 'tulsa', 'xxxxx'
  // ajoute les mots que tu veux permettre
])

export function estMotValide(mot: string): boolean {
  return dictionnaire.has(mot.toLowerCase())
}
