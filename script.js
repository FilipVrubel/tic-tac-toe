function createGameboard() {
    let arr = Array(3).fill(null).map(() => Array(3).fill(null));
    return {arr};
}

function createPlayer(symbol) {
    return {symbol};
}

function isValidTurn(row, column, board) {
    return row >= 0 && row < 3 && column >= 0 && column < 3 && board.arr[row][column] === null;
}

function playTurn(player, row, column, board) {
    if (isValidTurn(row, column, board)) {
        board.arr[row][column] = player.symbol;
        if (checkWin(board, player, row, column)) {
            console.log(`Player ${player.symbol} has won!`);
        } else if (checkTie(board)) {
            console.log("Tie!");
        }
        return true;

    } else {
        console.log("Invalid coordinates");
        return false;
    }
}

function checkWin(board, player, row, column) {
    
    hasWonDiagonal = false;

    if (row == column) {
        hasWonDiagonal = checkMainDiagonal(board, player);
    }

    if (row + column == 2 && !hasWonDiagonal) {
        hasWonDiagonal = checkAntidiagonal(board, player);
    }
    
    return checkRow(board, player, row)
        || checkCol(board, player, column)
        || hasWonDiagonal;
}

function checkRow(board, player, row) {
    for (let col = 0; col < 3; col++) {
        if (board.arr[row][col] != player.symbol) {
            return false;
        }
    }

    return true;
}

function checkCol(board, player, col) {
    for (let row = 0; row < 3; row++) {
        if (board.arr[row][col] != player.symbol) {
            return false;
        }
    }

    return true;
}

function checkMainDiagonal(board, player) {
    for (let i = 0; i < 3; i++) {
        if (board.arr[i][i] != player.symbol) {
            return false;
        }
    }

    return true;
}

function checkAntidiagonal(board, player) {
    for (let i = 0; i < 3; i++) {
        if (board.arr[i][2 - i] != player.symbol) {
            return false;
        }
    }

    return true;
}

function checkTie(board) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board.arr[i][j] === null) {
                return false;
            }
        }
    }

    return true;
}

const playerO = createPlayer("O");
const playerX = createPlayer("X");

//let currentPlayer = playerO;
let board = createGameboard();

(function playGame() {

    /* let gameHasEnded = false;

    while (!gameHasEnded) {
        let wasPlayed = playTurn(currentPlayer, row, column, board, true);
    
        if (wasPlayed) {
            currentPlayer = currentPlayer == playerO ? playerX : playerO;
            
        } else {
            continue;
        }

    }  */

})();

