<template>
  <div class="search-bar">
    <form>
        <input type="text" v-model="searchQuery" placeholder="Search" />
        <img src="../assets/icons/search-icon.svg" alt="Search Icon" width="18" height="18" />
    </form>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  emits: ['search'],
  setup(_, { emit }) {
    const searchQuery = ref('');

    watch(searchQuery, (newValue) => {
      emit('search', newValue);
    });

    return {
      searchQuery
    };
  }
};
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
}

input[type="text"] {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
