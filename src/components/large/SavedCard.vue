<template>
  <div class="space-y-4">
    <div class="bg-gray-50 p-4 rounded-lg">
      <div class="flex items-center justify-between cursor-pointer" @click="toggleCardDetails">
        <div class="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <span class="text-lg font-medium text-blue-500">Card Details</span>
        </div>
        <svg 
          class="h-6 w-6 text-gray-400 transform transition-transform duration-200"
          :class="{ 'rotate-180': isCardDetailsOpen }"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div v-if="isCardDetailsOpen" class="mt-4">
      </div>
    </div>

    <div class="bg-gray-50 p-4 rounded-lg">
      <div class="flex items-center justify-between cursor-pointer" @click="toggleTransactions">
        <div class="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-lg font-medium text-blue-500">Today's Transactions</span>
        </div>
        <svg 
          class="h-6 w-6 text-gray-400 transform transition-transform duration-200"
          :class="{ 'rotate-180': isTransactionsOpen }"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div v-if="isTransactionsOpen" class="mt-4 space-y-4">
        <div v-for="transaction in transactions" :key="transaction.id" class="border-b border-gray-200 pb-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="bg-blue-100 p-2 rounded-full">
                <svg 
                  class="h-6 w-6 text-blue-500"
                  :class="{ 'transform rotate-180': transaction.type === 'credit' }"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18" />
                </svg>
              </div>
              <div>
                <h3 class="font-medium text-gray-900">{{ transaction.title }}</h3>
                <p class="text-sm text-gray-500">{{ transaction.date }}</p>
                <p class="text-sm text-blue-500">{{ transaction.description }}</p>
              </div>
            </div>
            <span 
              class="font-medium"
              :class="transaction.type === 'credit' ? 'text-green-500' : 'text-red-500'"
            >
              {{ transaction.type === 'credit' ? '+' : '-' }} ${{ transaction.amount }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isCardDetailsOpen = ref(false)
const isTransactionsOpen = ref(true)

const toggleCardDetails = () => {
  isCardDetailsOpen.value = !isCardDetailsOpen.value
}

const toggleTransactions = () => {
  isTransactionsOpen.value = !isTransactionsOpen.value
}

const transactions = ref([
  {
    id: 1,
    title: 'Ordered Food',
    date: '20th May 2022',
    description: 'Charges applied on credit card',
    amount: '150.50',
    type: 'debit'
  },
  {
    id: 2,
    title: 'Ticket Refund',
    date: '20th May 2022',
    description: 'Amount credited on debit card',
    amount: '50.50',
    type: 'credit'
  },
  {
    id: 3,
    title: 'Interest credited',
    date: '20th May 2022',
    description: 'Charges applied on credit card',
    amount: '5.50',
    type: 'credit'
  },
  {
    id: 4,
    title: 'Electricity bill paid',
    date: '20th May 2022',
    description: 'Charges applied on credit card',
    amount: '1050.50',
    type: 'debit'
  }
])
</script>
