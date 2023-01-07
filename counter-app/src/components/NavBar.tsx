import React, {useContext} from 'react'
import { AppContext } from '../context/counterContext'
import { Types } from '../context/counterReducer'


const NavBar = () => {
  const {state, dispatch} = useContext(AppContext)

  return (
    <nav className="relative container mb-4">
      <div className="flex items-center justify-between">
            <div className="pt-2">
                <span className='mx-4'> NavBar</span>
                <span className='bg-black text-white  font-bold px-6 py-1 rounded-full'>
                  {state.counters.filter(counter => counter.value > 0).length}</span>
            </div>
        </div>  
    </nav>
  )
}

export default NavBar