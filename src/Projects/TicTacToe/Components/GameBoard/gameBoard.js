import React, { useContext } from "react";
import { TicTacToeContext } from "../GameManager";
import Cell from "./cell";

export default function GameBoard() { 
  const context = useContext(TicTacToeContext);
  
  function updateGameBoard(id) {
    let rowCol = [...id.split("")];
    let newBoard = [...context.boardState];
    newBoard[rowCol[0]][rowCol[1]] = context.playerTurn;
    context.updateBoardState(newBoard);
    context.toggleTurn();
  }

  function createCellGroup(rowNum) {    
    let newCells = [];
    for(let i = 0; i < 3; i++){
      newCells.push(
        <Cell 
          key={`${rowNum}${i}`} 
          id={`${rowNum}${i}`} 
          player={context.boardState[rowNum][i]} 
          onClickedCell={context.gameBoardEnabled ? (id) => updateGameBoard(id) : () => {}}
        />
      )
    }
    return newCells;
  }

  return (        
    <div id="board-container" className="game-section">
      {
        <div id="game-board">
          <div className="gameRow">
            {createCellGroup(0)}
          </div>
          <div className="gameRow">
            {createCellGroup(1)}
          </div>
          <div className="gameRow">
            {createCellGroup(2)}
          </div>
          {context.isGameOver ? 
            <div id="game-over-display">
              <p>
                {
                    context.winner !== "draw" ? `Player ${context.winner} won!` : "It's a draw!"
                }
              </p>
            </div>
            : null
          }
        </div>
      }

      <button type="button" id="start-button" onClick={context.startNewGame}>
        {!context.gameBoardEnabled ? "start new game" : "reset game"}
      </button>
    </div>
  );
}
