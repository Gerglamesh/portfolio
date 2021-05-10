import React from "react";
import GameManager from "./Components/GameManager"
import "./css/style.css"

export default function TicTacToe(){
return(
    <div id="game-area" style={{backgroundImage: `url(images/TicTacToeImages/blackboard.png)`}}>
        <GameManager/>
    </div>
)
}
