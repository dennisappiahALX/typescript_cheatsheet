import React, {useReducer, createContext, Dispatch} from 'react'
import Counter from '../models/Counter'
import { counterReducer, countReducer, CounterActions, countActions } from './counterReducer';



type InitialStateType  = {
  counters : Counter[]
  count : number 
}

const initialState= {
  counters: [
    {id: 1, value:0},
    {id: 2, value:0},
    {id: 3, value:0},
    {id: 4, value:0}
  ],
  count: 0,
}

export const AppContext = createContext 
<{ state: InitialStateType; dispatch: Dispatch<CounterActions | countActions>;}>
    ({ state: initialState, dispatch: () => null});

 

const mainReducer = ({ counters, count }: InitialStateType, action: CounterActions | countActions) => ({
    counters: counterReducer(counters, action),
    count: countReducer(count, action),
});


type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}


