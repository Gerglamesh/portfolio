import React, { useContext } from "react";
import { TicTacToeContext } from "./GameManager";

export default function ScoreBoard() {
  const context = useContext(TicTacToeContext);

  return (
    <div id="player-setup" className="game-section">
      <div className="option-row">
        <p>x: </p>
        <select 
          id="player1-select" 
          className="droplist player-select"
          defaultValue={context.playerX} 
          onChange={(e) => {context.setPlayerX(e.target.value)}}
        >
          <option id="human-opn">human</option>
          <option id="AI-opn">ai</option>
        </select>
      </div>
      <div className="option-row">
        <p>o: </p>
        <select 
          id="player2-select" 
          className="droplist player-select"
          defaultValue={context.playerO} 
          onChange={(e) => {context.setPlayerO(e.target.value)}}
        >
          <option id="human-opn">human</option>
          <option id="AI-opn">ai</option>
        </select>
      </div>
      <div id="slider-container">
        <input 
          type="range" 
          min={1} 
          max={9} 
          id="difficulty-slider" 
          defaultValue={context.difficulty}
          onChange={(e) => context.setDifficulty(Number(e.target.value))}
        />
        {getDifficultyDisplay(context.difficulty)}
      </div>
    </div>
  );
}

const getDifficultyDisplay = (level) => {
  if (level <= 2) {
    return (
    <>
      <p style={{color: "white"}}>Difficulty: {level}</p>
      <img src="images/TicTacToeImages/Baby.png" id="difficulty-image" alt="ai difficulty level baby" />
    </>);
  } else if (level >= 3 && level <= 4) {
    return (
      <>
        <p style={{color: "yellow"}}>Difficulty: {level}</p>
        <img src="images/TicTacToeImages/Normal.png" id="difficulty-image" alt="ai difficulty level baby" />
      </>);
  } else if (level >= 5 && level <= 6) {
    return (
      <>
        <p style={{color: "orange"}}>Difficulty: {level}</p>
        <img src="images/TicTacToeImages/Hard.png" id="difficulty-image" alt="ai difficulty level baby" />
      </>);
  } else {
    return (
      <>
        <p style={{color: "red"}}>Difficulty: {level}</p>
        <img src="images/TicTacToeImages/Insane.png" id="difficulty-image" alt="ai difficulty level baby" />
      </>);
  }
}
