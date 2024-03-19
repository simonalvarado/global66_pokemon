<template>
  <footer class="bottom-bar">
    <div class="buttons-container">
      <!-- AppButton component for the "All" button -->
      <AppButton
        :width="'100%'"
        :height="'44px'"
        @buttonClicked="$router.push('/list')"
        text="All"
        :class="{ disabled: route.path !== '/list' }"
      >
        <template v-slot:icon>
          <img
            src="../assets/icons/all-icon.svg"
            alt="All Icon"
            width="22"
            height="22"
          />
        </template>
      </AppButton>
      <div class="divider"></div>
      <!-- AppButton component for the "Favorites" button -->
      <AppButton
        :width="'100%'"
        :height="'44px'"
        @buttonClicked="$router.push('/favorite')"
        text="Favorites"
        :class="{ disabled: route.path !== '/favorite' }"
      >
        <template v-slot:icon>
          <img
            src="../assets/icons/favorite-icon.svg"
            alt="Favorite Icon"
            width="22"
            height="22"
          />
        </template>
      </AppButton>
    </div>
  </footer>
</template>

<script>
import AppButton from "../components/AppButton.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    AppButton,
  },
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: var(--item-background-color);
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px -5px 4px 0px #0000000d;
}
.buttons-container {
  display: flex;
  justify-content: space-around;
  width: 85%;
  max-width: 570px;
}
.divider {
  width: 35px;
  height: 44px;
}
</style>
