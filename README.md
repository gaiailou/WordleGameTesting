# Wordle Game Testing – Evaluation Test (Ynov)

Projet personnel réalisé dans le cadre d’un TP d’évaluation sur la mise en place de tests unitaires.  
L’objectif : coder une version simplifiée du jeu Wordle avec une couverture de tests d’au moins 70 %.

---

## Fonctionnalités implémentées

- Vérification d’un mot (5 lettres alphabétiques uniquement)
- Logique de comparaison entre mot secret et mot proposé :
  - `correct` → lettre bien placée
  - `present` → lettre présente mais mal placée
  - `absent` → lettre non présente
- Gestion du déroulement d’une partie (6 essais max, victoire ou échec)
- Tests unitaires avec **Vitest**
- Rapport de couverture automatique

Ajout des fonctionnalités : "Intermediate Requirements (+2 points)"

---

## Choix techniques

### TypeScript
Utilisé pour sécuriser le typage des fonctions (notamment les statuts de lettre `LetterStatus`).

### Vitest
Choisi pour sa compatibilité avec Vite, sa simplicité et sa rapidité. Permet une exécution des tests efficace, avec couverture.

### Architecture modulaire
Le projet est découpé en modules pour mieux isoler les responsabilités :

| Fichier              | Rôle                                                         |
|----------------------|--------------------------------------------------------------|
| `wordleGame.ts`      | logique principale de vérification (`checkGuess`) `checkGuess`                              |
| `validation.ts`      | validation des mots saisis                            |
| `dictionnaire.ts`    | liste de mots autorisés                                      |
| `game.ts`            | gestion du déroulement d’une partie (tentatives, fin, état)                 |
| `stats.ts`           | statistiques globales de joueur                              |
| `*.test.ts`          | tests unitaires pour chaque module                           |

## Run les tests
```bash
pnpm install
pnpm run vitest
```

pour la couverture des tests
```bash
pnpm run coverage
```

pour afficher l'UI :
```bash
pnpm run dev
```
puis se rendre sur l'url donnée par **vite** (souvent http://localhost:5173/)
