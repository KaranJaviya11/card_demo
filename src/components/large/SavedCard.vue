<template>
  <div class="w-full flex flex-col lg:flex-row gap-4">
    <div class="w-full lg:min-w-[30%] lg:max-w-[369px]">
      <SavedCardSidebar/>
    </div>
    <div class="w-full lg:w-[70%] px-6">
      <Cards/>
    </div>
  </div>
</template>

<script setup lang="ts">
import SavedCardSidebar from './SavedCardSidebar.vue'
import Cards from './Cards.vue'
</script>
