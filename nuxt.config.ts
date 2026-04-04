// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  nitro: {
    // Use generate mode for static site generation
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },

  studio: {
    repository: {
      provider: 'github',
      owner: 'AlfonsoNakale',
      repo: 'Portfolio-Site',
      branch: 'main'
    }
  },

  // Prerender dynamic routes
  hooks: {
    async 'nitro:config'(nitroConfig) {
      if (nitroConfig.dev) return

      // Import projects data for prerendering
      const { projects } = await import('./data/projects')
      const routes = projects.map(project => `/projects/${project.slug}`)

      nitroConfig.prerender = nitroConfig.prerender || {}
      nitroConfig.prerender.routes = nitroConfig.prerender.routes || []
      nitroConfig.prerender.routes.push(...routes)
    }
  },

  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },

  fonts: {
    families: [
      {
        name: 'Urbanist',
        provider: 'google',
        weights: [400, 500, 600, 700],
        styles: ['normal', 'italic'],
      }
    ]
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'I build web apps that solve real business problems using modern technology.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ],
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/content',
    'nuxt-studio'
  ]
})