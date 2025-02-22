<template>
  <Modal :is-open="isOpen" title="New Card" @close="close">
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">
          {{ formData.name.label }}
          <span v-if="formData.name.isRequired" class="text-red-500">*</span>
        </label>
        <input
          v-model="formData.name.value"
          type="text"
          :placeholder="formData.name.placeholder"
          class="mt-1 w-full border border-gray-300 p-2 text-primary"
        />
        <span v-if="formData.name.error" class="text-sm text-red-500">{{ formData.name.error }}</span>
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">
          {{ formData.bankName.label }}
          <span v-if="formData.bankName.isRequired" class="text-red-500">*</span>
        </label>
        <input
          v-model="formData.bankName.value"
          type="text"
          :placeholder="formData.bankName.placeholder"
          class="mt-1 w-full border border-gray-300 p-2 text-primary"
          :required="formData.bankName.isRequired"
        />
        <span v-if="formData.bankName.error" class="text-sm text-red-500">{{ formData.bankName.error }}</span>
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">
          {{ formData.cardType.label }}
          <span v-if="formData.cardType.isRequired" class="text-red-500">*</span>
        </label>
        <select
          v-model="formData.cardType.value"
          class="mt-1 w-full border border-gray-300 p-2 text-primary"
          :required="formData.cardType.isRequired"
        >
          <option value="" disabled>Select Card Type</option>
          <option value="credit">Credit Card</option>
          <option value="debit">Debit Card</option>
        </select>
        <span v-if="formData.cardType.error" class="text-sm text-red-500">{{ formData.cardType.error }}</span>
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">
          {{ formData.cardNumber.label }}
          <span v-if="formData.cardNumber.isRequired" class="text-red-500">*</span>
        </label>
        <input
          v-model="formData.cardNumber.value"
          type="text"
          :maxlength="16"
           @keypress="allowOnlyNumbers"
          :minlength="16"
          :placeholder="formData.cardNumber.placeholder"
          class="mt-1 w-full border border-gray-300 p-2 text-primary"
          :required="formData.cardNumber.isRequired"
        />
        <span v-if="formData.cardNumber.error" class="text-sm text-red-500">{{ formData.cardNumber.error }}</span>
      </div>

      <div class="flex gap-4 mb-4">
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700">
            {{ formData.validTill.label }}
            <span v-if="formData.validTill.isRequired" class="text-red-500">*</span>
          </label>
          <input
            v-model="formData.validTill.value"
            type="text"
            :placeholder="formData.validTill.placeholder"
            maxlength="5"
            class="mt-1 w-full border border-gray-300 p-2 text-primary"
            @input="formatExpiryDate"
            @keypress="validateExpiryInput"
            :required="formData.validTill.isRequired"
          />
          <span v-if="formData.validTill.error" class="text-sm text-red-500">{{ formData.validTill.error }}</span>
        </div>
        <div class="w-24">
          <label class="block text-sm font-medium text-gray-700">
            {{ formData.cvv.label }}
            <span v-if="formData.cvv.isRequired" class="text-red-500">*</span>
          </label>
          <input
            v-model="formData.cvv.value"
            type="text"
            @keypress="allowOnlyNumbers"
            maxlength="3"
            :placeholder="formData.cvv.placeholder"
            class="mt-1 w-full border border-gray-300 p-2 text-primary"
            :required="formData.cvv.isRequired"
          />
          <span v-if="formData.cvv.error" class="text-sm text-red-500">{{ formData.cvv.error }}</span>
        </div>
      </div>

      <div class="space-y-2 mb-4">
        <div class="flex items-center">
          <input
            v-model="formData.isDefault.value"
            type="checkbox"
            class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            :required="formData.isDefault.isRequired"
          />
          <label class="ml-2 text-sm text-primary">Set this card as Default</label>
        </div>
        <div class="flex items-center">
          <input
            v-model="formData.addToGPay.value"
            type="checkbox"
            class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            :required="formData.addToGPay.isRequired"
          />
          <label class="ml-2 text-sm text-primary">Add this card to GPay?</label>
        </div>
      </div>
      
      <div class="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          @click="close"
          class="px-4 py-0.5 text-sm text-primary font-medium bg-[#C2E2EE66] border border-gray-300"
        >
          Cancel
        </button>
        <button
          type="button"
          @click="handleSubmit"
          class="px-4 py-0.5 text-sm font-medium text-white bg-primary"
        >
          Submit
        </button>
      </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import Modal from '../small/Modal.vue'
