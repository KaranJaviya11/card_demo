<template>
    <Breadcrumb :items="breadcrumbItems" />
    <div class="bg-white mb-10">
      <div class="border-b border-gray-200 px-4 py-2 flex justify-between items-center shadow-header">
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
          @click="showAddCard = true"
          class="bg-textPrimary text-white px-2 flex items-center space-x-2"
        >
          <span class="text-xl">+</span>
          <span>Add Card</span>
        </button>
      </div>

      <div class="p-6">
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

    <AddCard 
      :is-open="showAddCard" 
      @close="showAddCard = false"
    />
</template>

<script setup lang="ts">
import Breadcrumb from '@/components/layout/BreadCrumb.vue'
import { ref } from 'vue'
import SavedCard from '@/components/large/SavedCard.vue'
import AddCard from '@/components/large/AddCard.vue'
import type { CardFormData } from '@/types/card'

const breadcrumbItems = [
  { name: 'Cards', path: '/cards' }
]

const tabs = [
  { id: 'saved', name: 'Saved Cards' },
  { id: 'gd', name: 'GD Cards' }
]

const activeTab = ref('saved')

const gdCards = ref([])

const showAddCard = ref(false)
</script>
