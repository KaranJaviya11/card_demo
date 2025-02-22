<template>
<div class="flex flex-col lg:flex-row h-screen overflow-hidden">
  <Sidebar v-model:isOpen="isSidebarOpen" class="h-screen" />
  
  <div class="flex-1 flex flex-col h-screen overflow-auto">
    <Header v-model:isOpen="isSidebarOpen" />
    <main class="flex-1 p-2 md:p-4 bg-gray-200">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</div>


</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCardStore } from '@/store/card'
import Sidebar from '@/components/layout/Sidebar.vue';
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';

const cardStore = useCardStore()
const isSidebarOpen = ref(false)

onMounted(() => {
  cardStore.initializeCards()
})
</script>
