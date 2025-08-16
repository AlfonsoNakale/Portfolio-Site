<template>
  <div class="relative inline-block">
    <!-- Greeting Chip -->
    <button
      ref="chipRef"
      @click="toggleGreeting"
      @mouseenter="showGreeting"
      @mouseleave="scheduleHideGreeting"
      class="group inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800/80 hover:bg-slate-700/90 border border-slate-600/50 hover:border-slate-500/70 rounded-full transition-all duration-300 cursor-pointer backdrop-blur-sm"
      :class="{ 'ring-2 ring-emerald-400/50': isVisible }"
    >
      <Icon 
        icon="ri:hand-heart-line" 
        class="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform duration-200" 
      />
      <span class="text-xs font-medium text-slate-300 group-hover:text-white transition-colors duration-200">
        {{ getTimeOfDay() }}
      </span>
    </button>

    <!-- Greeting Alert with Arrow -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-95 translate-y-2"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 translate-y-2"
    >
      <div
        v-if="isVisible"
        ref="alertRef"
        @mouseenter="cancelHideGreeting"
        @mouseleave="scheduleHideGreeting"
        class="greeting-alert"
        :style="alertPosition"
      >
        <!-- Arrow pointing up to chip -->
        <div class="greeting-arrow"></div>
        
        <div class="flex items-start gap-3">
          <div class="flex-shrink-0 mt-0.5">
            <Icon 
              :icon="getGreetingIcon()" 
              class="w-5 h-5 text-emerald-400 animate-pulse" 
            />
          </div>
          <div class="flex-1">
            <p class="text-sm font-medium text-white mb-1">
              {{ getGreetingTitle() }}
            </p>
            <p class="text-xs text-slate-300 leading-relaxed">
              {{ getGreetingMessage() }}
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

// Reactive state
const isVisible = ref(false)
const chipRef = ref<HTMLElement>()
const alertRef = ref<HTMLElement>()
const alertPosition = ref({})
let hideTimeout: ReturnType<typeof setTimeout> | null = null

// Calculate position for fixed positioning
const calculateAlertPosition = () => {
  if (!chipRef.value) return
  
  const chipRect = chipRef.value.getBoundingClientRect()
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const alertWidth = 280 // max-w-xs equivalent in pixels (approx)
  const alertHeight = 120 // estimated alert height
  
  // Calculate ideal position (centered below chip)
  let top = chipRect.bottom + 12
  let left = chipRect.left + (chipRect.width / 2)
  
  // Ensure alert doesn't go off screen horizontally
  const leftBound = 16 // 1rem padding from edge
  const rightBound = viewportWidth - alertWidth - 16
  
  if (left - alertWidth / 2 < leftBound) {
    left = leftBound + alertWidth / 2
  } else if (left + alertWidth / 2 > viewportWidth - 16) {
    left = rightBound + alertWidth / 2
  }
  
  // Ensure alert doesn't go off screen vertically
  if (top + alertHeight > viewportHeight - 16) {
    // Position above chip if no room below
    top = chipRect.top - alertHeight - 12
  }
  
  // Calculate arrow offset based on chip position vs alert position
  const arrowOffset = chipRect.left + (chipRect.width / 2) - left
  
  alertPosition.value = {
    position: 'fixed',
    top: `${top}px`,
    left: `${left}px`,
    transform: 'translateX(-50%)',
    zIndex: 9999,
    '--arrow-offset': `${arrowOffset}px`
  }
}

// Time-based greeting logic
const getTimeOfDay = () => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Morning'
  if (hour < 17) return 'Afternoon'
  return 'Evening'
}

const getGreetingIcon = () => {
  const hour = new Date().getHours()
  if (hour < 12) return 'ri:sun-line'
  if (hour < 17) return 'ri:sun-cloudy-line'
  return 'ri:moon-line'
}

