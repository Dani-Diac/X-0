  var player = "✘";
  var moves = 9;
  var winner = false;

function game(id) {
  if (winner == false) {
    --moves;
    document.getElementById(id).innerHTML = player;
    var disableBox = document.getElementById(id);
    disableBox.onclick = "";
    checkFirstLine();
  }
}

function checkFirstLine() {
  const firstLine = document.querySelectorAll("#square_1, #square_2, #square_3");
  if (firstLine[0].innerHTML == "✘" && firstLine[1].innerHTML ==  "✘" && firstLine[2].innerHTML == "✘") {
    winner = true;
    Message();
    return;
  }
  if (firstLine[0].innerHTML == "0" && firstLine[1].innerHTML ==  "0" && firstLine[2].innerHTML == "0") {
    winner = true;
    Message();
    return;
  }
  checkSecondLine();
}

function checkSecondLine() {
  const secondLine = document.querySelectorAll("#square_4, #square_5, #square_6");
  if (secondLine[0].innerHTML == "✘" && secondLine[1].innerHTML == "✘" && secondLine[2].innerHTML == "✘") {
    winner = true;
    Message();
    return;
  }
  if (secondLine[0].innerHTML == "0" && secondLine[1].innerHTML == "0" && secondLine[2].innerHTML == "0") {
    winner = true;
    Message();
    return;
  }
  checkThirdLine();
}

function checkThirdLine() {
  const thirdLine = document.querySelectorAll("#square_7, #square_8, #square_9");
  if (thirdLine[0].innerHTML == "✘" && thirdLine[1].innerHTML == "✘" && thirdLine[2].innerHTML == "✘") {
    winner = true;
    Message();
    return;
  }
  if (thirdLine[0].innerHTML == "0" && thirdLine[1].innerHTML == "0" && thirdLine[2].innerHTML == "0") {
    winner = true;
    Message();
    return;
  }
  checkFirstRow();
}

function checkFirstRow() {
  const firstRow = document.querySelectorAll("#square_1, #square_4, #square_7");
  if (firstRow[0].innerHTML == "✘" && firstRow[1].innerHTML == "✘" && firstRow[2].innerHTML == "✘") {
    winner = true;
    Message();
    return;
  }
  if (firstRow[0].innerHTML == "0" && firstRow[1].innerHTML == "0" && firstRow[2].innerHTML == "0") {
    winner = true;
    Message();
    return;
  }
  checkSecondRow();
}

function checkSecondRow() {
  const secondRow = document.querySelectorAll("#square_2, #square_5, #square_8");
  if (secondRow[0].innerHTML == "✘" && secondRow[1].innerHTML == "✘" && secondRow[2].innerHTML == "✘") {
    winner = true;
    Message();
    return;
  }
  if (secondRow[0].innerHTML == "0" && secondRow[1].innerHTML == "0" && secondRow[2].innerHTML == "0") {
    winner = true;
    Message();
    return;
  }
  checkThirdRow();
}

function checkThirdRow() {
  const thirdRow = document.querySelectorAll("#square_3, #square_6, #square_9");
  if (thirdRow[0].innerHTML == "✘" && thirdRow[1].innerHTML == "✘" && thirdRow [2].innerHTML == "✘") {
    winner = true;
    Message();
    return;
  }
  if (thirdRow[0].innerHTML == "0" && thirdRow[1].innerHTML == "0" && thirdRow [2].innerHTML == "0") {
    winner = true;
    Message();
    return;
  }
  checkFirstDiagonal();
}

function checkFirstDiagonal() {
  const firstDiagonal = document.querySelectorAll("#square_1, #square_5, #square_9");
  if (firstDiagonal[0].innerHTML == "✘" && firstDiagonal[1].innerHTML == "✘" && firstDiagonal[2].innerHTML == "✘") {
    winner = true;
    Message();
    return;
  }
  if (firstDiagonal[0].innerHTML == "0" && firstDiagonal[1].innerHTML == "0" && firstDiagonal[2].innerHTML == "0") {
    winner = true;
    Message();
    return;
  }
  checkSecondDiagonal();
}

function checkSecondDiagonal() {
  const secondDiagonal = document.querySelectorAll("#square_3, #square_5, #square_7");
  if (secondDiagonal[0].innerHTML == "✘" && secondDiagonal[1].innerHTML == "✘" && secondDiagonal[2].innerHTML == "✘") {
    winner = true;
    Message();
    return;
  }
  if (secondDiagonal[0].innerHTML == "0" && secondDiagonal[1].innerHTML == "0" && secondDiagonal[2].innerHTML == "0") {
    winner = true;
    Message();
    return;
  }
  setPlayer();
}

function setPlayer() {
  if (player == "✘") {
    player = "0";
  } else if(player == "0"){
    player = "✘";
  }
  Message();
}

function Message() {
  if (winner == true) {
    document.getElementById("message").innerHTML = player + " wins";
    restart();
    return;
  }
  if (moves == 0) {
    document.getElementById("message").innerHTML = "Draw";
    restart();
  } else {
      document.getElementById("message").innerHTML = player + " turn";
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
