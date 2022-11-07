function haveWin(tabJeu) {
  // variables

  // debut
  for (let i = 0; i <= 2; i++) {
    // les 3 lignes
    whosWin(tabJeu[i][0] + tabJeu[i][1] + tabJeu[i][2]);
    // les 3 colones
    whosWin(tabJeu[0][i] + tabJeu[1][i] + tabJeu[2][i]);
    // les 2 diagonale
    whosWin(tabJeu[0][0] + tabJeu[1][1] + tabJeu[2][2]);
    whosWin(tabJeu[0][2] + tabJeu[1][1] + tabJeu[2][0]);
  }
}

function whosWin(sum) {
  if (sum === 3) {
    weHaveAWiner = true;
    etatJeuCroixWin();
  } else {
    weHaveAWiner = true;
    etatJeuRondWin();
  }
}
