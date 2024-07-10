import { TURNS } from "../constants"
export function changeTurn (turn) {
  return turn === TURNS.X ? TURNS.O : TURNS.X
}