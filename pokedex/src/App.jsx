import { useState } from 'react'

import './App.css'
import { Home } from './pages/Home'
import NavBar from './components/NavBar'
import PokemonCard from './components/PokemonCard'

function App() {

  return (
    <>
      
      <NavBar></NavBar>
      <PokemonCard></PokemonCard>
      <Home></Home>
    </>
  )
}

export default App
