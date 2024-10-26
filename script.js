const gameboard = (function () {
    let gameboardArray = Array(3).fill(null).map(() => Array(3).fill(null));
    return {gameboardArray};
})();

function createPlayer(symbol) {
    return {symbol};
}

const playGame = (function () {
    const playerO = createPlayer("O");
    const playerX = createPlayer("X");
    console.log(gameboard.gameboardArray);

})();

