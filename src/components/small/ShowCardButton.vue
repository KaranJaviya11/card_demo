<template>
  <button 
    @click="toggleCardNumber"
    class="flex items-center gap-2 px-1 font-medium text-[12px] text-primary bg-[#C2E2EE] rounded mb-1"
  >
    <eye-icon v-if="!modelValue" class="h-4 w-4" />
    <eye-slash-icon v-else class="h-4 w-4" />
    <span>{{ modelValue ? 'Hide' : 'Show' }} Card Number</span>
  </button>
</template>

<script setup lang="ts">
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const toggleCardNumber = () => {
  emit('update:modelValue', !props.modelValue)
}
</script> 