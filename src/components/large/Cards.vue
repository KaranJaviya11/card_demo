<template>
    <div>
        <div>
            <span class="text-textPrimary font-medium relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-[70%] after:h-[1px] after:bg-textPrimary mb-2">
                Credit Cards
            </span>
            <div v-if="creditCards.length > 0">
                <CardScroll :total-slides="creditCards.length">
                    <div v-for="card in creditCards" :key="card.number" class="w-full flex-shrink-0">
                        <CardWrapper :card="card" />
                    </div>
                </CardScroll>
            </div>
            <div v-else class="text-center text-secondary py-10">
                No Credit Cards Found
            </div>
        </div>
        <div class="mt-4">
            <span class="text-textPrimary font-medium relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-[70%] after:h-[1px] after:bg-textPrimary mb-2">
                Debit Cards
            </span>
            <div v-if="debitCards.length > 0">
                <CardScroll :total-slides="debitCards.length">
                    <div v-for="card in debitCards" :key="card.number" class="w-full flex-shrink-0">
                        <CardWrapper :card="card" />
                    </div>
                </CardScroll>
            </div>
            <div v-else class="text-center text-secondary py-10">
                No Debit Cards Found
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCardStore } from '@/store/card'
import CardScroll from '@/components/small/CardScroll.vue'
import CardWrapper from '../medium/CardWrapper.vue'

const cardStore = useCardStore()

const creditCards = computed(() => cardStore.getCreditCards)
const debitCards = computed(() => cardStore.getDebitCards)
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: #0FA1DB !important;
  width: 30px !important;
  height: 30px !important;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 20px !important;
}
</style>

