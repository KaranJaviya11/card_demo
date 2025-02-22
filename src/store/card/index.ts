import { defineStore } from 'pinia'
import type { CardDetails } from '@/types/card'

interface CardState {
  cards: CardDetails[];
}

export const useCardStore = defineStore('card', {
  state: (): CardState => ({
    cards: JSON.parse(localStorage.getItem('cards') || '[]')
  }),
  
  actions: {
    initializeCards() {
      const cards = JSON.parse(localStorage.getItem('cards') || '[]')
      this.cards = cards
    },

    addCard(card: CardDetails) {
      this.cards.push(card)
      localStorage.setItem('cards', JSON.stringify(this.cards))
    },
     
    updateCard(card: CardDetails) {
      const index = this.cards.findIndex(c => c.id === card.id)
      if (index !== -1) {
        this.cards[index] = card
        localStorage.setItem('cards', JSON.stringify(this.cards))
      }
    }
  },

  getters: {
    getAllCards: (state: CardState) => state.cards,
    getCreditCards: (state: CardState) => state.cards.filter(card => card.cardType === 'credit'),
    getDebitCards: (state: CardState) => state.cards.filter(card => card.cardType === 'debit')
  }
}) 