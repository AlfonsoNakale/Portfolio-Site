<template>
  <div class="min-h-screen bg-slate-950 text-slate-300 selection:bg-emerald-500/30 selection:text-emerald-200">
    <!-- Ambient Background Effect -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden opacity-20 -z-10">
      <div class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-emerald-500/20 blur-[120px] animate-pulse"></div>
      <div class="absolute top-[40%] -right-[10%] w-[35%] h-[35%] rounded-full bg-blue-500/20 blur-[120px] animate-pulse [animation-delay:2s]"></div>
      <div class="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-slate-500/20 blur-[120px] animate-pulse [animation-delay:4s]"></div>
    </div>

    <!-- Main Grid Layout -->
    <div class="relative mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 md:grid-cols-[1.2fr_2fr] md:gap-12 md:px-12 md:py-12">
      
      <!-- Left Sidebar: Profile & Nav (STICKY CONTAINER) -->
      <aside class="order-1 md:order-0 px-1">
        <div class="md:sticky md:top-12 md:self-start space-y-12">
          <!-- Profile Card -->
          <div class="text-center md:text-left">
            <div class="relative inline-block mb-8 group">
              <div class="absolute inset-0 bg-emerald-500/20 rounded-[35%] md:rounded-[15%] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                id="bio-image"
                src="/public/bio-image/bio-image_2.jpg" 
                alt="Alfonso Nakale - Web Developer" 
                class="relative rounded-[35%] md:rounded-[15%] w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 border-4 border-slate-800 shadow-2xl transition-all duration-500 hover:scale-[1.02] grayscale-[20%] hover:grayscale-0"
              >
              <!-- Greeting chip -->
              <div class="absolute -top-3 -right-3 md:-right-5 scale-90 sm:scale-100 animate-fade-in-up">
                <GreetingChip />
              </div>
            </div>

            <!-- Intro Info -->
            <h1 class="text-3xl sm:text-4xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Alfonso <span class="text-emerald-400">Nakale</span>
            </h1>
            <p class="mt-3 text-lg sm:text-xl text-slate-400 font-medium">Web Developer</p>
            
            <div class="mt-8 flex justify-center md:justify-start">
              <NuxtLink 
                to="/Resume-web.pdf" 
                class="group glass relative overflow-hidden flex items-center rounded-md border border-emerald-700 bg-emerald-600/10 px-6 py-2.5 text-sm text-emerald-400 hover:bg-emerald-600/20 transition-colors duration-200"
                target="_blank"
              >
                <Icon name="ri:file-pdf-2-line" class="mr-2 w-4 h-4" />
                View Full Résumé
              </NuxtLink>
            </div>
          </div>

          <!-- Desktop Navigation with Scroll Spy -->
          <nav class="hidden md:flex flex-col gap-6">
            <NuxtLink 
              v-for="link in navLinks" 
              :key="link.id"
              :to="link.id" 
              class="group flex items-center gap-4 py-1.5 transition-all duration-300"
              :class="activeSection === link.id ? 'text-white' : 'text-slate-500 hover:text-slate-200'"
            >
              <div 
                class="h-[1px] transition-all duration-300 bg-emerald-500"
                :class="activeSection === link.id ? 'w-16' : 'w-8 group-hover:w-16 bg-slate-700 group-hover:bg-slate-500'"
              ></div>
              <span class="text-xs font-black uppercase tracking-[0.3em] transition-all duration-300">
                {{ link.name }}
               </span>
            </NuxtLink>
          </nav>
        </div>
      </aside>

      <!-- Right Main Content -->
      <main class="space-y-12 md:space-y-12">
        <section id="about" class="scroll-mt-12"><AboutSection /></section>
        <section id="projects" class="scroll-mt-12"><ProjectsSection /></section>
        <section id="experience" class="scroll-mt-12"><ExperienceSection /></section>
        
        <footer class="pt-12 border-t border-slate-800/50">
          <Footer />
        </footer>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScrollSpy } from '~/composables/useScrollSpy'

const navLinks = [
  { name: 'About', id: '#about' },
  { name: 'Insights', id: '#Insights' },
  { name: 'Experience', id: '#experience' }
]

const { activeSection } = useScrollSpy(['#about', '#Insights', '#experience'])
</script>