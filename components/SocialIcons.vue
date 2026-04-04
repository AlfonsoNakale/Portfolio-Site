<template>
  <div class="flex items-center gap-4 sm:gap-6">
    <nuxtLink to="https://www.linkedin.com/in/alfonso-nakale/" target="_blank" class="transition-colors duration-200">
      <Icon icon="mynaui:brand-linkedin" class="w-5 h-5 sm:w-5 sm:h-5 opacity-70 hover:opacity-100 transition-opacity" />
    </nuxtLink>
    <nuxtLink to="https://github.com/alfonso-nakale" target="_blank" class="transition-colors duration-200">
      <Icon icon="ri:github-fill" class="w-5 h-5 sm:w-5 sm:h-5 opacity-70 hover:opacity-100 transition-opacity" />
    </nuxtLink>
    <nuxtLink to="mailto:alfonso.nakale@gmail.com" target="_blank" class="transition-colors duration-200">
      <Icon icon="ri:send-plane-line" class="w-5 h-5 sm:w-5 sm:h-5 opacity-70 hover:opacity-100 transition-opacity" />
    </nuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>