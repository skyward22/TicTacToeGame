const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";

function handleClick(e) {
  const cell = e.target;
  const currentValue = cell.innerHTML;

  if (currentValue === "X" || currentValue === "O") {
    return;
  }

  cell.innerHTML = currentPlayer;
  checkForWin();

  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function checkForWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
}
