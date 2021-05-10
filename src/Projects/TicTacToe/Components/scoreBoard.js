import React, { useContext } from "react";
import { TicTacToeContext } from "./GameManager";

export default function ScoreBoard() {
  const context = useContext(TicTacToeContext);

  return (
    <div id="score-board" className="game-section">
      <div id="text-block">
        <p id="score-header">score</p>
        <p id="x-score">X: {context.score.X}</p>
        <p id="o-score">O: {context.score.O}</p>
      </div>
      <button type="button" id="reset-button" onClick={context.resetScore}>
        reset
      </button>
    </div>
  );
}
