<template>
  <div class="relative flex flex-col sm:flex-row mt-3">
    <CardComponent :card="card" />
    <CardAction :card="card" />
  </div>
</template>

<script setup lang="ts">
import CardComponent from './CardComponent.vue'
import CardAction from './CardAction.vue'
import type { CardDetails } from '@/types/card'
const props = defineProps<{
  card: CardDetails;
}>()


</script>