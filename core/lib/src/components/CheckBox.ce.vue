<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import type { CheckboxProps } from '../types';


const props = defineProps<CheckboxProps>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}>();

const checkboxRef = ref<HTMLInputElement | null>(null);

const toggle = (event: Event) => {
  if (props.disabled) return;
  const value = (event.target as HTMLInputElement).checked;
  emit('update:modelValue', value);
  emit('change', value);
};

watch(() => props.indeterminate, (value) => {
  if (checkboxRef.value) {
    checkboxRef.value.indeterminate = value || false;
  }
});

onMounted(() => {
  if (checkboxRef.value && props.indeterminate) {
    checkboxRef.value.indeterminate = true;
  }
});
</script>

<template>
  <label class="checkbox-wrapper" :aria-disabled="props.disabled">
    <input
      ref="checkboxRef"
      :id="props.id"
      class="checkbox"
      type="checkbox"
      :checked="props.modelValue"
      :disabled="props.disabled"
      @change="toggle"
    />
    <span class="checkbox-label">
      <slot />
    </span>
  </label>
</template>

<style scoped>
.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
}

.checkbox {
  width: 1rem;
  height: 1rem;
  accent-color: #007bff;
  cursor: pointer;
}

.checkbox:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.checkbox-label {
  font-size: 1rem;
}
</style>
