<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <BackToTopButton />
  </div>
</template>

<script setup lang="ts">
import BackToTopButton from '~/components/BackToTopButton.vue'

useSeoMeta({
  title: 'Alfonso Nakale - Portfolio',
  description: 'I build web apps that solve real business problems using modern technology. During my +10 years of experience, I’ve seen how the right tools can simplify processes, boost efficiency, and create meaningful impact.',
  ogTitle: 'Alfonso Nakale - Portfolio',
  ogDescription: 'I build web apps that solve real business problems using modern technology. During my +10 years of experience, I’ve seen how the right tools can simplify processes, boost efficiency, and create meaningful impact.',
  ogImage: '/bio-image/bio-image_2.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Alfonso Nakale - Portfolio',
  twitterDescription: 'I build web apps that solve real business problems using modern technology. During my +10 years of experience, I’ve seen how the right tools can simplify processes, boost efficiency, and create meaningful impact.',
  twitterImage: '/bio-image/bio-image_2.jpg',
  ogUrl: 'https://alfonsonakale.com',
})

useHead({
  link: [
    { rel: 'icon', type: 'image/jpeg', href: '/favicon.jpg' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})
</script>
