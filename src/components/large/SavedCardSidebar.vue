<template>
    <div>
        <div class="bg-gray-50 p-4 mb-4">
            <div class="flex items-center justify-between cursor-pointer">
                <div class="flex items-center space-x-3">
                    <img src="@/assets/Images/CardDetail.png" alt="Card" class="w-4 h-4">
                    <span class="text-sm font-medium text-textPrimary">Card Details</span>
                </div>
                <div class="h-6 w-6 bg-[#C2E2EE] rounded-full flex items-center justify-center">
                    <img src="@/assets/Images/ArrowIcon.png" alt="Arrow">
                </div>
            </div>
        </div>
        <div class="bg-gray-50 p-4">
            <div class="flex items-center justify-between cursor-pointer">
                <div class="flex items-center space-x-3">
                    <img src="@/assets/Images/TransectionIcon.png" alt="Transaction" class="w-4 h-4">
                    <span class="text-sm font-medium text-textPrimary">Today's Transactions</span>
                </div>
                <div class="h-6 w-6 bg-[#C2E2EE] rounded-full flex items-center justify-center">
                    <img src="@/assets/Images/ArrowIcon.png" alt="Arrow">
                </div>
            </div>

        </div>
        <div class="border border-t-0 border-gray-200 p-4">
            <div v-for="transaction in transactions" :key="transaction.id">
                <div class="flex items-center justify-between border-b border-textPrimary py-4">
                <div class="flex items-center space-x-4">
                    <div class="h-10 w-10 bg-[#C2E2EE] rounded-full flex items-center justify-center">
                        <img :src="getTracnsectionImag(transaction.type)" alt="Arrow">
                    </div>
                    <div>
                        <h3 class="font-medium text-sm text-gray-900">{{ transaction.title }}</h3>
                        <p class="text-[12px] text-gray-500">{{ transaction.date }}</p>
                        <p class="text-[12px] text-textPrimary">{{ transaction.description }}</p>
                    </div>
                </div>
                <span 
                    class="font-medium text-[12px]"
                    :class="transaction.type === 'credit' ? 'text-[#6ADB24]' : 'text-[#D12626]'"
                >
                    {{ transaction.type === 'credit' ? '+' : '-' }} ${{ transaction.amount }}
                </span>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import type { Transaction } from '@/types/card'
  const CreditImage = new URL('@/assets/Images/CreditIcon.png', import.meta.url).href
  const DebitImage = new URL('@/assets/Images/DebitIcon.png', import.meta.url).href
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

  const getTracnsectionImag = (type: string) => {
    return type === 'credit' ? CreditImage : DebitImage
  }
  </script>
  