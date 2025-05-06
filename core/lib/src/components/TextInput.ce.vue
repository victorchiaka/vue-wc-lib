<script setup lang="ts">
import type { TextInputProps } from "../types";

const props = defineProps<TextInputProps>();
</script>

<template>
  <component
    :is="props.type == 'text-area' ? 'textarea' : 'input'"
    :class="['text-input', `text-input--${props.size || 'md'}`, props.class]"
  />
</template>

<style scoped>
.text-input {
  font-family: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s;
}

.text-input--sm {
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
}

.text-input--md {
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
}

.text-input--lg {
  font-size: 1.2rem;
  padding: 0.75rem 1rem;
}

.text-input:focus {
  outline: none;
}
</style>
