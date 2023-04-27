import { useState } from 'react'

import './App.css'
import { Home } from './pages/Home'
import NavBar from './components/NavBar'
import PokemonCard from './components/PokemonCard'
import { Container, Grid } from '@mui/material'

function App() {

  return (
    <>
      
      <NavBar></NavBar>
      <Container maxWidth='false'>

        <Grid container>
          
          <Grid item xs={3}>
            <PokemonCard></PokemonCard>
          </Grid>
          <Grid item xs={3}>
            <PokemonCard></PokemonCard>
          </Grid>
          <Grid item xs={3}>
            <PokemonCard></PokemonCard>
          </Grid>
          <Grid item xs={3}>
            <PokemonCard></PokemonCard>
          </Grid>

        </Grid>
      

      </Container>
     
    </>
  )
}

export default App
