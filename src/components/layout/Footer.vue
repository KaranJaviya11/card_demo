<template>
  <footer class="bg-secondary border-t">
    <div class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-center text-sm text-white">
        <span>© {{ currentYear }} GIRIRAJ DIGITAL All Rights Reserved.</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
