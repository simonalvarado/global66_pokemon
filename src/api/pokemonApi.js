import axios from "./axiosConfig"

// Function to fetch the list of Pokemons
export const getAllPokemon = async () => {
    try {
        const response = await axios.get('?limit=1500&offset=0');
        return response.data;
    } catch (error) {
        throw new Error('Error accediendo a la data de la API');
    }
}

// Function to fetch information about a specific Pokemon
export const getPokemonByName = async (name) => {
    try {
        const response = await axios.get(`/${name}`);
        return response.data;
    } catch (error) {
        throw new Error('Error accediendo a la data de la API');
    }
}
