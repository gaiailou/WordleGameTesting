# 🟩 Wordle Game Testing – Evaluation Test (Ynov)

Projet personnel réalisé dans le cadre d’un TP d’évaluation sur la mise en place de tests unitaires.  
L’objectif : coder une version simplifiée du jeu Wordle avec une couverture de tests d’au moins 70 %.

---

## ✅ Fonctionnalités implémentées

- Vérification d’un mot (5 lettres alphabétiques uniquement)
- Logique de comparaison entre mot secret et mot proposé :
  - `correct` → lettre bien placée
  - `present` → lettre présente mais mal placée
  - `absent` → lettre non présente
- Gestion du déroulement d’une partie (6 essais max, victoire ou échec)
- Tests unitaires avec **Vitest**
- Rapport de couverture automatique

---

## 🧠 Choix techniques

### TypeScript
Utilisé pour sécuriser le typage des fonctions (notamment les statuts de lettre `LetterStatus`).

### Vitest
Choisi pour sa compatibilité avec Vite, sa simplicité et sa rapidité. Permet une exécution des tests efficace, avec couverture.

### Architecture modulaire
Le projet est découpé en modules pour mieux isoler les responsabilités :

- `wordleGame.ts` : logique de vérification (`checkGuess`)
- `validation.ts` : validation des mots saisis
- `game.ts` : gestion du déroulement d’une partie

## Run les tests
```bash
pnpm install
pnpm run vitest
```
