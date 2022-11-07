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

function haveWin() {
  // on regarde les 3 lignes
  // pour la croix
  // première ligne
  if (tabJeu[0][0] + tabJeu[0][1] + tabJeu[0][2] === 3) {
    weHaveAWiner = true;
    alert("Les ❌ ont gagné !");
  } else if (
    // deuxième ligne
    tabJeu[1][0] + tabJeu[1][1] + tabJeu[1][2] ===
    3
  ) {
    weHaveAWiner = true;
    alert("Les ❌ ont gagné !");
  } else if (
    // troisième ligne
    tabJeu[2][0] + tabJeu[2][1] + tabJeu[2][2] ===
    3
  ) {
    weHaveAWiner = true;
    alert("Les ❌ ont gagné !");
  }
  // on regarde les 3 colonnes
  else if (
    // première colonne
    tabJeu[0][0] + tabJeu[1][0] + tabJeu[2][0] ===
    3
  ) {
    weHaveAWiner = true;
    alert("Les ❌ ont gagné !");
  } else if (
    // deuxième colonne
    tabJeu[0][1] + tabJeu[1][1] + tabJeu[2][1] ===
    3
  ) {
    weHaveAWiner = true;
    alert("Les ❌ ont gagné !");
  } else if (
    // troisième colonne
    tabJeu[0][2] + tabJeu[1][2] + tabJeu[2][2] ===
    3
  ) {
    weHaveAWiner = true;
    alert("Les ❌ ont gagné !");
  } else if (
    // première diagonale
    tabJeu[0][0] + tabJeu[1][1] + tabJeu[2][2] ===
    3
  ) {
    weHaveAWiner = true;
    alert("Les ❌ ont gagné !");
  } else if (
    // deuxième diagonale
    tabJeu[0][2] + tabJeu[1][1] + tabJeu[2][0] ===
    3
  ) {
    weHaveAWiner = true;
    alert("Les ❌ ont gagné !");
  }

  // on regarde les 3 lignes
  // pour la le rond
  if (
    // première ligne
    tabJeu[0][0] + tabJeu[0][1] + tabJeu[0][2] ===
    -3
  ) {
    weHaveAWiner = true;
    alert("Les ⭕️ ont gagné !");
  } else if (
    // deuxième ligne
    tabJeu[1][0] + tabJeu[1][1] + tabJeu[1][2] ===
    -3
  ) {
    weHaveAWiner = true;
    alert("Les ⭕️ ont gagné !");
  } else if (
    // troisième ligne
    tabJeu[2][0] + tabJeu[2][1] + tabJeu[2][2] ===
    -3
  ) {
    weHaveAWiner = true;
    alert("Les ⭕️ ont gagné !");
  }
  // on regarde les 3 colonnes
  else if (
    // première colonne
    tabJeu[0][0] + tabJeu[1][0] + tabJeu[2][0] ===
    -3
  ) {
    weHaveAWiner = true;
    alert("Les ⭕️ ont gagné !");
  } else if (
    // deuxième colonne
    tabJeu[0][1] + tabJeu[1][1] + tabJeu[2][1] ===
    -3
  ) {
    weHaveAWiner = true;
    alert("Les ⭕️ ont gagné !");
  } else if (
    // troisième colonne
    tabJeu[0][2] + tabJeu[1][2] + tabJeu[2][2] ===
    -3
  ) {
    weHaveAWiner = true;
    alert("Les ⭕️ ont gagné !");
  } else if (
    // première diagonale
    tabJeu[0][0] + tabJeu[1][1] + tabJeu[2][2] ===
    -3
  ) {
    weHaveAWiner = true;
    alert("Les ⭕️ ont gagné !");
  } else if (
    // deuxième diagonale
    tabJeu[0][2] + tabJeu[1][1] + tabJeu[2][0] ===
    -3
  ) {
    weHaveAWiner = true;
    alert("Les ⭕️ ont gagné !");
  }
}
