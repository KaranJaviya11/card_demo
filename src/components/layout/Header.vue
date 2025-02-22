<template>
  <header class="bg-white px-4 py-3 flex items-center justify-between shadow-header">

    <div class="flex items-center gap-3">
      <button 
        class="text-gray-600 hover:text-gray-800"
        @click="emit('update:isOpen', true)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#6A94A5">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <h1 class="text-xl text-[#6A94A5]  font-bold">Cards</h1>
    </div>

    <div>
      <div class="flex items-center gap-2 hover:bg-gray-50 rounded-full p-1">
        <div class="w-8 h-8 rounded-full">
          <img src="@/assets/Images/UserProfile.svg" alt="Avatar" class="w-full h-full object-cover">
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="#6A94A5">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  'update:isOpen': [value: boolean]
}>()
</script>
