<template>
    <div class="sm:ml-20 mt-2">
      <div class="mt-4 grid grid-cols-2 gap-4 w-[200px] h-[180px] px-9 py-6 bg-[#C2E2EE] rounded-md">
        <div class="flex flex-col items-center space-y-1">
          <div class="bg-textPrimary p-3 rounded-full cursor-pointer" @click="lockCard">
            <lock-closed-icon class="h-3 w-3 text-white"/>
          </div>
          <span class="text-[12px] text-primary text-center font-sans">Lock Card</span>
        </div>
        <div class="flex flex-col items-center space-y-1">
          <div class="bg-textPrimary p-3 rounded-full cursor-pointer" @click="archiveCard">
            <archive-box-icon class="h-3 w-3 text-white" />
          </div>
          <span class="text-[12px] text-primary text-center font-sans">Archive</span>
        </div>
        <div class="flex flex-col items-center space-y-1">
          <div class="bg-textPrimary p-3 rounded-full cursor-pointer" @click="setDefaultCard">
            <check-icon class="h-3 w-3 text-white"/>
          </div>
          <span class="text-[12px] text-primary text-center font-sans">Set As Default</span>
        </div>
        <div class="flex flex-col items-center space-y-1">
            <img src="@/assets/Images/GpayIcon.svg" alt="GPay" class="h-9 w-9 cursor-pointer" @click="addToGPay"/>               
          <span class="text-[12px] text-primary text-center font-sans">Add to GPay</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { LockClosedIcon, ArchiveBoxIcon, CheckIcon } from '@heroicons/vue/24/outline'
  import type { CardDetails } from '@/types/card'
  import { useCardStore } from '@/store/card'
  import { computed } from 'vue'
  import { useToast } from 'vue-toastification'
  const toast = useToast()
  const cardStore = useCardStore()
  const creditCards = computed(() => cardStore.getCreditCards)
  const debitCards = computed(() => cardStore.getDebitCards)
  const props = defineProps<{
    card: CardDetails;
  }>()
  
  function lockCard(){
    console.log('lockCard',props.card)
    cardStore.updateCard({...props.card, isActive: !props.card.isActive})
    toast.success(`Card ${props.card.isActive ? 'locked' : 'unlocked'} successfully`);
  } 

  function archiveCard(){
    console.log('archiveCard',props.card)
    cardStore.updateCard({...props.card, isArchived: !props.card.isArchived})
    toast.success(`Card ${props.card.isArchived ? 'removed from archive' : 'archived'} successfully`);
  }

  function setDefaultCard(){
    console.log('setDefaultCard',props.card)
    if (!props.card.isDefault) {
      const defaultCard = (props.card.cardType === 'credit' ? creditCards : debitCards).value.find(card => card.isDefault)
      if (defaultCard) {
        toast.error(`You can only have one default ${props.card.cardType} card`)
        return;
      }
    }
    cardStore.updateCard({...props.card, isDefault: !props.card.isDefault})
    toast.success(`Card ${props.card.isDefault ? 'removed from default' : 'set as default'} successfully`);
  }

  function addToGPay(){
    console.log('addToGPay',props.card)
    cardStore.updateCard({...props.card, addToGPay: !props.card.addToGPay})
    toast.success(`Card ${props.card.addToGPay ? 'removed from GPay' : 'added to GPay'} successfully`);
  }
  
  </script>