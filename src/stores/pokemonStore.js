import { defineStore } from "pinia";
import { getAllPokemon } from "../api/pokemonApi";
import { ref, computed } from "vue"; 

// Define the store
export const usePokemonStore = defineStore('pokemon', () => {
    // State
    const allPokemons = ref([]);
    const favoritePokemons = ref([]);

    // Computed properties
    const allPokemonsComputed = computed(() => allPokemons.value);
    const favoritePokemonsComputed = computed(() => favoritePokemons.value);

    // Method to toggle a pokemon as favorite
    const toggleFavorite = (name) => {
       if (favoritePokemons.value.find((pokemon) => pokemon.name === name)) {
           favoritePokemons.value = favoritePokemons.value.filter((pokemon) => pokemon.name !== name);
       } else {
              favoritePokemons.value = [...favoritePokemons.value, allPokemons.value.find((pokemon) => pokemon.name === name)];
         }
    };

    // Method to fetch all pokemons from the API
    async function fetchAllPokemons() {
        try {
          const response = await getAllPokemon();
          allPokemons.value = response.results; 
        } catch (error) {
          throw new Error('Error accediendo a la data de la API');
        }
      }

    return {
        allPokemons,
        favoritePokemons,
        allPokemonsComputed,
        favoritePokemonsComputed,
        toggleFavorite,
        fetchAllPokemons
    };
});