import { Square } from './Square'

export const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null

  const winnerText = winner === false ? 'Draw' : 'You won!:'

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>
        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}>Restart</button>
        </footer>
      </div>
    </section>
  )
}

/*
  // This was the design of the component before simplifying it.
      <>
      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false
                    ? 'Empate'
                    : 'You won: '
                }
              </h2>
              <header className='win'>
                {
                  winner && <Square>{winner}</Square>
                }
              </header>
              <footer>
                <button onClick={resetGame}>Restart</button>
              </footer>
            </div>
          </section>
        )
      }
    </>
*/
