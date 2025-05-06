<script setup lang="ts">
import { defineEmits } from "vue";
import type { ButtonProps } from "../types";

const props = defineProps<ButtonProps>();

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>();

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) emit('click', event);
};
</script>
<template>
  <button :type="props.type ?? 'button'" :disabled="props.disabled" :class="[
    'btn',
    `btn--${props.variant}`,
    `btn--${props.size ?? 'md'}`,
    { 'btn--disabled': props.disabled },
    props.class
  ]" @click="handleClick">
    {{ props.label }}
  </button>
</template>
<style>
.btn {
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: unset;
  transition: background-color 0.2s ease;
  color: inherit;
}

.btn--primary {
  background-color: #007bff;
}

.btn--secondary {
  background-color: #6c757d;
}

.btn--danger {
  background-color: #dc3545;
}

.btn--sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
}

.btn--md {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

.btn--lg {
  padding: 0.75rem 1.25rem;
  font-size: 1.2rem;
}

.btn--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
