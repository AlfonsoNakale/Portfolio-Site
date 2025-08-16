<template>
  <div class="flex items-center gap-4 sm:gap-6">
    <nuxtLink to="https://www.linkedin.com/in/alfonso-nakale/" target="_blank" class="transition-colors duration-200">
      <Icon icon="mynaui:brand-linkedin" class="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-slate-300" />
    </nuxtLink>
    <nuxtLink to="https://github.com/alfonso-nakale" target="_blank" class="transition-colors duration-200">
      <Icon icon="ri:github-fill" class="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-slate-300" />
    </nuxtLink>
    <nuxtLink to="mailto:alfonso.nakale@gmail.com" target="_blank" class="transition-colors duration-200">
      <Icon icon="ri:send-plane-line" class="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-slate-300" />
    </nuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>