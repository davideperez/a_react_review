import { FunctionComponent, useReducer } from "react"
import { CountActionKind  } from '../types'
import CountReducer from './CounterReducer'

export const Counter: FunctionComponent = () => {
  
  const [state, dispatch] = useReducer(CountReducer, { count: 0 })

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: CountActionKind.INCREASE, payload: 5 })}>+</button>
      <button onClick={() => dispatch({ type: CountActionKind.DECREASE, payload: 5 })}>-</button>
    </>
  )
}