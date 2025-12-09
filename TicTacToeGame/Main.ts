let currPlayer = 'X'; // Player X always starts
let board = ['', '', '', '', '', '', '', '', '']; // 3x3 game board
let active = true;

function handlePlayerTurn(cell) {
  if (board[cell] !== '' || !active) {
      return;
  }
  board[cell] = currPlayer;
  checkForWinOrDraw();
  currPlayer = currPlayer === 'X' ? 'O' : 'X';
}

function cellClicked(cellEvent) {
  const clickedCell = cellEvent.target;
  const cell = parseInt(clickedCell.id.replace('cell-', '')) - 1;
  if (board[cell] !== '' || !active) {
      return;
  }
  handlePlayerTurn(cell);
  updateUI();
}

const cells = document.querySelectorAll('.cell');

cells.forEach(myCell => {
  myCell.addEventListener('click', cellClicked, false);
});

function updateUI() {
  for (let i = 0; i < cells.length; i++) {
      cells[i].innerText = board[i];
  }
}

function announceWinner(player) {
  const message = document.getElementById('gameMessage');
  message.innerText = `Player ${player} Wins!`;
}

function announceDraw() {
  const message = document.getElementById('gameMessage');
  message.innerText = 'Game Draw!';
}

const winScenario = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Left-to-right diagonal
  [2, 4, 6]  // Right-to-left diagonal
];

function checkForWinOrDraw() {
  let won = false;

  for (let i = 0; i < winScenario.length; i++) {
      const [a, b, c] = winScenario[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          won = true;
          break;
      }
  }

  if (won) {
      announceWinner(currPlayer);
      active = false;
      return;
  }

  let draw = !board.includes('');
  if (draw) {
      announceDraw();
      active = false;
      return;
  }
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  active = true;
  currPlayer = 'X';
  cells.forEach(cell => {
      cell.innerText = '';
  });
  document.getElementById('gameMessage').innerText = '';
}

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGame, false);
