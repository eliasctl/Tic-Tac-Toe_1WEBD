// fonction qui joue de manière random
function playRandom(grilleDeJeu, cell) {
  // on regarde les cases dans lesquels on peux jouer
  let colone = getRandom();
  let ligne = getRandom();
  let count = 0;

  while (count === 0) {
    if (grilleDeJeu[colone][ligne] === null) {
      cell.textContent = "⭕️";
      count = 1;
    } else {
      let colone = getRandom();
      let ligne = getRandom();
    }
  }
}

function getRandom() {
  return Math.floor(Math.random() * 3);
}
