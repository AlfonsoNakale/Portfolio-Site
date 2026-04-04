<template>
  <section id="Insights" class="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
    <h3 class="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-400">Insights</h3>
    <div class="mt-6 grid gap-6 grid-cols-1 lg:grid-cols-2">
      <NuxtLink
        v-for="project in visibleProjects"
        :key="project.slug"
        :to="`/projects/${project.slug}`"
        class="block group"
      >
        <article
          class="glass glass-hover rounded-2xl p-4 transition-all duration-500 hover:-translate-y-2"
        >
          <div class="relative overflow-hidden rounded-xl mb-4 aspect-video border border-slate-800/50">
            <img 
              v-if="project.image" 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div v-else class="w-full h-full bg-slate-800/50 flex items-center justify-center">
              <Icon name="ri:code-s-slash-line" class="w-12 h-12 text-slate-700" />
            </div>
            <div class="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <span class="text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center">
                View Project <Icon name="ri:arrow-right-up-line" class="ml-1 w-3 h-3" />
              </span>
            </div>
          </div>
          
          <h4 class="font-bold text-lg text-white group-hover:text-emerald-400 transition-colors duration-300">
            {{ project.title }}
          </h4>
          <p class="mt-2 text-sm text-slate-400 line-clamp-2 leading-relaxed truncate">
            {{ project.description }}
          </p>
          
          <div class="mt-4 flex flex-wrap gap-2">
            <span 
              v-for="tag in project.tech" 
              :key="tag"
              class="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-tight"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </NuxtLink>
    </div>
    <div v-if="canLoadMore" class="mt-4 sm:mt-6 text-center">
      <button 
        @click="loadMore"
        class="w-full text-xs sm:text-sm glass text-emerald-400 px-4 py-2 rounded-md border border-emerald-700 bg-emerald-600/10 hover:bg-emerald-600/20 transition-colors duration-200 cursor-pointer"
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
