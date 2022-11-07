function haveWin(tabJeu) {
  // on regarde les 3 lignes
  // pour la croix
  if (
    // première ligne
    tabJeu[0][0] + etatJeu.cellules[0][1] + etatJeu.cellules[0][2] ===
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
