import { CountAction, CountState, CountActionKind } from "../types";

export default function CounterReducer (state: CountState, action: CountAction): CountState {
  switch (action.type)  {
    case CountActionKind.INCREASE: 
      return {...state, count: state.count + ( action.payload || 1 ) }
    case CountActionKind.DECREASE: 
      return {...state, count: state.count - ( action.payload || 1 ) }
    default:
      throw new Error() 
  }
}