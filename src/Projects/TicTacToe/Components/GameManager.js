import React, {useState, createContext, useEffect } from "react";
import Options from "./optionsSection";
import GameBoard from "./GameBoard/gameBoard";
import ScoreBoard from "./scoreBoard";
import {evaluateBoard, aiMove} from "./gameLogic";

export const TicTacToeContext = createContext();

export default function GameManager() {
    const [gameBoardEnabled, setGameBoardEnabled] = useState(false);
    const [isGameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState('');
    const [playerTurn, setPlayerTurn] = useState("X");
    const [playerX, setPlayerX] = useState("human");
    const [playerO, setPlayerO] = useState("human");
    const [difficulty, setDifficulty] = useState(1);
    const [score, setScore] = useState({X: 0, O:0});
    const [boardState, setBoardState] = useState([
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
    ]);

    useEffect(() => {
        makeAiMoves();
    }, [playerTurn, winner]);

    const startNewGame = () => {
        resetGameBoard();
        setGameOver(false);
        setWinner("none");
        setPlayerTurn("X");
        setGameBoardEnabled(true);
        makeAiMoves();
    }

    const makeAiMoves = () => {
        if(!isGameOver){
            if (playerTurn === "X" && playerX ==="ai") {
                let move;
                move = aiMove(boardState, "X", difficulty);
                let rowCol = [...move.index.split("")];
                let newBoard = [...boardState];
                newBoard[rowCol[0]][rowCol[1]] = "X";
                updateBoardState(newBoard);
                toggleTurn();
            } else if (playerTurn === "O" && playerO ==="ai"){
                let move;
                move = aiMove(boardState, "O", difficulty);
                let rowCol = [...move.index.split("")];
                let newBoard = [...boardState];
                newBoard[rowCol[0]][rowCol[1]] = "O";
                updateBoardState(newBoard);
                toggleTurn();
            }
        }
    }

    const resetGameBoard = () => {
        setBoardState([
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]);
    }

    const resetScore = () => {
        setScore({X: 0, O: 0});
    }

    function toggleTurn() {
        if (playerTurn === "X") {     
            setPlayerTurn("O");       
            
        } else {
            setPlayerTurn("X");
        }
    }

    const updateBoardState = (newBoard) => {
        setBoardState(newBoard);
        let winner = evaluateBoard(boardState);
        if(winner !== 'none') handleGameOver(winner);
    }

    const handleGameOver = (winner) => {
        setGameBoardEnabled(false);
        setWinner(winner);
        let newScore = score;
        if(winner !== "draw") winner === "X" ? newScore.X++ : newScore.O++;
        setScore(newScore);
        setGameOver(true);
    }

    return (
        <TicTacToeContext.Provider value={{
            startNewGame,
            gameBoardEnabled,
            setGameOver,
            isGameOver,
            updateBoardState,
            boardState,
            winner,
            resetGameBoard,
            toggleTurn,
            playerTurn,
            setPlayerX,
            playerX,
            setPlayerO,
            playerO,
            setDifficulty,
            difficulty,
            updateScore: setScore,
            resetScore,
            score
            }}
        >
            <Options/>
            <GameBoard />
            <ScoreBoard/>
        </TicTacToeContext.Provider>
    )    
}

