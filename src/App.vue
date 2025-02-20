<template>
<div class="flex h-screen">
  <div class="w-[20%] max-w-[280px] min-h-screen bg-gray-200">
    <Sidebar />
  </div>
  <div class="flex-1 flex flex-col min-w-0">
    <Header />
    <main class="flex-1 p-4 overflow-auto bg-gray-200">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</div>


</template>

<script setup lang="ts">
import Sidebar from '@/components/layout/Sidebar.vue';
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
</script>
