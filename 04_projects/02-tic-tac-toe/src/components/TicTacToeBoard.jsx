import { Square } from "./Square"
//import { PropTypes } from 'prop-types'

/* 
TicTacToeBoard.propTypes = {
  board: PropTypes.fun
  updateBoard: PropTypes.fun,
}
 */

export function TicTacToeBoard ({board, updateBoard}) {
  return (
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
  )
}
