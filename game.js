////////////////first function///////////////
const game = {
    board: 
    [
        ["_", "_", "_"],
        ["X", "X", "X"],
        ["_", "_", "_"]
    ]
};

function addPlay(game, player, line, column) {

    if (game.board[line][column] === "_") {
        game.board[line][column] = player;
    }
    return game;
}
console.log(addPlay(game, "X", 1, 2));

///////////////second function///////////////

function getPossibleMoves(game) {
    const possibleMoves = [];

for (let i = 0; i< game.board.length; i++) {
  
    for (let j= 0; j< game.board[i].length; j++) {
        if (game.board[i][j] === "_") {
           possibleMoves.push( {line: i,column: j});
}
}
}
return possibleMoves;
}
const availableMoves = getPossibleMoves(game);
console.log(availableMoves);

///////////////third function///////////////

function checkWinner(game) {
    for (i = 0; i < game.board.length; i++) {
    if (game.board[i][0] == game.board[i][1] && game.board[i][1] == game.board[i][2]) {
            switch (game.board[i][0]) {
                case "X": {
                    return "X"
                }
                case "O": {
                    return "O"
                }
                default: {
                    break; }
                }
            }
        }
    for (i = 0; i < game.board.length; i ++) {
    if (game.board[0][i] == game.board[1][i] && game.board[1][i] == game.board[2][i]) {
        switch (game.board[0][i]) {
            case "X": {
                return "X"
            }
            case "O": {
                return "O"
            }
            default: {
                break;
            }
        }
    }
}
    if (game.board[0][0] == game.board[1][1] && game.board[1][1] == game.board[2][2]) {
        switch (game.board[0][0]) {
            case "X": {
                return "X"
            }
            case "O": {
                return "O"
            }default: {
                break;
            }
        }
    }
    if (game.board[2][0] == game.board[1][1] && game.board[1][1] == game.board[0][2]) {
        switch (game.board[0][2]) {
            case "X": {
                return "X"
            }
            case "O": {
                return "O"
            }
            default: {
                break; }
            }
        }
    };
console.log(checkWinner(game));

//////////////fourth function//////////////
function checkEndOfGame(game) {
    
    if (checkWinner(game)) {
        return true;
    }   else if (getPossibleMoves(game).length === 0) {
            return true;
        }  else {
        return false;
    }
}
console.log(checkEndOfGame(game));