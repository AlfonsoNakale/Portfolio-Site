<template>
  <section id="experience" class="scroll-mt-24">
    <h3 class="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-400">
      Experience
    </h3>
    <ul class="mt-8 space-y-4">
      <li 
        v-for="exp in experience" 
        :key="exp.role" 
        class="glass glass-hover rounded-xl p-6 flex flex-col gap-2 relative overflow-hidden group border border-slate-800/50"
      >
        <!--<div class="absolute top-0 left-0 w-1 h-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>-->
        <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h4 class="font-bold text-white text-lg tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
            {{ exp.role }}
          </h4>
          <span class="text-xs font-bold text-slate-500 group-hover:text-emerald-500/80 uppercase tracking-widest transition-colors duration-300">
            {{ exp.period }}
          </span>
        </div>
        <p class="text-sm text-slate-400 leading-relaxed max-w-2xl group-hover:text-slate-300 transition-colors duration-300">
          {{ exp.description }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const experience = [
  {
    role: 'Web Developer',
    period: '2024 — Present',
    description: 'Map, Develop, Debug solutions that inform strategies and meet user needs. Expert maintenance and building of web presences using Nuxt, WordPress and Webflow.'
  },
  {
    role: 'Curriculum Advisory Board Member',
    period: '2025 — 2029',
    description: "Supporting the development of Namibia's professionals in the field of Advanced Web Technologies and Big Data Technologies."
  },
  {
    role: 'Digital & Dev Specialist',
    period: '2022 — 2024',
    description: 'Front-end web development, maintenance, and updating of professional web presences with a focus on performance and UI/UX.'
  },
  {
    role: 'Digital Change - Projects',
    period: '2020 — 2021',
    description: 'Identifying change needs and scope, including coordinating change management activities for large-scale digital transformations.'
  }
]
</script>
