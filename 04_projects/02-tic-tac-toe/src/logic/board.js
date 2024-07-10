import { WINNER_COMBOS } from '../constants'

export const checkWinner = (boardToCheck) => { // CUIDADO AQUI, no pasar el board del estado, sino el nuevo Board.
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


export const checkEndGame = (boardToCheck) => {
  return boardToCheck.every(square => square !== null)
}