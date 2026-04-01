<template>
  <section id="projects" class="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
    <h3 class="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-400">Projects</h3>
    <div class="mt-3 sm:mt-4 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
      <NuxtLink
        v-for="project in visibleProjects"
        :key="project.slug"
        :to="`/projects/${project.slug}`"
        class="block"
      >
        <article
          v-glow
          class="mouse-glow rounded-md border border-slate-800 bg-slate-900/40 p-3 sm:p-4 transition hover:border-slate-700"
        >
        <img v-if="project.image" :src="project.image" :alt="project.title" class="w-full h-32 sm:h-40 object-cover rounded-md mb-2 sm:mb-3 border border-slate-900" />
          <h4 class="font-semibold text-sm sm:text-base text-slate-100 leading-snug">{{ project.title }}</h4>
          <p class="mt-1 text-xs sm:text-sm text-slate-400 line-clamp-2 sm:truncate leading-relaxed">{{ project.description }}</p>
          <div class="mt-2 text-xs text-slate-500 leading-relaxed">{{ project.tech.join(' · ') }}</div>
        </article>
      </NuxtLink>
    </div>
    <div v-if="canLoadMore" class="mt-4 sm:mt-6 text-center">
      <button 
        @click="loadMore"
        class="w-full text-xs sm:text-sm text-slate-400 hover:text-slate-200 transition-colors duration-200 px-4 py-2 rounded-md border border-slate-800 hover:border-slate-700 bg-slate-900/40 cursor-pointer"
      >
        Load More
      </button>
    </div>
  </section>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const { data: projectsData, pending } = await useAsyncData('projects', () => 
  queryCollection('content').all()
)

// Mapping collection data to match the expected project structure
const projects = computed(() => {
  if (!projectsData.value) return []
  return projectsData.value
    .filter(p => p.path.startsWith('/projects/'))
    .map(p => {
      const raw = p as any
      return {
        ...p,
        slug: p.path.split('/').pop() || '',
        tech: raw.tech || raw.meta?.tech || [],
        image: raw.image || raw.meta?.image || ''
      }
    })
})

const visibleCount = ref(4)

const visibleProjects = computed(() => {
  return projects.value.slice(0, visibleCount.value)
})

const canLoadMore = computed(() => {
  return visibleCount.value < projects.value.length
})

const loadMore = () => {
  visibleCount.value += 2
}
</script>
