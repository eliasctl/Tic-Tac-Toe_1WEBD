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

// pour chaque cellule

for (let i = 0; i <= 8; i++) {
  let cellId = [];
  // on stoque dans cellId
  cellId = cell[i].id.split("-");

  // on regarde si l'utilisateur clique dessus
  cell[i].addEventListener("click", function () {
    jouer(cell[i], cellId[1], cellId[2]);
    // console.log(etatJeu.cellules);
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
    } else {
      cell.textContent = "⭕️";
      etatJeu.cellules[index1][index2] = -1;
      etatJeu.joueur = "❌";
    }
  } else {
    alert("❌ vous le pouvez pas jouer dans cette case ❌");
    // cell.textContent = "";
    // etatJeu.cellules[index1][index2] = null;
  }
}

function haveWin(tabJeu) {
  // variables
  let sum = 0;

  // debut
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      sum = sum + etatJeu.cellules[2][0];
    }
    if (sum === 3) {
      weHaveAWiner = true;
      alert("Les ❌ ont gagné !");
    } else if (sum === -3) {
      weHaveAWiner = true;
      alert("Les ⭕️ ont gagné !");
    }
  }
}
