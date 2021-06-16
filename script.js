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
  for (var i = 1; i <= 7; i+= 3) {
    if (document.getElementById(i).innerHTML == "✘" && document.getElementById(i + 1).innerHTML == "✘" && document.getElementById(i + 2).innerHTML == "✘") {
      winner = true;
      Message();
      return;
    }
    if (document.getElementById(i).innerHTML == "0" && document.getElementById(i + 1).innerHTML == "0" && document.getElementById(i + 2).innerHTML == "0") {
      winner = true;
      Message();
      return;
    }
  }
  checkRows();
}

function checkRows() {
  for (var i = 1; i <= 3; ++i) {
    if (document.getElementById(i).innerHTML == "✘" && document.getElementById(i + 3).innerHTML == "✘" && document.getElementById(i + 6).innerHTML == "✘") {
      winner = true;
      Message();
      return;
    }
    if (document.getElementById(i).innerHTML == "0" && document.getElementById(i + 3).innerHTML == "0" && document.getElementById(i + 6).innerHTML == "0") {
      winner = true;
      Message();
      return;
    }
  }
  checkDiagonals();
}

function checkDiagonals() {
  if (document.getElementById(1).innerHTML == "✘" && document.getElementById(5).innerHTML == "✘" && document.getElementById(9).innerHTML == "✘" ||
      document.getElementById(3).innerHTML == "✘" && document.getElementById(5).innerHTML == "✘" && document.getElementById(7).innerHTML == "✘") {
    winner = true;
    Message();
    return;
  }
  if (document.getElementById(1).innerHTML == "0" && document.getElementById(5).innerHTML == "0" && document.getElementById(9).innerHTML == "0" ||
      document.getElementById(3).innerHTML == "0" && document.getElementById(5).innerHTML == "0" && document.getElementById(7).innerHTML == "0") {
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
