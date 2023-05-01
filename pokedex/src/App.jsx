import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Home } from "./pages/Home";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";
import { Container, Grid } from "@mui/material";
import { Filter } from "@mui/icons-material";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = []

    for(var i=1; i<50; i++ ){
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }

    var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((res) => setPokemons(res)) 
    .catch((err) => console.log(err))
  

    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
  };

  const pokemonFilter = (name) => {
    var filteredPokemons = []
    if(name===""){
      getPokemons()
    }
    for(var i in pokemons){
      if(pokemons[i].data.name.includes(name)){
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons)
  }
  return (
    <>
      <NavBar pokemonFilter ={pokemonFilter}></NavBar>
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={2} key={key}>
              <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} type={pokemon.data.types}></PokemonCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
