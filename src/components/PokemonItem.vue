<template>
  <!-- PokemonItem component, represents a single Pokemon -->
  <div class="pokemon-item" @click="emit('selectPokemon', pokemon)">
    <p class="pokemon-name">{{ capitalize(pokemon.name) }}</p>
    <div
      class="favorite-button"
      v-on:click.stop
      @click="store.toggleFavorite(pokemon.name)"
    >
      <img
        src="../assets/icons/favorite-on-icon.svg"
        alt="Favorite Pokemon"
        v-if="store.favoritePokemons.find((poke) => poke.name === pokemon.name)"
        class="favorite-icon"
      />
      <img
        src="../assets/icons/favorite-off-icon.svg"
        alt="Not Favorite Pokemon"
        v-else
        class="favorite-icon"
      />
    </div>
  </div>
</template>

<script>
import { usePokemonStore } from "../stores/pokemonStore";
import { capitalize } from "../utils/utils";

export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const store = usePokemonStore(); // Use the Pokemon store

    // Check if pokemon is null or undefined before trying to access its properties
    if (!props.pokemon) {
      console.error("pokemon es null o undefined");
      return;
    }

    return {
      capitalize,
      store,
      emit,
    };
  },
};
</script>

<style scoped>
.pokemon-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 85%;
  height: 60px;
  max-width: 570px;
  cursor: pointer;
  background: var(--item-background-color);
}

.pokemon-name {
  font-family: Lato;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 20px;
  color: var(--item-text-color);
}

.favorite-icon {
  padding-right: 10px;
}
</style>
