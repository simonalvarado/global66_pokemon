import { defineStore } from 'pinia';
import { fetchPokemonList } from '../api/pokemonApi';
import { ref, computed } from 'vue'; 

// Define the store
export const usePokemonStore = defineStore('pokemon', () => {
    // State
    const allPokemons = ref([]);
    const favoritePokemons = ref([]);

    // Computed properties
    const getAllPokemons = computed(() => {
        return allPokemons.value;
    });
    const getFavoritePokemons = computed(() => {
        return favoritePokemons.value;
    });

    // Method to toggle a pokemon as favorite
    const toggleFavorite = (pokemon) => {
        // Find the index of the pokemon in the favorite pokemons list
        const index = favoritePokemons.value.findIndex(p => p.name === pokemon.name);
        if (index === -1) {
            // If the pokemon is not in the favorite pokemons list, add it
            favoritePokemons.value.push(pokemon);
        } else {
             // If the pokemon is in the favorite pokemons list, remove it
            favoritePokemons.value.splice(index, 1);
        }
    };

    // Method to fetch all pokemons from the API
    async function fetchAllPokemons() {
        const response = await fetchPokemonList();
        allPokemons.value = response.results; 
    }

    return {
        allPokemons,
        favoritePokemons,
        getAllPokemons,
        getFavoritePokemons,
        toggleFavorite,
        fetchAllPokemons
    };
});