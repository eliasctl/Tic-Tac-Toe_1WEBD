const etatJeu = {
  cellules: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  // Deux joueurs possibles : "❌" (1) ou "⭕️" (2)
  joueur: "❌",
};

// console.log(cellules);
// modify(4);
// console.log(cellules);

function modify(indice) {
  cellules[1][indice] = 1;
  console.log(cellules[1][indice]);
}

const instructions = dicument.getElementById("instruction");

const cell1 = document.getElementById("cell-0-0");
const cell2 = document.getElementById("cell-0-1");
const cell3 = document.getElementById("cell-0-2");
const cell4 = document.getElementById("cell-1-0");
const cell5 = document.getElementById("cell-1-1");
const cell6 = document.getElementById("cell-1-2");
const cell7 = document.getElementById("cell-2-0");
const cell8 = document.getElementById("cell-2-1");
const cell9 = document.getElementById("cell-2-2");

// on split la chaine de caractère pour en extraire les indices

// si click alors on apelle jouer
cell1.addEventListener("click", function () {
  jouer(cell1, 0, 0);
});

cell2.addEventListener("click", function () {
  jouer(cell2, 0, 1);
});

cell3.addEventListener("click", function () {
  jouer(cell3, 3);
});

cell4.addEventListener("click", function () {
  jouer(cell4, 4);
});

cell5.addEventListener("click", function () {
  jouer(cell5, 5);
});

cell6.addEventListener("click", function () {
  jouer(cell6, 6);
});

cell7.addEventListener("click", function () {
  jouer(cell7, 7);
});

cell8.addEventListener("click", function () {
  jouer(cell8, 8);
});

cell9.addEventListener("click", function () {
  jouer(cell9, 9);
});

function haveWin(tabJeu) {
  // on regarde les 3 lignes
  if (
    etatJeu.cellules[0][0] === etatJeu.cellules[0][1] &&
    etatJeu.cellules[0][0] != null
  ) {
    if (etatJeu.cellules[0][1] === etatJeu.cellules[0][2]) {
      weHaveAWiner = true;
      alert("vous avez gagné !!");
    }
  } else if (
    etatJeu.cellules[1][0] === etatJeu.cellules[1][1] &&
    etatJeu.cellules[1][0] != null
  ) {
    if (etatJeu.cellules[1][1] === etatJeu.cellules[1][2]) {
      weHaveAWiner = true;
      alert("vous avez gagné !!");
    }
  } else if (
    etatJeu.cellules[2][0] === etatJeu.cellules[2][1] &&
    etatJeu.cellules[2][0] != null
  ) {
    if (etatJeu.cellules[2][1] === etatJeu.cellules[2][2]) {
      weHaveAWiner = true;
      alert("vous avez gagné !!");
    }
  }

  // on regarde les 3 colones
  if (
    etatJeu.cellules[0][0] === etatJeu.cellules[1][0] &&
    etatJeu.cellules[0][0] != null
  ) {
    if (etatJeu.cellules[1][0] === etatJeu.cellules[2][0]) {
      weHaveAWiner = true;
      alert("vous avez gagné !!");
    }
  } else if (
    etatJeu.cellules[0][1] === etatJeu.cellules[1][1] &&
    etatJeu.cellules[0][1] != null
  ) {
    if (etatJeu.cellules[1][1] === etatJeu.cellules[2][1]) {
      weHaveAWiner = true;
      alert("vous avez gagné !!");
    }
  } else if (
    etatJeu.cellules[0][2] === etatJeu.cellules[1][2] &&
    etatJeu.cellules[0][2] != null
  ) {
    if (etatJeu.cellules[1][2] === etatJeu.cellules[2][2]) {
      weHaveAWiner = true;
      alert("vous avez gagné !!");
    }
  }

  // on regarde les deux diagonale
  if (
    etatJeu.cellules[0][0] === etatJeu.cellules[1][1] &&
    etatJeu.cellules[0][0] != null
  ) {
    if (etatJeu.cellules[1][1] === etatJeu.cellules[2][2]) {
      weHaveAWiner = true;
      alert("vous avez gagné !!");
    }
  } else if (
    etatJeu.cellules[0][2] === etatJeu.cellules[1][1] &&
    etatJeu.cellules[0][2] != null
  ) {
    if (etatJeu.cellules[1][1] === etatJeu.cellules[2][0]) {
      weHaveAWiner = true;
      alert("vous avez gagné !!");
    }
  }
}
