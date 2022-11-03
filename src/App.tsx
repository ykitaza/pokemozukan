import { useEffect, useState } from 'react'
import './App.css'
import { getAllPokemon, getPokemon } from './utils/pokemon'
import { Card } from './components/card'

function App() {

  const initialURL = "https://pokeapi.co/api/v2/pokemon/"
  const [loading, setLoading] = useState(true)
  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    const fetchPokemonData = async () => {
      const pokemons = await getAllPokemon(initialURL)
      loadPokemon(pokemons);
      setLoading(false)
    }
    fetchPokemonData()
  }, [])

  const loadPokemon = async (pokemons: []) => {
    let _pokemonData = await Promise.all(pokemons.map(async (pokemon) => {
      const pokemonRecord = await getPokemon(pokemon.url)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  console.log(pokemonData)

  return (
    <div className="App">
      {loading ? (
        <h1>ロード中・・・</h1>
      ) : (
        <>
          <div className="pokemonCardContainer">
            {pokemonData.map((pokemon, i) => {
                return(
              //     <>
              //       <div key ={i}>{pokemon.name}</div>
              //       <img src={pokemon.sprites.front_default}  />
              //     </>
                <Card key={i} pokemon={pokemon} />
                )
            })}
          </div>
        </>
      )
      }
    </div>
  )
}

export default App
