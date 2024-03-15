<template>
  <div class="pokemon-template">
    <SearchBar @search="handleSearch" />
    <!-- <div>
      <PokemonList v-if="showAllPokemons" :pokemons="allPokemons" />
      <PokemonList v-else :pokemons="favoritePokemons" />
    </div>
    <AppFooter /> -->
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'

export default {
  components: {
    SearchBar
  }
};
</script>

<style scoped>

</style>
