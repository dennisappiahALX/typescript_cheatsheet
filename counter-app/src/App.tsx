import React, {useState} from 'react';
import './App.css';
import CounterList from './components/CounterList';
import { AppProvider } from './context/counterContext'
import NavBar from './components/NavBar';



const App: React.FC  = () => {
  return (
    <AppProvider>
      <NavBar />
      <CounterList/>
    </AppProvider>
  )
}

export default App


