import React, {useContext} from 'react'
import { AppContext } from '../context/counterContext'
import {Types} from '../context/counterReducer'


const CounterList = () : JSX.Element => {
  const { state, dispatch } = useContext(AppContext);

  
  
  return (
    <React.Fragment>
      <button onClick={() => {
             dispatch({
              type: Types.Reset
            })
          }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-10">
              Reset
      </button>
      <ul className='list-none' >
        {state.counters.map(counter => <li key={counter.id}>
            <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-10 my-4">
              {counter.value}
            </button>
            <button onClick={() => {
             dispatch({
              type: Types.Increment,
              payload: {id: counter.id}
            })
          }}  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2">+</button>
            <button onClick={() => {
             dispatch({
              type: Types.Decrement,
              payload: {id: counter.id}
            })
          }} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">-</button>
            <button onClick={() => {
             dispatch({
              type: Types.Delete,
              payload: {id: counter.id}
            })
          }}  className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">X</button>
        </li> )}
    </ul>
    </React.Fragment>  
  )
}

export default CounterList