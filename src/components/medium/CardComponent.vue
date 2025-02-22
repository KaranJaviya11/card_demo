<template>
  <div class="relative w-full max-w-[340px]">
    <div class="flex justify-end">
    <ShowCardButton
        v-model="showCardNumber"
    />
    </div>
    <div class="relative bg-[#0A2472] rounded-xl p-4 h-[180px] shadow-lg" :class="{'bg-secondary': card.isArchived || !card.isActive, 'bg-[#0FA1DB]': card.isDefault, 'bg-[#4086F4]': card.addToGPay}">
       <div class="flex justify-between">
        <div class="flex">
          <div class="flex justify-start mb-1" v-if="!card.isActive">
           <img src="@/assets/Images/LockIcon.png" alt="Lock" class="h-4 w-4" />
          </div>
          <div class="flex justify-start mb-1" v-else-if="card.isArchived">
           <img src="@/assets/Images/ArchiveIcon.png" alt="Archive" class="h-4 w-4" />
          </div>
          <div class="flex justify-start mb-1" v-else-if="card.isDefault">
           <img src="@/assets/Images/SetAsDefaultIcon.png" alt="Default" class="h-4 w-4" />
          </div>
          <div class="flex justify-start mb-1" v-else-if="card.addToGPay">
           <img src="@/assets/Images/GpayEnableIcon.png" alt="GPay" class="h-4 w-4" />
          </div>
        </div> 
        <div class="flex justify-end mb-1">
          <img src="@/assets/Images/bankLogo/hdfcBank.png" alt="HDFC Bank" class="h-4 w-24" />
        </div>
       </div>

      <div class="text-white text-xl mb-1">{{ card.holderName }}</div>

       <div class="flex justify-between">
           <div class="flex flex-col">
            <div class="mb-4">
                <span class="text-white text-[16px]">
                  <span v-if="showCardNumber">{{ formatCardNumber(card.number) }}</span>
                  <span v-else>•••• •••• •••• {{ card.number.slice(-4) }}</span>
                </span>
            </div>
             <div class="flex justify-between text-white/80">
               <div class="space-x-2">
                 <span class="text-white text-sm font-bold">Valid Till:</span>
                 <span>{{ card.validTill }}</span>
               </div>
               <div class="space-x-2 ml-3">
                 <span class="text-white text-sm font-bold">CVV:</span>
                 <span>•••</span>
               </div>
             </div>
           </div>
           <div class="bottom-6 right-6">
             <img 
               src="@/assets/Images/CardTypes/MasterCard.png" 
               alt="Card Type"
               class="h-12 w-auto"
             />
           </div>
       </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ShowCardButton from '../small/ShowCardButton.vue'
import type { CardDetails } from '@/types/card'

const props = defineProps<{
  card: CardDetails;
}>()

const showCardNumber = ref(false)


const formatCardNumber = (number: string): string => {
  return number.match(/.{1,4}/g)?.join(' ') || number
}
</script>