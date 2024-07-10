import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'

import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board.js'
import { changeTurn } from './logic/newTurn.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { Turns } from './components/Turns.jsx'
import { TicTacToeBoard } from './components/TicTacToeBoard.jsx'
import { saveGameToStorage, resetGameFromStorage } from './logic/storage/index.js'

function App() {
  console.log('Render.')

  const [board, setBoard] = useState(() => {
    console.log('Inicializa el estado. Solo ocurre una vez.')
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
    }
  )

  // Estado para saber de quien es el turno
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  //Estado para saber quien es el ganador
  // null es que no hay ganador, false es que hay un empate.
  const [winner, setWinner] = useState(null)

  const handleClickResetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null )

    resetGameFromStorage()
  }

  const updateBoard = (index) => {
    // 01 Valida que el casillero no este pintado y que no haya winner.
    if (board[index] || winner ) return
    

    // 02 Pinta el casillero clickeado
    const newBoard = [...board]
    newBoard[index] = turn // x u o
    setBoard(newBoard)

    // 03 Cambia el turno
    const newTurn = changeTurn(turn)
    setTurn(newTurn)

    // 04 Guarda la partida en memoria
    saveGameToStorage({
      board: newBoard, 
      turn: newTurn
    })

    // 05 Revisa si hay ganador
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
