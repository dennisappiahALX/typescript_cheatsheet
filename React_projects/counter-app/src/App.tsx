import React, {useState} from 'react';
import './App.css';
import Counter from './models/Counter';
import CounterList from './components/CounterList';
import { AppProvider } from './context/counterContext'



const App = () => {
  return (
    <AppProvider>
      <CounterList/>
    </AppProvider>
  )
}

export default App


