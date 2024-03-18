<template>
  <div class="search-bar-container">
    <form @submit.prevent>
      <label for="search-bar" class="visually-hidden">Search</label>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search"
        id="search-bar"
      />
      <img
        src="../assets/icons/search-icon.svg"
        alt="Search Icon"
        width="18"
        height="18"
        class="search-icon"
      />
    </form>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  // The component emits a change event when the search query changes
  emits: ["change"],
  setup(_, { emit }) {
    // The search query is a reactive ref that emits a change event when it changes
    const searchQuery = ref("");

    // Expose the searchQuery ref to the template
    watch(searchQuery, (newVal) => {
      emit("change", newVal);
    });

    return {
      searchQuery,
    };
  },
};
</script>

<style scoped>
.search-bar-container {
  position: fixed;
  top: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  padding-top: 30px;
  padding-bottom: 30px;
  background: var(--body-background-color);
}

form {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 85%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 570px;
}

input {
  border-radius: 4px;
  border: none;
  box-shadow: 0px 2px 10px 0px #0000000a;
  width: 100%;
  height: 50px;
  padding: 0 42px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
}

input::placeholder {
  color: var(--input-placeholder-color);
}

input:focus {
  outline: none;
}

.search-icon {
  position: absolute;
  top: 16px;
  left: 16px;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
