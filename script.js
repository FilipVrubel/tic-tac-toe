function createGameboard() {
    let gameboardArray = Array(3).fill(null).map(() => Array(3).fill(null));
    return {gameboardArray};
}

function createPlayer(symbol) {
    return {symbol};
}

function isValidTurn(row, column, board) {
    return board[row][column] === null && row >= 0 && row < 3 && column >= 0 && column < 3;
}

function playTurn(player, row, column, board) {
    if (isValidTurn(row, column, board)) {
        board[row][column] = player.symbol;
        return true;
    } else {
        console.log("Invalid coordinates");
        return false;
    }
}

function checkWin(board, player, row, column) {
    let symbol = player.symbol;
    
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
    for (let col = 0; col < 3; i++) {
        if (board[row][col] != player.symbol) {
            return false;
        }
    }

    return true;
}

function checkCol(board, player, col) {
    for (let row = 0; row < 3; row++) {
        if (board[row][col] != player.symbol) {
            return false;
        }
    }

    return true;
}

function checkMainDiagonal(board, player) {
    for (let i = 0; i < 3; i++) {
        if (board[i][i] != player.symbol) {
            return false;
        }
    }

    return true;
}

function checkAntidiagonal(board, player) {
    for (let i = 0; i < 3; i++) {
        if (board[i][2 - i] != player.symbol) {
            return false;
        }
    }

    return true;
}

(function playGame() {
    const playerO = createPlayer("O");
    const playerX = createPlayer("X");
    
    let currentPlayer = playerO;
    let board = createGameboard();

    let gameHasEnded = false;

    while (!gameHasEnded) {
        let wasPlayed = playTurn(currentPlayer, row, column, board, true);
    
        if (wasPlayed) {
            currentPlayer = currentPlayer == playerO ? playerX : playerO;
        } else {
            continue;
        }

    }

})();

