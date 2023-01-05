import React, {useContext} from 'react'
import { AppContext } from '../context/counterContext'
import {Types} from '../context/counterReducer'



const CounterList = () : JSX.Element => {
  const { state, dispatch } = useContext(AppContext);
  
  return (
    <ul className='list-none' >
        {state.counters.map(counter => <li key={counter.id}>
            <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-6 my-4">
              zero
            </button>
            <button  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2">+</button>
            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">-</button>
            <button onClick={() => {
             dispatch({
              type: Types.Delete,
              payload: {id: counter.id}
            })
          }}  className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">X</button>
        </li> )}
    </ul>
  )
}

export default CounterList