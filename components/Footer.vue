<template>
  <footer class="bg-slate-950 text-slate-300">
    <div class="w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 px-2 sm:px-0">
      <div class="flex justify-center sm:justify-start">
        <SocialIcons />
      </div>
      <div class="flex justify-center sm:justify-end">
        <nuxtLink to="tel:+264814687647" class="text-xs sm:text-sm font-medium text-slate-400 hover:text-slate-300 transition-colors duration-200">
          <span class="text-slate-400">Cell · </span>+264 81 468 7647
        </nuxtLink>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import SocialIcons from './SocialIcons.vue';
</script>