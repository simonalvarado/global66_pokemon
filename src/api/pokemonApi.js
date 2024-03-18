import axios from 'axios';

// Base URL for the Pokemon API
const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

// Function to fetch the list of Pokemons
export const fetchPokemonList = async () => {
    try {
        const response = await axios.get(`${baseUrl}?limit=1500&offset=0`);
        return response.data;
    } catch (error) {
        throw new Error('Error accediendo a la data de la API');
    }
}

// Function to fetch information about a specific Pokemon
export const fetchPokemonInfo = async (name) => {
    try {
        const response = await axios.get(`${baseUrl}/${name}`);
        return response.data;
    } catch (error) {
        throw new Error('Error accediendo a la data de la API');
    }
}
