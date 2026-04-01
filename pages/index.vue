<template>
  <div class="min-h-screen bg-slate-950 text-slate-300">
    <div class="mx-auto grid w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-12 md:grid-cols-[1fr_2fr] md:gap-16 md:px-16 md:py-16">
      <aside class="md:sticky md:top-24 self-start">
        <div class="space-y-4">
          <div class="mb-6 md:mb-10 text-center md:text-left">
            <!-- Bio image with greeting chip -->
            <div class="relative inline-block mb-6 md:mb-8">
              <img 
                id="bio-image_2"
                src="/public/bio-image/bio-image_2.jpg" 
                alt="Alfonso Nakale" 
                class="rounded-[35%] md:rounded-[15%] w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 border-3 border-slate-700 mx-auto md:mx-0"
              >
              <!-- Greeting chip positioned next to the image -->
              <div class="absolute -top-2 -right-2 md:-right-4">
                <GreetingChip />
              </div>
            </div>
            <h1 class="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-semibold text-white leading-tight">Alfonso Nakale</h1>
            <h2 class="mt-1 text-lg sm:text-xl text-slate-400">Web Developer</h2>
            <p class="mt-2 text-sm sm:text-base text-slate-400 leading-relaxed px-2 md:px-0">I believe technology should feel effortless.</p>
            <div class="mt-5 flex items-center gap-2">
      <!--<Icon icon="ri:file-pdf-2-line" class="w-6 h-6 text-slate-400 hover:text-slate-300" />-->
      <nuxtLink to="/Resume-web.pdf" class="inline-flex items-center rounded-md border border-emerald-700 bg-emerald-600/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-emerald-300 hover:bg-emerald-600/20 transition-colors duration-200" target="_blank">→ View Full Résumé</nuxtLink>
    </div>
          </div>
          <nav class="flex flex-col gap-1 text-center md:text-left">
            <NuxtLink to="#about" class="text-base sm:text-lg font-medium tracking-widest flex items-center uppercase gap-2 text-slate-400 hover:text-white transition-colors duration-200"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>About</NuxtLink>
            <NuxtLink to="#projects" class="text-base sm:text-lg font-medium tracking-widest flex items-center uppercase gap-2 text-slate-400 hover:text-white transition-colors duration-200"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>Projects</NuxtLink>
            <NuxtLink to="#experience" class="text-base sm:text-lg font-medium tracking-widest flex items-center uppercase gap-2 text-slate-400 hover:text-white transition-colors duration-200"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>Experience</NuxtLink>
          </nav>
        </div>
      </aside>

      <main class="space-y-12 md:space-y-16">
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <footer class="mt-12 md:mt-15">
            <Footer />
        </footer>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

// Reactive state
const isVisible = ref(false)
const chipRef = ref<HTMLElement>()
const alertRef = ref<HTMLElement>()
let hideTimeout: ReturnType<typeof setTimeout> | null = null

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
      "Hope you're having a fantastic start to your day!",
      "Nothing beats morning creativity and a fresh cup of coffee!",
      "Early bird gets the worm! Let's make some digital magic happen."
    ],
    afternoon: [
      "Hope your day is going great! Time for some afternoon inspiration and maybe a stretch break?",
      "Midday energy is perfect for tackling those exciting challenges.",
      "Afternoon is prime time for creative breakthroughs."
    ],
    evening: [
      "Evening browsing? The best time for exploring new ideas and getting inspired!",
      "Hope you're winding down nicely! Perfect time to check out some of mycreative work.",
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
  isVisible.value = true
}

const toggleGreeting = () => {
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
  
  document.addEventListener('click', handleClickOutside)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>

<style scoped>
/* Arrow pointing to bio image */
.before\:border-b-slate-800\/95::before {
  border-bottom-color: rgb(30 41 59 / 0.95);
}
</style>