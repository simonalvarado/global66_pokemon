<template>
  <!-- Loading spinner shown while data is being fetched -->
  <div class="loading-container" v-show="loading">
    <img
      src="../assets/icons/loading-icon.svg"
      alt="Loading Icon"
      class="loading-icon"
    />
  </div>
  <!-- Main content, shown when data has been fetched -->
  <main class="pokemon-template" v-show="!loading">
    <!-- Search bar component -->
    <SearchBar @change="handleChange" />
    <!-- Pokemon collection shown if input is valid -->
    <div v-if="!invalidInput">
      <PokemonCollection
        :pokemonList="pokemonList"
        :is-favorites-page="isFavoritesPage"
        :query="query"
        @show-invalid-input="showInvalidInput"
      />
    </div>
    <!-- Error message shown if input is invalid -->
    <div class="wrong-input" v-else>
      <h1>Uh-oh!</h1>
      <p>You look lost on your journey!</p>
      <AppButton
        :width="'155px'"
        :height="'44px'"
        @buttonClicked="goBack()"
        text="Go back home"
      />
    </div>
    <BottomBar />
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { usePokemonStore } from "../stores/pokemonStore";
import SearchBar from "../components/SearchBar.vue";
import PokemonCollection from "../components/PokemonCollection.vue";
import { storeToRefs } from "pinia";
import AppButton from "../components/AppButton.vue";
import BottomBar from "../components/BottomBar.vue";

export default {
  components: {
    SearchBar,
    PokemonCollection,
    AppButton,
    BottomBar,
  },
  props: {
    // Prop to determine if the current page is the favorites page
    isFavoritesPage: {
      type: Boolean,
      required: false,
    },
  },
  setup(props) {
    // Using Pinia store and Vue Router
    const store = usePokemonStore();
    const router = useRouter();

    // Reactive variables
    const query = ref("");
    const invalidInput = ref(false);

    // Computed properties from the store
    const { allPokemonsComputed, favoritePokemonsComputed } =
      storeToRefs(store);
    const pokemonList = ref(
      props.isFavoritesPage ? favoritePokemonsComputed : allPokemonsComputed
    );

    // Method to handle changes in the search bar
    const handleChange = (newSearchInput) => {
      query.value = newSearchInput;
    };

    // Method to show invalid input message
    const showInvalidInput = () => {
      invalidInput.value = true;
    };

    // Method to go back to the home page
    const goBack = () => {
      router.push("/");
    };

    // Loading state
    const loading = ref(true);

    // Fetch data when component is mounted
    onMounted(async () => {
      window.scrollTo(0, 0);
      if (store.allPokemonsComputed.length) {
        loading.value = false;
        return;
      }
      await store.fetchAllPokemons();
      loading.value = false;
    });

    return {
      query,
      invalidInput,
      pokemonList,
      handleChange,
      showInvalidInput,
      goBack,
      store,
      loading,
    };
  },
};
</script>

<style scoped>
.wrong-input {
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.wrong-input h1 {
  font-family: Lato;
  font-size: 36px;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 0;
}
.wrong-input p {
  font-family: Lato;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 25px;
}
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.loading-icon {
  width: 106px;
  height: 106px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
