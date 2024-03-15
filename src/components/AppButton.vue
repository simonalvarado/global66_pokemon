<template>
  <button class="app-button" :class="{ secondary: secondary }" @click="emit('action')" >
    <div class="icon-container" v-if="$slots.icon">
        <slot name="icon" />
    </div>
    <p>{{ text }}</p>
  </button>
</template>

<script>
import { defineProps, defineEmits } from 'vue';

export default {
  props: {
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    secondary: {
      type: Boolean,
      default: false,
    }
  },
  emits: ['action'],
  setup(props, { emit }) {
  }
};
</script>

<style scoped>
.app-button {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: v-bind(width);
  height: v-bind(height);
  border-radius: 60px;
  border: none;
  gap: 10px;
  background: var(--button-bg-color);
}

p {
  color: var(--button-text-color);
  font-family: Lato;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
}
</style>
