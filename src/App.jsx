import { useState } from "react";
import confetti from "canvas-confetti"
import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { checkWinner, checkEndGame } from "./logic/board";
import  { Winner } from "./components/Winner";
import {guardarJuegoStorage, resetJuegoStorage } from "./logic/guardar";

function App() {
  const [board, setBoard] = useState(()=>{
  const boardFromStorage= window.localStorage.getItem('board')
  return boardFromStorage? JSON.parse(boardFromStorage):Array(9).fill(null)
  })

  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem("turn")
    return turnFromStorage ?? TURNS.X
  });

  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    resetJuegoStorage()
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    guardarJuegoStorage({
      board: newBoard,
      turn: newTurn
    })

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti()
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  };

  return (
    <main className="board">
      <h1>TaTeTi</h1>
      <button onClick={resetGame}>Resetear Juego</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelectd={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelectd={turn == TURNS.O}>{TURNS.O}</Square>
      </section>

      <Winner resetGame={resetGame} winner={winner}/>
    </main>
  );
}

export default App;
