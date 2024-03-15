import axios from 'axios';

const baseuRL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemonList = async () => {
    try {
        const response = await axios.get(`${baseuRL}?limit=1500&offset=0`);
        return response.data;
    } catch (error) {
        console.error('fetchPokemonList', error);
    }
}

export const fetchPokemonInfo = async (name) => {
    try {
        const response = await axios.get(`${baseuRL}/${name}`);
        return response.data;
    } catch (error) {
        console.error('fetchPokemonInfo', error);
    }
}
