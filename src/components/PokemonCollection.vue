<template>
  <!-- PokemonModal component, shown when a Pokemon is selected -->
  <PokemonModal
    v-if="isModalOpen"
    :pokemon="selectedPokemon"
    @close-modal="unselect"
  />
  <div class="pokemon-collection">
    <!-- PokemonItem component, repeated for each Pokemon in the list -->
    <PokemonItem
      v-for="pokemon in list"
      :key="pokemon.id"
      :pokemon="pokemon"
      @select-pokemon="selectPokemon"
    />
  </div>
</template>

<script>
import PokemonItem from "./PokemonItem.vue";
import PokemonModal from "./PokemonModal.vue";

export default {
  components: {
    PokemonItem, // Registering the PokemonItem component
    PokemonModal, // Registering the PokemonModal component
  },
  props: {
    pokemonList: {
      type: Object,
      required: true,
    },
    isFavoritesPage: {
      type: Boolean,
      required: false,
      default: false,
    },
    query: {
      type: String,
      required: true,
    },
  },
  emits: ["showInvalidInput"], // Event emitted when the search query returns no results
  data() {
    return {
      isModalOpen: false,
      selectedPokemon: {},
      list: this.pokemonList,
    };
  },
  methods: {
    selectPokemon(pokemon) {
      // Method to select a Pokemon and open the modal
      this.selectedPokemon = pokemon;
      this.isModalOpen = true;
    },
    unselect() {
      this.selectedPokemon = null; // Method to unselect a Pokemon and close the modal
      this.isModalOpen = false;
    },
  },
  beforeUpdate() {
    // Check if pokemonList is null or undefined before trying to filter
    if (!this.pokemonList) {
      console.error("pokemonList es null o undefined");
      return;
    }
    // Filters the list of Pokemon based on the search query
    this.list = this.pokemonList.filter((poke) =>
      poke.name.toLowerCase().includes(this.query.toLowerCase())
    );
    // Emits an event if the search query returns no results
    if (this.list.length === 0) {
      this.$emit("showInvalidInput");
    }
  },
};
</script>

<style scoped>
.pokemon-collection {
  margin-top: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
