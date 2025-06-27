import { WordleGame } from './game'
import { dictionnaire } from './dictionnaire'

const form = document.getElementById('form') as HTMLFormElement
const input = document.getElementById('guess-input') as HTMLInputElement
const feedback = document.getElementById('feedback') as HTMLDivElement

// Tirage aléatoire d’un mot secret dans le dictionnaire
const motSecret = Array.from(dictionnaire)[Math.floor(Math.random() * dictionnaire.size)]
const partie = new WordleGame(motSecret)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const mot = input.value.trim().toLowerCase()
  input.value = ''

  try {
    const resultat = partie.faireEssai(mot)

    const ligne = document.createElement('div')
    ligne.classList.add('essai')

    for (let i = 0; i < mot.length; i++) {
      const span = document.createElement('span')
      span.textContent = mot[i].toUpperCase()
      span.className = `lettre ${resultat[i]}`
      ligne.appendChild(span)
    }

    feedback.appendChild(ligne)

    if (partie.estGagné()) {
      const msg = document.createElement('p')
      msg.textContent = `🎉 Bravo, tu as gagné en ${partie.nbEssais()} essais !`
      feedback.appendChild(msg)
      input.disabled = true
    } else if (partie.getEssaisRestants() === 0) {
      const msg = document.createElement('p')
      msg.textContent = `💀 Perdu. Le mot était : ${motSecret.toUpperCase()}`
      feedback.appendChild(msg)
      input.disabled = true
    }

  } catch (err: any) {
    const msg = document.createElement('p')
    msg.textContent = err.message
    msg.style.color = 'red'
    feedback.appendChild(msg)
  }
})
