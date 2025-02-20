<template>
    <Breadcrumb :items="breadcrumbItems" />
    <div class="bg-white">
      <div class="border-b border-gray-200 px-4 py-2 flex justify-between items-center">
        <div class="flex space-x-8">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            @click="activeTab = tab.id"
            class="py-2 px-1 relative"
            :class="[
              activeTab === tab.id 
                ? 'text-textPrimary font-medium' 
                : 'text-primary hover:text-gray-700'
            ]"
          >
            {{ tab.name }}
            <div 
              v-if="activeTab === tab.id"
              class="absolute bottom-0 left-0 w-full h-0.5 bg-textPrimary"
            />
          </button>
        </div>
        <button 
          @click="handleAddCard"
          class="bg-textPrimary text-white px-4 py-2 rounded-md flex items-center space-x-2"
        >
          <span class="text-xl font-bold">+</span>
          <span>Add Card</span>
        </button>
      </div>

      <div class="p-4">
        <div v-if="activeTab === 'saved'">
          <SavedCard />
        </div>

        <div v-else-if="activeTab === 'gd'">
          <div v-if="gdCards.length === 0" class="text-center text-gray-500 py-8">
            No GD cards found
          </div>
          <div v-else>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/components/layout/BreadCrumb.vue'
import { ref } from 'vue'
import SavedCard from '@/components/large/SavedCard.vue'
const breadcrumbItems = [
  { name: 'Cards', path: '/cards' }
]

const tabs = [
  { id: 'saved', name: 'Saved Cards' },
  { id: 'gd', name: 'GD Cards' }
]

const activeTab = ref('saved')


const gdCards = ref([])

const handleAddCard = () => {
  console.log('Add card clicked')
}
</script>