const getGreetingTitle = () => {
  const timeOfDay = getTimeOfDay()
  const greetings = {
    Morning: ['Rise and Code! ☕', 'Morning, Code Warrior! 🌅', 'Good Morning! 🌤️'],
    Afternoon: ['Afternoon! ☀️', 'Hey There! 🌞', 'Afternoon Vibes! 🌤️'],
    Evening: ['Evening! 🌙', 'Good Evening! ✨', 'Night Owl Mode! 🦉']
  }
  
  const options = greetings[timeOfDay as keyof typeof greetings]
  return options[Math.floor(Math.random() * options.length)]
}

const getGreetingMessage = () => {
  const hour = new Date().getHours()
  const messages = {
    morning: [
      "Hope you're having a fantastic start to your day! Ready to build something amazing?",
      "Nothing beats morning creativity and a fresh cup of coffee! What are we building today?",
      "Early bird gets the bug-free code! Let's make some digital magic happen."
    ],
    afternoon: [
      "Hope your day is going great! Time for some afternoon inspiration and maybe a stretch break?",
      "Midday energy is perfect for tackling those exciting challenges. What caught your eye?",
      "Afternoon is prime time for creative breakthroughs. Ready to dive into some cool projects?"
    ],
    evening: [
      "Evening browsing? The best time for exploring new ideas and getting inspired!",
      "Hope you're winding down nicely! Perfect time to check out some creative work.",
      "Night owl spotted! 🦉 The most creative minds work best when the world gets quiet."
    ]
  }
  
  let timeKey: keyof typeof messages
  if (hour < 12) timeKey = 'morning'
  else if (hour < 17) timeKey = 'afternoon'
  else timeKey = 'evening'
  
  const options = messages[timeKey]
  return options[Math.floor(Math.random() * options.length)]
}

// Interaction handlers
const showGreeting = () => {
  cancelHideGreeting()
  calculateAlertPosition()
  isVisible.value = true
}

const toggleGreeting = () => {
  if (!isVisible.value) {
    calculateAlertPosition()
  }
  isVisible.value = !isVisible.value
  if (isVisible.value) {
    cancelHideGreeting()
  } else {
    scheduleHideGreeting()
  }
}

const scheduleHideGreeting = () => {
  hideTimeout = setTimeout(() => {
    isVisible.value = false
  }, 300) // Small delay to allow moving to alert
}

const cancelHideGreeting = () => {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
    hideTimeout = null
  }
}

// Cleanup on unmount
onUnmounted(() => {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
  }
})

// Click outside to close
onMounted(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      isVisible.value &&
      chipRef.value &&
      alertRef.value &&
      !chipRef.value.contains(event.target as Node) &&
      !alertRef.value.contains(event.target as Node)
    ) {
      isVisible.value = false
    }
  }

  const handleScroll = () => {
    if (isVisible.value) {
      calculateAlertPosition()
    }
  }

  const handleResize = () => {
    if (isVisible.value) {
      calculateAlertPosition()
    }
  }
  
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
  })
})
</script>

<style scoped>
.greeting-alert {
  position: fixed;
  z-index: 9999;
  padding: 1rem;
  background-color: rgb(30 41 59 / 0.95);
  border: 1px solid rgb(71 85 105 / 0.7);
  border-radius: 0.5rem;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  backdrop-filter: blur(12px);
  width: 280px;
  max-width: calc(100vw - 2rem);
}

@media (max-width: 640px) {
  .greeting-alert {
    width: calc(100vw - 2rem);
    max-width: 320px;
    font-size: 0.875rem;
  }
}

.greeting-arrow {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(calc(-50% + var(--arrow-offset, 0px)));
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid rgb(30 41 59 / 0.95);
}

/* Ensure arrow stays within alert bounds on mobile */
@media (max-width: 640px) {
  .greeting-arrow {
    left: 50%;
    transform: translateX(-50%);
  }
}

/* Animation improvements for mobile */
@media (max-width: 640px) {
  .greeting-alert {
    animation-duration: 0.2s;
  }
}
</style>
