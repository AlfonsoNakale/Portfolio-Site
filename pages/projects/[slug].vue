<template>
  <div class="min-h-screen bg-slate-950 text-slate-300">
    <div class="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-12">
      <NuxtLink to="/" class="text-xs sm:text-sm text-slate-400 hover:text-slate-200 transition-colors duration-200">← Back to home</NuxtLink>
      
      <div v-if="pending" class="mt-6 sm:mt-8 md:mt-10">
        <div class="animate-pulse">
          <div class="h-6 sm:h-8 bg-slate-800 rounded w-3/4 mb-3 sm:mb-4" />
          <div class="h-3 sm:h-4 bg-slate-800 rounded w-1/2 mb-4 sm:mb-6" />
          <div class="h-24 sm:h-32 bg-slate-800 rounded" />
        </div>
      </div>

      <div v-else-if="error || !project" class="mt-6 sm:mt-8 md:mt-10 px-2 sm:px-0">
        <Head>
          <Title>Project not found · Projects</Title>
          <Meta name="description" content="The project you are looking for does not exist." />
        </Head>
        <h1 class="text-xl sm:text-2xl font-semibold text-white">Project not found</h1>
        <p class="mt-2 text-sm sm:text-base text-slate-400">The project you are looking for does not exist.</p>
      </div>

      <div v-else class="mt-4 sm:mt-6">
        <Head>
          <Title>{{ `${project.title} · Projects` }}</Title>
          <Meta name="description" :content="project.description" />
        </Head>

        <div class="px-2 sm:px-0">
          <h1 class="text-2xl sm:text-3xl font-bold text-white leading-tight">{{ project.title }}</h1>
          <p class="mt-2 text-sm sm:text-base text-slate-400 leading-relaxed">{{ project.description }}</p>

          <ul v-if="project.tech" class="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            <li
              v-for="tech in project.tech"
              :key="tech"
              class="rounded border border-slate-800 bg-slate-900/40 px-2 py-1 text-xs text-slate-400"
            >
              {{ tech }}
            </li>
          </ul>

          <div v-if="project.image" class="mt-4 sm:mt-6 border-1 border-slate-900 rounded-lg overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full rounded-lg"
            >
          </div>

          <div class="prose prose-invert prose-sm sm:prose-base mt-4 sm:mt-6 max-w-none">
            <ContentRenderer :value="project" />
          </div>

          <div class="mt-6 sm:mt-8 flex items-center gap-3">
            <NuxtLink
              v-if="project.externalUrl"
              :to="project.externalUrl"
              target="_blank"
              class="inline-flex items-center rounded-md border border-emerald-700 bg-emerald-600/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-emerald-300 hover:bg-emerald-600/20 transition-colors duration-200"
            >
              Visit project
            </NuxtLink>
          </div>

          <!-- Social Share Buttons -->
          <div class="mt-6 sm:mt-8">
            <SocialShareButtons
              :title="project.title"
              :description="project.description"
              :url="shareUrl"
            />
          </div>
        </div>
      </div>
      <!--Divider
      <div class="mt-6 sm:mt-8">
        <div class="h-px bg-slate-900"></div>
      </div>-->
      <!--Other projects-->
      <div class="mx-auto w-full">
        <h2 class="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-400 mt-8 sm:mt-8">Other projects</h2>             
          <div class="mt-3 sm:mt-4 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
            <!--limit the projects to 2 and add a see more button-->
                <NuxtLink
                v-for="otherProject in projects.slice(0, 2)"
                :key="otherProject.slug"
                :to="`/projects/${otherProject.slug}`"
                class="block"
              >
                <article
                  v-glow
                  class="mouse-glow rounded-md border border-slate-800 bg-slate-900/40 p-3 sm:p-4 transition hover:border-slate-700"
                >
                <img :src="otherProject.image" :alt="otherProject.title" class="w-full h-32 sm:h-40 object-cover rounded-md mb-2 sm:mb-3 border-1 border-slate-900" />
                  <h4 class="font-semibold text-sm sm:text-base text-slate-100 leading-snug">{{ otherProject.title }}</h4>
                  <p class="mt-1 text-xs sm:text-sm text-slate-400 line-clamp-2 sm:truncate leading-relaxed">{{ otherProject.description }}</p>
                  <div class="mt-2 text-xs text-slate-500 leading-relaxed">{{ otherProject.tech.join(' · ') }}</div>
                </article>
              </NuxtLink>
            </div>
            <div class="mt-4 sm:mt-6 flex items-center justify-start">
            <NuxtLink to="/#projects"
            class="text-xs sm:text-sm text-slate-400 hover:text-slate-200 transition-colors duration-200 px-4 py-2 rounded-md border border-slate-800 hover:border-slate-700 bg-slate-900/40 cursor-pointer">← See more</NuxtLink>
          </div>
      </div>
    </div>
    <footer class="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-12">
      <Footer />
    </footer>
  </div>
</template>

<script setup lang="ts">

import { getProjectBySlug, projects } from '@/data/projects'

const route = useRoute()
const slug = route.params.slug as string

// Get project from TypeScript data file instead of markdown
const projectData = getProjectBySlug(slug)

interface MarkdownContent {
  body: object
  title?: string
  description?: string
  [key: string]: unknown
}

// Use queryCollection to get the markdown content for the body
const { data: markdownContent, pending, error } = await useAsyncData(`project-content-${slug}`, () => 
  queryCollection('content').path(`/projects/${slug}`).first()
) as { data: Ref<MarkdownContent | null>, pending: Ref<boolean>, error: Ref<Error | null> }

// Combine TypeScript data with markdown content
const project = computed(() => {
  if (!projectData) return null
  return {
    ...projectData,
    body: markdownContent.value?.body || {},
    _path: `/projects/${slug}`,
    _id: slug,
    _type: 'markdown'
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
  const title = `${project.value?.title} · Projects`
  const description = project.value?.description
  const image = project.value?.image
  const url = `${siteUrl}/projects/${project.value?.slug}`
  const type = 'website'

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:type', content: type },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:type', content: type },
    ]
  }
})
</script>

