var table = [] , moves = 9, player = "✘";
for(var i = 1; i <= 3; i++) {
    table[i] = [];
    for(var j = 1; j <= 3; j++) {
        table[i][j] = i * 10 +  j;
    }
}

function getCellPosition(id) {
  document.getElementById(id).innerHTML = player;
  for (var i = 1; i <= 3; ++i) {
    for (var j = 1; j <= 3; ++j) {
      if (table[i][j] == id) {
        table[i][j] = player;
      }
    }
  }
  let disableBox = document.getElementById(id);
  disableBox.onclick = "";
  --moves;
  checkDiagonals();
}

function checkDiagonals() {
  //check main diagonal
  let winner = true;
  for (var i = 1; i <= 3; ++i) {
    if (table[i][i] != player) {
      winner = false;
    }
  }
  //display who wins
  if (winner) {
    showStatus(winner);
    return;
  }
    //check secondary diagonal
  winner = true;
  for (var i = 1; i <= 3; ++i) {
    for (var j = 3; j >= 1; --j) {
      if (table[i][j] != player) {
        winner = false;
      }
      ++i;
    }
  }
  if (winner) {
    showStatus(winner);
    return;
  }
  checkRowsColumns();
}


function checkRowsColumns() {
  let winner;
  for (var i = 1; i <= 3; ++i) {
    //check rows
    winner = true;
    for (var j = 1; j <= 3; ++j) {
      if (table[i][j] != player) {
        winner = false;
      }
    }
    //Displat who wins
    if (winner) {
      showStatus(winner);
      return;
    }
    //check Columns
    winner = true;
    for (var j = 1; j <= 3; ++j) {
      if (table[j][i] != player) {
        winner = false;
      }
    }
    if (winner) {
      showStatus(winner);
      return;
    }
  }
  showStatus(winner);
}

function changePlayer() {
  if (player == "✘") {
    return player = "0";
  }
  return player = "✘";
}

function showStatus(winner) {
  if (winner) {
    document.getElementById("message").innerHTML = player + " wins";
    disableCells();
    restart();
    return;
  }
  if (moves == 0) {
    document.getElementById("message").innerHTML = "Draw";
    restart();
  } else {
    changePlayer()
    document.getElementById("message").innerHTML = player + " turns";
  }
}

function disableCells() {
  for (var i = 1; i <= 3; ++i) {
    for (var j = 1; j <= 3; ++j) {
      let disableCell = document.getElementById(i * 10 + j);
      disableCell.onclick = "";
    }
  }
}

function restart() {
  var restartBtn = document.createElement("button");
  restartBtn.type = ("button");
  restartBtn.innerHTML = "Restart";
  restartBtn.addEventListener("click", function() {
    location.reload();
  });
  document.getElementById("reset").appendChild(restartBtn);
  return;
}
