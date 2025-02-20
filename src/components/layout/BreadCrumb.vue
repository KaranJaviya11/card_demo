<template>
  <nav class="flex px-4 py-3" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center text-xs font-medium text-primary">
          Home
      </li>

      <li 
        v-for="(item, index) in items" 
        :key="index" 
        class="inline-flex items-center"
      >
        <svg 
          class="w-4 h-3 text-xs text-primary" 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill-rule="evenodd" 
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
            clip-rule="evenodd"
          />
        </svg>
        <span 
          class="ml-1 text-xs font-medium text-primary md:ml-2"
        >
          {{ item.name }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  name: string;
}

defineProps<{
  items: BreadcrumbItem[];
}>();
</script>
