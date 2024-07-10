import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'

import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board.js'
import { changeTurn } from './logic/newTurn.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { Turns } from './components/Turns.jsx'
import { TicTacToeBoard } from './components/TicTacToeBoard.jsx'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  // Estado para saber de quien es el turno
  const [turn, setTurn] = useState(TURNS.X)

  //Estado para saber quien es el ganador
  // null es que no hay ganador, false es que hay un empate.
  const [winner, setWinner] = useState(null)

  const handleClickResetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null )
  }

  const updateBoard = (index) => {
    // No actualizar el board si ya hay una valor en la posicion.
    // O hay un ganador.
    if (board[index] || winner ) return
    
    //Identifica el cuadrado clickeado y lo pinta con el valor del turno actual.
    // Crea un nuevo board que varia del anterior en 1 valor: el recientemente clickeado.
    const newBoard = [...board]
    newBoard[index] = turn // x u o
    //Pinta el nuevo board
    setBoard(newBoard)

    // Setea cual es el turno actual. Cambia el turno.
    const newTurn = changeTurn(turn)
    setTurn(newTurn)

    // revisa si hay ganador
    const newWinner = checkWinner(newBoard)
     // CUIDADO AQUI, no pasar el board del estado, sino el nuevo Board.
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  return (
   <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={handleClickResetGame}>Reset</button>
      <TicTacToeBoard 
        board={board}
        updateBoard={updateBoard}
      />
      <Turns turn={turn}/>
      <WinnerModal 
        winner={winner}
        resetGame={handleClickResetGame}
      />
   </main>

  )
}

export default App
