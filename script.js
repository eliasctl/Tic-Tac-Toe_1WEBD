const etatJeu = {
  cellules: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  // Deux joueurs possibles : "❌" (1) ou "⭕️" (2)
  joueur: "❌",
};

// pour l'affichage du joueur en cours
const instructions = document.getElementById("instruction");

// on recupère toutes les div
const cell = document.querySelectorAll(".cellule");

// tableaux pour le stockage des cells
let cells = [];

// variable pour desactiver la saisie
let weHaveAWiner = false;

// variable conteur de tour au cas ou il y ait une égalité
let conteurTour = 0;

// Savoir si le bot à bien jouer
let botCaseBonne = false;

// pour chaque cellule
for (let i = 0; i <= 8; i++) {
  let cellId = [];
  // on stoque dans cellId
  cellId = cell[i].id.split("-");

  // on regarde si l'utilisateur clique dessus
  cell[i].addEventListener("click", function () {
    // on apele la function jouer quand on clique sur une case
    jouer(cell[i], cellId[1], cellId[2]);
    // on apelle la function haveWin pour verifier si un joueur a gagné
    haveWin(etatJeu.cellules);
    instructions.textContent = `Au tour du joueur : ${etatJeu.joueur}`;
  });
}

// procédure qui modifie le tableau et qui modifie l'etat de jeux
function jouer(cell, index1, index2) {
  if (cell.textContent === "" && !weHaveAWiner) {
    if (etatJeu.joueur === "❌") {
      cell.textContent = "❌";
      etatJeu.cellules[index1][index2] = 1;
      etatJeu.joueur = "⭕️";
      calculTour();
    } else {
      cell.textContent = "⭕️";
      etatJeu.cellules[index1][index2] = -1;
      etatJeu.joueur = "❌";
      calculTour();
    }
    botCaseBonne = true;
  }
}
jouer();
function haveWin(tabJeu) {
  // debut
  for (let i = 0; i <= 2; i++) {
    // les 3 lignes
    whosWin(tabJeu[i][0] + tabJeu[i][1] + tabJeu[i][2]);
    // les 3 colones
    whosWin(tabJeu[0][i] + tabJeu[1][i] + tabJeu[2][i]);
  }
  // les 2 diagonale
  whosWin(tabJeu[0][0] + tabJeu[1][1] + tabJeu[2][2]);
  whosWin(tabJeu[0][2] + tabJeu[1][1] + tabJeu[2][0]);
}

function playRandom() {
  botCaseBonne = false;
  // on regarde les cases dans lesquels on peux jouer

  while (botCaseBonne === false) {
    // let colone = getRandom();
    // let ligne = getRandom();
    // let jeuDuBot = "cell-" + colone + "-" + ligne;
    // console.log("j'ai jouer" + colone + "-" + ligne);
    // jouer(cell, colone, ligne);
  }
}

function getRandom() {
  return Math.floor(Math.random() * 3);
}

function whosWin(sum) {
  if (sum === 3) {
    weHaveAWiner = true;
    etatJeuCroixWin();
  } else if (sum === -3) {
    weHaveAWiner = true;
    etatJeuRondWin();
  }
}

function etatJeuRondWin() {
  document.getElementById("etat").textContent =
    "Les ⭕️ ont gagné ! Pour rejouer cliquez sur “Effacer“ en bas !";
}

function etatJeuCroixWin() {
  document.getElementById("etat").textContent =
    "Les ❌ ont gagné ! Pour rejouer cliquez sur “Effacer“ en bas !";
}

function calculTour() {
  conteurTour++;
  if (conteurTour === 9) {
    document.getElementById("etat").textContent =
      "Aucun jeur n'as gagner, c'est une égalité ! 🙈 Pour rejouer cliquez sur “Effacer“ en bas !";
  }
}
