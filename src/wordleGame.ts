export type LetterStatus = 'correct' | 'present' | 'absent';

export function checkGuess(secret: string, guess: string): LetterStatus[] {
  if (secret.length !== guess.length) {
    throw new Error('Secret and guess must have the same length');
  }

  const result: LetterStatus[] = Array(secret.length).fill('absent');
  const secretLetters = secret.split('');

  // Premier passage : lettres correctes
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      result[i] = 'correct';
      secretLetters[i] = ''; // Marquer comme utilisée
    }
  }

  // Deuxième passage : lettres présentes
  for (let i = 0; i < guess.length; i++) {
    if (result[i] === 'correct') continue;
    const index = secretLetters.indexOf(guess[i]);
    if (index !== -1) {
      result[i] = 'present';
      secretLetters[index] = ''; // Marquer comme utilisée
    }
  }

  return result;
}
