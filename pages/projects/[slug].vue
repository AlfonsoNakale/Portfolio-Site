<template>
  <div class="min-h-screen bg-white text-slate-600 selection:bg-emerald-500/30 selection:text-emerald-900">
    <!-- Ambient Background Effect (consistent with index.vue) -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden opacity-20 -z-10">
      <div class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-emerald-500/20 blur-[120px] animate-pulse"></div>
      <div class="absolute top-[40%] -right-[10%] w-[35%] h-[35%] rounded-full bg-blue-500/20 blur-[120px] animate-pulse [animation-delay:2s]"></div>
      <div class="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-slate-500/20 blur-[120px] animate-pulse [animation-delay:4s]"></div>
    </div>

    <!-- Reading Progress Bar -->
    <div class="fixed top-0 left-0 w-full h-[2px] bg-slate-900/5 z-50">
      <div 
        class="h-full bg-emerald-500 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
        :style="{ width: `${scrollProgress}%` }"
      ></div>
    </div>

    <div class="mx-auto w-full max-w-5xl px-6 py-6 lg:px-12">
      <!-- Back Button -->
      <NuxtLink 
        to="/" 
        class="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-emerald-600 transition-all duration-300 mb-4"
      >
        <Icon name="ri:arrow-left-line" class="w-3 h-3 transition-transform group-hover:-translate-x-1" />
        Back to Overview
      </NuxtLink>
      
      <!-- Loading State -->
      <div v-if="pending" class="space-y-8 animate-pulse">
        <div class="h-10 bg-slate-200 rounded-lg w-3/4"></div>
        <div class="h-6 bg-slate-200 rounded-lg w-1/2"></div>
        <div class="aspect-video bg-slate-200 rounded-2xl w-full"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error || !project" class="text-center py-20">
        <Icon name="ri:error-warning-line" class="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <h1 class="text-2xl font-bold text-slate-900">Project not found</h1>
        <p class="mt-2 text-slate-600">The project you are looking for does not exist or has been moved.</p>
        <NuxtLink to="/" class="mt-8 inline-block px-6 py-2 bg-emerald-500 text-white font-bold rounded-full">Return Home</NuxtLink>
      </div>

      <!-- Project Content (Split Header) -->
      <div v-else class="space-y-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <!-- Text Content -->
          <div class="lg:col-span-7 space-y-4">
            <h1 class="text-3xl sm:text-4xl md:text-4xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              {{ project.title }}
            </h1>
            
            <div class="flex flex-wrap gap-1.5">
              <span 
                v-for="tech in project.tech" 
                :key="tech"
                class="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-bold text-emerald-700 uppercase tracking-tight"
              >
                {{ tech }}
              </span>
            </div>

            <p class="text-sm md:text-base text-slate-600 leading-relaxed font-medium max-w-2xl">
              {{ project.description }}
            </p>

            <div class="flex items-center gap-4 pt-2">
              <NuxtLink
                v-if="project.externalUrl"
                :to="project.externalUrl"
                target="_blank"
                class="group relative overflow-hidden flex items-center rounded-md border border-emerald-200 bg-emerald-50 px-6 py-2.5 text-sm text-emerald-700 hover:bg-emerald-100 transition-colors duration-200"
              >
                <Icon name="ri:external-link-line" class="mr-2 w-3.5 h-3.5" />
                Live Preview
              </NuxtLink>
            </div>
          </div>

          <!-- Hero Image -->
          <div v-if="project.image" class="lg:col-span-5 relative group order-first lg:order-last">
            <div class="absolute -inset-2  blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div class="relative overflow-hidden rounded-xl border border-slate-900/10 shadow-sm">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700"
              >
            </div>
          </div>
        </div>

        <!-- Markdown Content -->
        <div class="prose prose-sm max-w-none">
          <ContentRenderer :value="project" />
        </div>
        
        <!-- Share Section -->
        <div class="mt-6 pt-6 border-t border-slate-900/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <SocialShareButtons
              :title="project.title"
              :description="project.description"
              :url="shareUrl"
            />
          </div>
        </div>

        <!-- Other Projects Navigation -->
        <section class="pt-8">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">Other Projects</h2>
            <NuxtLink to="/#projects" class="text-xs font-bold text-slate-500 hover:text-emerald-600 transition-colors uppercase tracking-widest flex items-center gap-1.5">
              View All <Icon name="ri:arrow-right-line" class="w-2.5 h-2.5" />
            </NuxtLink>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NuxtLink
              v-for="otherProject in projects.slice(0, 3)"
              :key="otherProject.slug"
              :to="`/projects/${otherProject.slug}`"
              class="block group"
            >
              <article class="bg-white border border-slate-200 shadow-sm hover:shadow-md rounded-2xl p-4 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-200 h-full flex flex-col">
                <div class="relative overflow-hidden rounded-xl mb-4 aspect-video border border-slate-200">
                  <img 
                    v-if="otherProject.image" 
                    :src="otherProject.image" 
                    :alt="otherProject.title" 
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div v-else class="w-full h-full bg-slate-100 flex items-center justify-center">
                    <Icon name="ri:code-s-slash-line" class="w-12 h-12 text-slate-400" />
                  </div>
                  <div class="absolute inset-0 bg-linear-to-t from-white/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <span class="text-emerald-600 text-xs font-bold uppercase tracking-wider flex items-center">
                      View Project <Icon name="ri:arrow-right-up-line" class="ml-1 w-3 h-3" />
                    </span>
                  </div>
                </div>
                
                <h4 class="font-bold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                  {{ otherProject.title }}
                </h4>
                <p class="mt-2 text-sm text-slate-700 line-clamp-2 leading-relaxed grow truncate">
                  {{ otherProject.description }}
                </p>
                
                <!--<div class="mt-4 flex flex-wrap gap-2">
                  <span 
                    v-for="tag in otherProject.tech" 
                    :key="tag"
                    class="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-tight"
                  >
                    {{ tag }}
                  </span>
                </div>-->
              </article>
            </NuxtLink>
          </div>
        </section>
      </div>
    </div>

    <footer class="mt-12 pt-8 pb-12 border-t border-slate-900/5">
      <div class="mx-auto max-w-5xl px-6 lg:px-12">
        <Footer />
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useAsyncData, useHead } from '#imports'

