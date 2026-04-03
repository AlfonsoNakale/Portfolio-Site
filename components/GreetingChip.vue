<template>
  <div class="relative inline-block">
    <!-- Greeting Chip -->
    <button
      ref="chipRef"
      @click="toggleGreeting"
      @mouseenter="showGreeting"
      @mouseleave="scheduleHideGreeting"
      class="group inline-flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-slate-800 border border-emerald-500/20 hover:border-emerald-500/40 rounded-full transition-all duration-500 cursor-pointer backdrop-blur-xl relative z-20 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.3)]"
      :class="{ 
        'ring-2 ring-emerald-500/50 scale-105': isVisible,
        'animate-pulse shadow-[0_0_25px_rgba(16,185,129,0.4)]': isNudging 
      }"
    >
      <div v-if="isNudging" class="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping pointer-events-none"></div>
      <Icon 
        name="ri:hand-heart-line" 
        class="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300" 
      />
      <span class="text-[10px] font-black text-slate-200 group-hover:text-white transition-colors duration-300 uppercase tracking-[0.15em]">
        {{ isReturnedUser ? 'Welcome Back' : getTimeOfDay() }}
      </span>
    </button>

    <!-- Greeting Alert (Improved Positioning: expand inwards) -->
    <Transition
      enter-active-class="transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)"
      enter-from-class="opacity-0 scale-90 -translate-y-4"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-90 -translate-y-4"
    >
      <div
        v-if="isVisible"
        ref="alertRef"
        @mouseenter="cancelHideGreeting"
        @mouseleave="scheduleHideGreeting"
        class="absolute top-[calc(100%+12px)] right-0 w-[260px] sm:w-[320px] z-50 bg-slate-900 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.1)] origin-top-right backdrop-blur-2xl"
      >
        <!-- Arrow pointing up (pinned to right-ish to match chip) -->
        <div class="absolute -top-1.5 right-6 w-3 h-3 bg-slate-900 border-t border-l border-emerald-500/30 rotate-45"></div>
        
        <div class="relative flex items-start gap-4">
          <div class="flex-1 min-w-0">
            <h4 class="text-sm font-black text-white mb-1.5 tracking-tight uppercase italic">
              {{ currentTitle || getGreetingTitle() }}
            </h4>
            <p class="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-semibold">
              {{ currentMessage || getGreetingMessage() }}
            </p>
          </div>
          <button 
            @click.stop="isVisible = false" 
            class="text-slate-600 hover:text-white transition-colors p-1 -mt-1 -mr-1"
            aria-label="Close"
          >
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const isNudging = ref(false)
const isReturnedUser = ref(false)
const chipRef = ref<HTMLElement>()
const alertRef = ref<HTMLElement>()
const currentTitle = ref('')
const currentMessage = ref('')
let hideTimeout: any = null
let nudgeTimeout: any = null

const getTimeOfDay = () => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good Morning'
  if (hour < 17) return 'Good Afternoon'
  return 'Good Evening'
}

const getGreetingIcon = () => {
  const hour = new Date().getHours()
  if (hour < 12) return 'ri:sun-line'
  if (hour < 17) return 'ri:sun-cloudy-line'
  return 'ri:moon-line'
}

const getGreetingTitle = () => {
  if (isReturnedUser.value && !currentTitle.value) return 'Welcome Back!'
  const hour = new Date().getHours()
  return hour < 12 ? 'Rise and Code!' : (hour < 17 ? 'Afternoon Vibes!' : 'Night Owl Mode!')
}

const getGreetingMessage = () => {
  if (isReturnedUser.value && !currentMessage.value) {
    return "Great to see you again! Feel free to explore my latest projects and updates."
  }
  return "Thanks for stopping by! I'm Alfonso, a developer focused on building intuitive digital experiences."
}

const showGreeting = () => {
  if (isNudging.value) stopNudge()
  cancelHideGreeting()
  isVisible.value = true
}

const toggleGreeting = () => {
  if (isNudging.value) stopNudge()
  isVisible.value = !isVisible.value
  if (isVisible.value) cancelHideGreeting()
  else scheduleHideGreeting()
}

const scheduleHideGreeting = () => {
  hideTimeout = setTimeout(() => {
    isVisible.value = false
  }, 800) // Increased for better UX
}

const cancelHideGreeting = () => {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
    hideTimeout = null
  }
}

const stopNudge = () => {
  isNudging.value = false
  if (nudgeTimeout) clearTimeout(nudgeTimeout)
}

const triggerNudge = (title: string, message: string) => {
  if (isVisible.value) return 
  currentTitle.value = title
  currentMessage.value = message
  isNudging.value = true
  nudgeTimeout = setTimeout(() => {
    isNudging.value = false
  }, 10000)
}

onMounted(() => {
  const hasVisited = localStorage.getItem('portfolio_visited')
  if (hasVisited) isReturnedUser.value = true
  localStorage.setItem('portfolio_visited', 'true')

  const handleClickOutside = (e: MouseEvent) => {
    if (isVisible.value && !chipRef.value?.contains(e.target as Node) && !alertRef.value?.contains(e.target as Node)) {
      isVisible.value = false
    }
  }

  const handleScroll = () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    if (scrollPercent > 20 && scrollPercent < 30 && !localStorage.getItem('nudge_projects')) {
      triggerNudge("Check out my Insights!", "Take a look at some of my recent insights below.")
      localStorage.setItem('nudge_projects', 'true')
    }
    if (scrollPercent > 80 && !localStorage.getItem('nudge_footer')) {
      triggerNudge("Let's collaborate!", "I'd love to hear about your next big idea.")
      localStorage.setItem('nudge_footer', 'true')
    }
  }

  document.addEventListener('click', handleClickOutside)
  window.addEventListener('scroll', handleScroll)

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    window.removeEventListener('scroll', handleScroll)
    if (hideTimeout) clearTimeout(hideTimeout)
    if (nudgeTimeout) clearTimeout(nudgeTimeout)
  })
})
</script>
