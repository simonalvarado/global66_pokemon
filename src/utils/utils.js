import { computed } from 'vue';
import { usePokemonStore } from '../stores/pokemonStore';

// Define a computed property to check if the current Pokemon is a favorite
export function isFavoritePokemon(pokemonName) {
    const store = usePokemonStore();
    return computed(() => store.favoritePokemons.find((poke) => poke.name === pokemonName));
  }

export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}