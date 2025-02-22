<template>
  <div class="relative">
    <div class="overflow-hidden" tabindex="0" @keydown="handleKeydown">
      <div 
        class="flex transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <slot></slot>
      </div>
    </div>

    <div class="flex justify-center items-center gap-1 mt-4">
      <button 
        v-for="(_, index) in totalSlides" 
        :key="index"
        @click="currentIndex = index"
        class="w-6 h-2 rounded-full transition-all duration-200"
        :class="[
          currentIndex === index 
            ? 'bg-primary' 
            : 'bg-primary w-2'
        ]"
        aria-label="Go to slide"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentIndex = ref(0)
const props = defineProps<{
  totalSlides: number
}>()

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.totalSlides
}

const prev = () => {
  currentIndex.value = currentIndex.value === 0 
    ? props.totalSlides - 1 
    : currentIndex.value - 1
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}
</script> 