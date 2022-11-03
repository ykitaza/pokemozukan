import axios from 'axios'

export const getAllPokemon = async (url: string) => {
    const res = await axios.get(url);
    return res.data.results
}

export const getPokemon = async (url: string) => {
    const res = await axios.get(url);
    const pokemon = res.data
    return pokemon
}
