<template>
  <!-- Teleport is used to render the modal outside the DOM hierarchy of the parent component -->
  <Teleport to="#modal">
    <div class="modal-container">
      <div class="modal-content">
        <!-- Loading state is handled with a v-if directive -->
        <div v-if="loading">
          <img
            src="../assets/icons/loading-icon.svg"
            alt="Loading Icon"
            class="loading-icon"
          />
        </div>
        <!-- Once loading is complete, the modal content is displayed -->
        <div v-else>
          <!-- The close button emits a custom event to the parent component -->
          <button @click="emit('closeModal')" class="close-button">
            <img src="../assets/icons/close-icon.svg" alt="Close modal" />
          </button>
          <div class="image-container">
            <div class="background-image">
              <img
                src="../assets/images/background-image.png"
                alt="Background"
              />
            </div>
            <img
              :src="pokemonData.sprites.other['official-artwork'].front_default"
              :alt="pokemonData.name"
              class="pokemon-image"
            />
          </div>
          <div class="pokemon-details">
            <ul>
              <li><span>Name:</span> {{ capitalize(pokemonData.name) }}</li>
              <li><span>Weight:</span> {{ pokemonData.weight }}</li>
              <li><span>Height:</span> {{ pokemonData.height }}</li>
              <li><span>Types:</span> {{ fetchPokemonTypes() }}</li>
            </ul>
          </div>
          <div class="modal-actions">
            <!-- The share button triggers the sharePokemon function when clicked -->
            <div class="share-button">
              <AppButton
                :width="'195px'"
                :height="'44px'"
                :text="'Share to my friends'"
                @buttonClicked="sharePokemon"
              />
            </div>
            <!-- The favorite button toggles the favorite status of the Pokemon when clicked -->
            <div
              class="favorite-button"
              @click="store.toggleFavorite(pokemon.name)"
            >
              <img
                src="../assets/icons/favorite-on-icon.svg"
                alt="Favorite Pokemon"
                v-if="favorite"
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
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { usePokemonStore } from "../stores/pokemonStore";
import { ref, onMounted, toRaw } from "vue";
import AppButton from "../components/AppButton.vue";
import { getPokemonByName } from "../api/pokemonApi";
import { capitalize } from "../utils/utils";
import { isFavoritePokemon } from "../utils/utils";

const store = usePokemonStore();

// Define the props for the component
const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});

// Define the custom events that this component can emit
const emit = defineEmits(["closeModal"]);

// Define reactive variables for loading state and pokemon data
const loading = ref(true);
const pokemonData = ref(null);

// Define a function to fetch the types of the pokemon
const fetchPokemonTypes = () => {
  if (!pokemonData.value) return;
  const types = toRaw(pokemonData.value.types);
  return types.map((type) => capitalize(type.type.name)).join(", ");
};

// Define a function to share the pokemon details
const sharePokemon = () => {
  let info = `Name: ${pokemonData.value.name}, Weight: ${
    pokemonData.value.weight
  }, Height: ${pokemonData.value.height}, Type(s): ${fetchPokemonTypes()}`;
  navigator.clipboard.writeText(info);
};

// Use the isFavoritePokemon utils function
const favorite = isFavoritePokemon(props.pokemon.name);

// Fetch the pokemon data when the component is mounted
onMounted(async () => {
  try {
    pokemonData.value = await getPokemonByName(props.pokemon.name);
    loading.value = false;
  } catch (error) {
    throw new Error('Error accediendo a la data de la API');
  }
});
</script>

<style scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  position: relative;
  width: 84%;
  min-height: 506px;
  max-width: 570px;
  background: #fff;
  border-radius: 10px;
}

.image-container {
  position: relative;
  width: 100%;
  height: 220px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
}

.close-button {
  position: absolute;
  top: 14px;
  right: 9px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1;
}

.background-image img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.pokemon-image {
  width: 180px;
  height: 180px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.pokemon-details {
  padding: 9px 28px 20px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  font-family: Lato;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  color: var(--paragraph-color);
  border-bottom: 1px solid var(--border-color);
  padding: 10px 0;
}

li span {
  font-weight: 700;
}

.modal-actions {
  padding: 0 28px;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 345px) {
  .modal-actions {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  .favorite-button {
    padding-bottom: 10px;
  }
}

.favorite-button {
  cursor: pointer;
}

.loading-icon {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
