import './App.css'
import { useState } from 'react'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({children, updateBoard, isSelected, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div 
      className={className}
      onClick={handleClick}
    >
      {children}
    </div>
   )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

const checkWinner = (boardToCheck) => { // CUIDADO AQUI, no pasar el board del estado, sino el nuevo Board.
  // revisamos todas las combinaciones ganadoras
  // para ver si x u o gano.
  for ( const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck [a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  // si no hay ganador
  return null
}

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

  const checkEndGame = (boardToCheck) => {
    return boardToCheck.every(square => square !== null)
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
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // revisa si hay ganador
    const newWinner = checkWinner(newBoard) // CUIDADO AQUI, no pasar el board del estado, sino el nuevo Board.
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  return (
   <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={handleClickResetGame}>Reset</button>
      <section className='game'>
        {
          board.map((square , index) => {
            return (
              <Square 
                key={index} 
                index={index}
                updateBoard={updateBoard} 
              > 
                {square}
              </Square>
            )
          }) 
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false
                    ? 'Empate'
                    : 'Ganó: '
                }
              </h2>
              <header className='win'>
                {
                  winner && <Square>{winner}</Square>
                }
              </header>
              <footer>
                <button onClick={handleClickResetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
   </main>

  )
}

export default App
