export function evaluateBoard(boardState) {
    var winner = checkForWinner(boardState);
    if (winner !== 'none') {
        return winner;
    } 
    
    return winner;
}

function emptyCells(boardState) {
    let emptyCells = [];
    for (let row = 0; row < boardState.length; row++) {
        for (let col = 0; col < boardState[row].length; col++) {
            if (boardState[row][col] === '') {
                emptyCells.push([row, col]);
            }
        }
    }
    return emptyCells;
}


function checkForWinner(boardState) {
    //Check rows
    for (let row = 0; row < boardState.length; row++) {
        if (boardState[row][0] === boardState[row][1] && boardState[row][1] === boardState[row][2]) {
            if (boardState[row][0] === "X") { return "X"; }
            else if (boardState[row][0] === "O") { return "O"; }
        }
    }

    //Check cols
    for (let col = 0; col < boardState.length; col++) {
        if (boardState[0][col] === boardState[1][col] && boardState[1][col] === boardState[2][col]) {
            if (boardState[0][col] === "X") { return "X"; }
            else if (boardState[0][col] === "O") { return "O"; }
        }
    }

    //Check diagonals
    if (boardState[0][0] === boardState[1][1] && boardState[1][1] === boardState[2][2]) {
        if (boardState[0][0] === "X") { return "X"; }
        else if (boardState[0][0] === "O") { return "O"; }
    }
    if (boardState[0][2] === boardState[1][1] && boardState[1][1] === boardState[2][0]) {
        if (boardState[0][2] === "X") { return "X"; }
        else if (boardState[0][2] === "O") { return "O"; }
    }

    //Check if draw
    if(emptyCells(boardState).length === 0) return 'draw';

    return 'none';
}

export function aiMove(boardState, player, depth) {
    if(depth === 0) depth = 1; 
    var moves = minMax(boardState, player, depth, depth);
    //if more than one move are equally highly scored, randomize between them
    var allBestMoves = moves.movesList.filter(move => move.score === moves.bestMove.score);
    return allBestMoves[Math.floor(Math.random() * allBestMoves.length)];
}

function minMax(minmaxBoardState, player, totalDepth, currentDepth) {
    //First check if depth's been reached or if game is over
    let winner = checkForWinner(minmaxBoardState);
    
    if (currentDepth === 0) {
        return { score: 0 };
    } else if (winner !== "none"){
        if (winner === "draw") {
            return { score: 0 };
        } else if (winner === "O") {
            return { score: -10 };
        } else if (winner === "X") {
            return { score: 10 };
        } 
    }

    //Go through board recursively and score all possible moves (until depth is reached)
    var moves = [];
    for (let row = 0; row < minmaxBoardState.length; row++) {
        for (let col = 0; col < minmaxBoardState[row].length; col++) {
            if (minmaxBoardState[row][col] === '') {
                var move = {};

                move.index = `${row}${col}`;         //Store current move
                minmaxBoardState[row][col] = player;  //Make current move
                var result
                if (player === "X") {
                    result = minMax(minmaxBoardState, "O", totalDepth, currentDepth - 1);      //Evaluate current move
                    move.score = result.score;                             //Store moves score
                } else {
                    result = minMax(minmaxBoardState, "X", totalDepth, currentDepth - 1);      //Evaluate current move
                    move.score = result.score;                             //Store moves score
                }

                //Undo move
                minmaxBoardState[row][col] = '';

                //Store move in moves collection
                moves.push(move);
            }
        }
    }

    //Find the best move and return it
    var highestScoreMove;
    var bestScore;
    if (player === "X") {
        bestScore = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                highestScoreMove = i;
            }
        }
    } else {
        bestScore = Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                highestScoreMove = i;
            }
        }
    }

    
    if (currentDepth === totalDepth) {
        //return both best move and whole movelist to give the ability
        //to chooose between the best move or randomizing move among all 
        //equally good (best) moves.
        return { movesList: moves, bestMove: moves[highestScoreMove] };
    }
    else {
        return moves[highestScoreMove];
    }
}
