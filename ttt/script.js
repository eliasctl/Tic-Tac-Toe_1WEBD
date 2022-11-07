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
    console.log(etatJeu.cellules);
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

// 124 lignes
function haveWin(tabJeu) {
  // on regarde les 3 lignes
  // pour la croix
  if (
    // première ligne
    etatJeu.cellules[0][0] + etatJeu.cellules[0][1] + etatJeu.cellules[0][2] ===
    3
  ) {
    weHaveAWiner = true;
    alert("Les ❌ ont gagné !");
  } else if (
    // deuxième ligne
    etatJeu.cellules[1][0] + etatJeu.cellules[1][1] + etatJeu.cellules[1][2] ===
    3
  ) {
    weHaveAWiner = true;
    alert("Les ❌ ont gagné !");
  } else if (
    // troisième ligne
    etatJeu.cellules[2][0] + etatJeu.cellules[2][1] + etatJeu.cellules[2][2] ===
    3
  ) {
    weHaveAWiner = true;
    alert("Les ❌ ont gagné !");
  }
  // on regarde les 3 colonnes
  else if (
    // première colonne
    etatJeu.cellules[0][0] + etatJeu.cellules[1][0] + etatJeu.cellules[2][0] ===
    3
  ) {
    weHaveAWiner = true;
    alert("Les ❌ ont gagné !");
  } else if (
    // deuxième colonne
    etatJeu.cellules[0][1] + etatJeu.cellules[1][1] + etatJeu.cellules[2][1] ===
    3
  ) {
    weHaveAWiner = true;
    alert("Les ❌ ont gagné !");
  } else if (
    // troisième colonne
    etatJeu.cellules[0][2] + etatJeu.cellules[1][2] + etatJeu.cellules[2][2] ===
    3
  ) {
    weHaveAWiner = true;
    alert("Les ❌ ont gagné !");
  } else if (
    // première diagonale
    etatJeu.cellules[0][0] + etatJeu.cellules[1][1] + etatJeu.cellules[2][2] ===
    3
  ) {
    weHaveAWiner = true;
    alert("Les ❌ ont gagné !");
  } else if (
    // deuxième diagonale
    etatJeu.cellules[0][2] + etatJeu.cellules[1][1] + etatJeu.cellules[2][0] ===
    3
  ) {
    weHaveAWiner = true;
    alert("Les ❌ ont gagné !");
  }

  // on regarde les 3 lignes
  // pour la le rond
  if (
    // première ligne
    etatJeu.cellules[0][0] + etatJeu.cellules[0][1] + etatJeu.cellules[0][2] ===
    -3
  ) {
    weHaveAWiner = true;
    alert("Les ⭕️ ont gagné !");
  } else if (
    // deuxième ligne
    etatJeu.cellules[1][0] + etatJeu.cellules[1][1] + etatJeu.cellules[1][2] ===
    -3
  ) {
    weHaveAWiner = true;
    alert("Les ⭕️ ont gagné !");
  } else if (
    // troisième ligne
    etatJeu.cellules[2][0] + etatJeu.cellules[2][1] + etatJeu.cellules[2][2] ===
    -3
  ) {
    weHaveAWiner = true;
    alert("Les ⭕️ ont gagné !");
  }
  // on regarde les 3 colonnes
  else if (
    // première colonne
    etatJeu.cellules[0][0] + etatJeu.cellules[1][0] + etatJeu.cellules[2][0] ===
    -3
  ) {
    weHaveAWiner = true;
    alert("Les ⭕️ ont gagné !");
  } else if (
    // deuxième colonne
    etatJeu.cellules[0][1] + etatJeu.cellules[1][1] + etatJeu.cellules[2][1] ===
    -3
  ) {
    weHaveAWiner = true;
    alert("Les ⭕️ ont gagné !");
  } else if (
    // troisième colonne
    etatJeu.cellules[0][2] + etatJeu.cellules[1][2] + etatJeu.cellules[2][2] ===
    -3
  ) {
    weHaveAWiner = true;
    alert("Les ⭕️ ont gagné !");
  } else if (
    // première diagonale
    etatJeu.cellules[0][0] + etatJeu.cellules[1][1] + etatJeu.cellules[2][2] ===
    -3
  ) {
    weHaveAWiner = true;
    alert("Les ⭕️ ont gagné !");
  } else if (
    // deuxième diagonale
    etatJeu.cellules[0][2] + etatJeu.cellules[1][1] + etatJeu.cellules[2][0] ===
    -3
  ) {
    weHaveAWiner = true;
    alert("Les ⭕️ ont gagné !");
  }
}
