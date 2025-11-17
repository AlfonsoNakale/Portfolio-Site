<template>
  <transition name="fade">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-slate-700 hover:bg-emerald-500 text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-400"
      aria-label="Scroll to top"
    >
      <Icon icon="ri:arrow-up-s-line" class="w-6 h-6" />
    </button>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

const isVisible = ref(false)

const handleScroll = () => {
  // Show button after scrolling down 400px
  if (window.scrollY > 400) {
    isVisible.value = true
  } else {
    isVisible.value = false
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
