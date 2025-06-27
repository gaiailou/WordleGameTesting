export const dictionnaire = new Set<string>([
  'pomme', 'poire', 'banan', 'cocos', 'ceris', 'orang', 
  'frais', 'mangue', 'melon','xxxxx',
])

export function estMotValide(mot: string): boolean {
  return dictionnaire.has(mot.toLowerCase())
}

export function tirerMotAleatoire(): string {
  const mots = Array.from(dictionnaire)
  const index = Math.floor(Math.random() * mots.length)
  return mots[index]
}

