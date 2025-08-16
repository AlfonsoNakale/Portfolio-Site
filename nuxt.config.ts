// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Configure for Cloudflare Pages
  nitro: {
    preset: 'cloudflare-pages',
    // Use generate mode for static site generation
    prerender: {
      crawlLinks: true
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
    plugins: [tailwindcss()],
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
        { name: 'description', content: 'I build accessible, pixel-perfect digital experiences for the web.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ],
      script: [
        { src: 'https://unpkg.com/tailwindcss@^3.0/dist/tailwind.min.js', defer: true },
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
    '@nuxt/content'
  ]
})