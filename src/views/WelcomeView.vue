<template>
  <div class="welcome-page">
    <div class="hero-container">
        <img src="../assets/images/hero.png" alt="Pikachu hero image" width="325" height="288" />
    </div>
    <h1>Welcome to Pokédex</h1>
    <p>
      The digital encyclopedia created by Professor Oak is an invaluable tool to
      Trainers in the Pokémon world.
    </p>
    <div class="button-container">
        <AppButton
          :width="'131px'"
          :height="'44px'"
          :text="'Get Started'"
          @action="redirect"
          :url="'/list'"
        />
    </div>
  </div>
</template>

<script>
import AppButton from "../components/AppButton.vue";
import { useRouter } from "vue-router";

export default {
  name: "welcomeView",
  components: {
    AppButton,
  },
  setup() {
    const router = useRouter();

    const redirect = () => {
      router.push("/list");
    };

    return {
      redirect,
    };
  },
};
</script>

<style scoped>
.welcome-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-container {
  margin-top: 60px;
  margin-bottom: 40px;
}

.button-container {
  margin-top: 10px;
}

h1 {
  font-size: 26px;
}

p {
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  padding: 0 20px;
  margin-bottom: 40px;
  max-width: 560px;
}
</style>
