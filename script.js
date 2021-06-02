  var player = "✘";
  var moves = 9;
  var winner = false;

function game(id) {
  if (winner == false) {
    --moves;
    document.getElementById(id).innerHTML = player;
    var disableBox = document.getElementById(id);
    disableBox.onclick = "";
    checkLines();
  }
}

function checkLines() {
  let firstLineX = 3, secondLineX = 3, thirdLineX = 3;
  let firstLine0 = 3, secondLine0 = 3, thirdLine0 = 3;
  const firstLine = document.querySelectorAll("#square_1, #square_2, #square_3");
  const secondLine = document.querySelectorAll("#square_4, #square_5, #square_6");
  const thirdLine = document.querySelectorAll("#square_7, #square_8, #square_9");
  for (var i = 0; i < 3; i++) {
    if (firstLine[i].innerHTML == "✘") {
      --firstLineX;
    }
    if (secondLine[i].innerHTML == "✘") {
      --secondLineX;
    }
    if (thirdLine[i].innerHTML == "✘") {
      --thirdLineX;
    }
    if (firstLine[i].innerHTML == "0") {
      --firstLine0;
    }
    if (secondLine[i].innerHTML == "0") {
      --secondLine0;
    }
    if (thirdLine[i].innerHTML == "0") {
      --thirdLine0;
    }
  }
  if (firstLineX == 0 || secondLineX == 0 || thirdLineX == 0 || firstLine0 == 0 || secondLine0 == 0 || thirdLine0 == 0) {
    winner = true;
    Message();
    return;
  }
  checkRows();
}

function checkRows() {
  let firstRowX = 3, secondRowX = 3, thirdRowX = 3;
  let firstRow0 = 3, secondRow0 = 3, thirdRow0 = 3;
  const firstRow = document.querySelectorAll("#square_1, #square_4, #square_7");
  const secondRow = document.querySelectorAll("#square_2, #square_5, #square_8");
  const thirdRow = document.querySelectorAll("#square_3, #square_6, #square_9");
  for (var i = 0; i < 3; i++) {
    if (firstRow[i].innerHTML == "✘") {
      --firstRowX;
    }
    if (secondRow[i].innerHTML == "✘") {
      --secondRowX;
    }
    if (thirdRow[i].innerHTML == "✘") {
      --thirdRowX;
    }
    if (firstRow[i].innerHTML == "0") {
      --firstRow0;
    }
    if (secondRow[i].innerHTML == "0") {
      --secondRow0;
    }
    if (thirdRow[i].innerHTML == "0") {
      --thirdRow0;
    }
  }
  if (firstRowX == 0 || secondRowX == 0 || thirdRowX == 0 || firstRow0 == 0 || secondRow0 == 0 || thirdRow0 == 0) {
    winner = true;
    Message();
    return;
  }
  checkDiagonals();
}

function checkDiagonals() {
  let firstDiagonalX = 3, secondDiagonalX = 3;
  let firstDiagonal0 = 3, secondDiagonal0 = 3;
  const firstDiagonal = document.querySelectorAll("#square_1, #square_5, #square_9");
  const secondDiagonal = document.querySelectorAll("#square_3, #square_5, #square_7");
  for (var i = 0; i < 3; i++) {
    if (firstDiagonal[i].innerHTML == "✘") {
      --firstDiagonalX;
    }
    if (secondDiagonal[i].innerHTML == "✘") {
      --secondDiagonalX;
    }
    if (firstDiagonal[i].innerHTML == "0") {
      --firstDiagonal0;
    }
    if (secondDiagonal[i].innerHTML == "0") {
      --secondDiagonal0;
    }
  }
  if (firstDiagonalX == 0 || secondDiagonalX == 0 || firstDiagonal0 == 0 || secondDiagonal0 == 0) {
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