const route = useRoute()
const slug = route.params.slug as string

// Scroll Progress Tracking
const scrollProgress = ref(0)
const updateScrollProgress = () => {
  const scrolled = window.scrollY
  const height = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = (scrolled / height) * 100
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
  updateScrollProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})

// Use queryCollection to get both metadata and content
const { data: projectDoc, pending, error } = await useAsyncData(`project-${slug}`, () => 
  queryCollection('content').path(`/projects/${slug}`).first()
)

// Fetch all projects for the "Other projects" section
const { data: allProjectsData } = await useAsyncData('all-projects', () => 
  queryCollection('content').all()
)

const projects = computed(() => {
  if (!allProjectsData.value) return []
  return allProjectsData.value
    .filter(p => p.path.startsWith('/projects/') && p.path !== `/projects/${slug}`)
    .map(p => {
      const raw = p as any
      return {
        ...p,
        slug: p.path.split('/').pop() || '',
        tech: raw.tech || raw.meta?.tech || [],
        image: raw.image || raw.meta?.image || '',
        externalUrl: raw.externalUrl || raw.meta?.externalUrl || ''
      }
    })
})

// Combined current project data
const project = computed(() => {
  const doc = projectDoc.value as any
  if (!doc) return null
  return {
    ...doc,
    slug: slug,
    tech: doc.tech || doc.meta?.tech || [],
    image: doc.image || doc.meta?.image || '',
    externalUrl: doc.externalUrl || doc.meta?.externalUrl || ''
  }
})

// Generate share URL
const shareUrl = computed(() => {
  if (import.meta.client) {
    return window.location.href
  }
  return `https://alfonso-nakale.com/projects/${slug}`
})

useHead(() => {
  const siteUrl = import.meta.client ? window.location.origin : 'https://alfonso-nakale.com'
  const title = project.value ? `${project.value.title} · Alfonso Nakale` : 'Project Not Found'
  const description = project.value?.description || 'Project details'
  const image = project.value?.image
  const url = `${siteUrl}/projects/${slug}`

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'article' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ]
  }
})
</script>
