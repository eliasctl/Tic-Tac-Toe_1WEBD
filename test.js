function haveWin(tabJeu) {
  // variables
  let sum = 0;

  // debut
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      sum = sum + etatJeu.cellules[2][0];
    }
    if (sum === playerNumber) {
      weHaveAWiner = true;
      etatJeuCroixWin();
    }
  }
}
