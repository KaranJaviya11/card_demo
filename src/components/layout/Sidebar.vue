<template>
  <aside 
    class="fixed lg:relative top-0 left-0 h-screen overflow-hidden bg-primary text-white p-4 transition-transform duration-300 z-50"
    :class="[
      isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
      'w-[280px]'
    ]"
  >
    <div class="h-full overflow-y-hidden">
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-2">
          <img src="@/assets/Images/company-logo.png" alt="Giriraj Digital" />
        </div>
        <div class="text-xs mt-8 text-center">
          Software & Web Development Company - Umbraco Gold Partner
        </div>
      </div>

      <nav class="space-y-2">
        <div class="flex items-center gap-3 p-3 transition-colors border-b border-[#6A94A5]">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
              <path d="M3 4.57143V11C3 12.1046 3.89543 13 5 13H11C12.1046 13 13 12.1046 13 11V4.57143M3 4.57143L1 6M3 4.57143L8 1L13 4.57143M13 4.57143L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Home</span>
        </div>

        <div class="flex justify-between items-center gap-3 p-3 border-b border-[#6A94A5]">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                <path d="M1 6H15M7 10L5 10M4.2 13H11.8C12.9201 13 13.4802 13 13.908 12.782C14.2843 12.5903 14.5903 12.2843 14.782 11.908C15 11.4802 15 10.9201 15 9.8V4.2C15 3.0799 15 2.51984 14.782 2.09202C14.5903 1.71569 14.2843 1.40973 13.908 1.21799C13.4802 1 12.9201 1 11.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2V9.8C1 10.9201 1 11.4802 1.21799 11.908C1.40973 12.2843 1.71569 12.5903 2.09202 12.782C2.51984 13 3.07989 13 4.2 13Z" stroke="#0FA1DB" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <span class="text-textPrimary font-bold">Cards</span>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6L11 6M11 6L6.71429 1M11 6L6.71429 11" stroke="#0FA1DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

        <div class="flex items-center gap-3 p-3 border-b border-[#6A94A5]">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M9 4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4C15 5.65685 13.6569 7 12 7C10.3431 7 9 5.65685 9 4ZM9 4L1 4M7 12C7 13.6569 5.65685 15 4 15C2.34315 15 1 13.6569 1 12C1 10.3431 2.34315 9 4 9C5.65685 9 7 10.3431 7 12ZM7 12H15" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span>Transactions</span>
        </div>

        <div class="flex items-center gap-3 p-3 border-b border-[#6A94A5]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Settings</span>
        </div>
      </nav>

      <div class="absolute bottom-4">
        <button class="flex items-center gap-3 p-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M9 4V1H1M1 1V11L6 15V5L1 1ZM9 10H15M15 10L12 7M15 10L12 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </div>

    <button 
      @click="emit('update:isOpen', false)"
      class="absolute top-4 right-4 lg:hidden text-white"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </aside>

  <div 
    v-if="isOpen" 
    class="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
    @click="emit('update:isOpen', false)"
  ></div>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  'update:isOpen': [value: boolean]
}>()
</script>