import { useCardStore } from '@/store/card'
import type { CardFormData } from '@/types/card'
import { checkError, allowOnlyNumbers } from '@/composable/Validation.ts'
import { useToast } from 'vue-toastification'
const toast = useToast()
const cardStore = useCardStore()
const creditCards = computed(() => cardStore.getCreditCards)
const debitCards = computed(() => cardStore.getDebitCards)
const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const defaultFormState: CardFormData = {
  name: {
    value: '',
    isRequired: true,
    error: '',
    label: 'Name',
    placeholder: 'i.e. James Carlon'
  },
  bankName: {
    value: '',
    isRequired: true,
    error: '',
    label: 'Bank Name',
    placeholder: 'i.e. HDFC BANK'
  },
  cardType: {
    value: '',
    isRequired: true,
    error: '',
    label: 'Card Type',
    placeholder: 'Select Card Type'
  },
  cardNumber: {
    value: '',
    isRequired: true,
    error: '',
    label: 'Card Number',
    placeholder: 'i.e. 7754 1542 6584 4875'
  },
  validTill: {
    value: '',
    isRequired: true,
    error: '',
    label: 'Valid Till',
    placeholder: 'MM/YY'
  },
  cvv: {
    value: '',
    isRequired: true,
    error: '',
    label: 'CVV',
    placeholder: '***'
  },
  isDefault: {
    value: false,
    isRequired: false,
    error: '',
    label: 'Set this card as Default',
    placeholder: ''
  },
  addToGPay: {
    value: false,
    isRequired: false,
    error: '',
    label: 'Add this card to GPay?',
    placeholder: ''
  }
}

const formData = ref<CardFormData>({ ...defaultFormState })
const formatExpiryDate = (event: Event) => {
  const input = event.target as HTMLInputElement
  let value = input.value.replace(/\D/g, '')
  
  if (value.length >= 2) {
    const month = parseInt(value.substring(0, 2))
    if (month > 12) value = '12' + value.slice(2)
    value = value.slice(0, 2) + '/' + value.slice(2)
  }
  
  formData.value.validTill.value = value
}

const validateExpiryInput = (event: KeyboardEvent) => {
  const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Delete', 'Tab']
  if (!allowedKeys.includes(event.key)) {
    event.preventDefault()
  }
}
const resetForm = () => {
  Object.keys(formData.value).forEach(key => {
    formData.value[key as keyof CardFormData].value = ''
    formData.value[key as keyof CardFormData].error = ''
  })
  formData.value.isDefault.value = false
  formData.value.addToGPay.value = false
}

const handleSubmit = async () => {
  const isValid = await checkError(formData.value)
  if (isValid) {
    if(formData.value.isDefault.value){
      const defaultCard = (formData.value.cardType.value === 'credit' ? creditCards : debitCards).value.find(card => card.isDefault)
      if (defaultCard) {
        toast.error(`You can only have one default ${formData.value.cardType.value} card`)
        return;
      }
    }
    const cardDetails = {
      id: uuidv4(),
      holderName: formData.value.name.value,
      number: formData.value.cardNumber.value,
      validTill: formData.value.validTill.value,
      bankName: formData.value.bankName.value,
      cardType: formData.value.cardType.value,
      isActive: true,
      isArchived: false,
      isDefault: formData.value.isDefault.value,
      addToGPay: formData.value.addToGPay.value
    }
    cardStore.addCard(cardDetails)
    toast.success('Card added successfully');
    resetForm()
    close()
  }
}

const close = () => {
  emit('close')
}
</script> 