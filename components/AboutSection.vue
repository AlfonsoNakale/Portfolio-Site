<template>
  <section id="about" class="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24">
    <p class="mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base text-slate-300 px-1 sm:px-0 text-justify">I build web apps that solve real business problems using modern technology. During my +10 years of experience, I’ve seen how the right tools can simplify processes, boost efficiency, and create meaningful impact.I specialize in web development and process automation, and I’m just as comfortable mapping system workflows as I am designing intuitive, user-friendly interfaces. My toolkit and expertise includes:</p>

    <div class="mt-8 grid grid-cols-1 gap-6 sm:gap-8 animate-fade-in-up">
      <!-- Programming Languages -->
      <div v-glow class="mouse-glow group relative rounded-xl border border-slate-800/50 bg-slate-900/20 p-5 sm:p-6 transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-900/40">
        <h3 class="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4 flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
          Programming Languages
        </h3>
        <div class="flex flex-wrap gap-2.5 relative z-10">
          <span 
            v-for="(item, index) in ['JavaScript (ES2015+)', 'TypeScript', 'HTML', 'CSS', 'Java', 'PHP', 'GraphQL', 'SQL']" 
            :key="item" 
            :style="{ transitionDelay: `${index * 50}ms` }"
            class="px-3 py-1.5 rounded-lg bg-slate-800/40 border border-slate-700/50 text-[10px] sm:text-xs text-slate-300 font-medium transition-all duration-300 hover:scale-105 hover:border-emerald-500/50 hover:text-emerald-300 hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] animate-tag-in"
          >
            {{ item }}
          </span>
        </div>
      </div>
      
      <!-- Libraries & Frameworks -->
      <div v-glow class="mouse-glow group relative rounded-xl border border-slate-800/50 bg-slate-900/20 p-5 sm:p-6 transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-900/40">
        <h3 class="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4 flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
          Libraries & Frameworks
        </h3>
        <div class="flex flex-wrap gap-2.5 relative z-10">
          <span 
            v-for="(item, index) in ['Nuxt.js', 'Vue.js', 'Node.js', 'Tailwind CSS', 'Styled Components', 'GSAP.js']" 
            :key="item" 
            :style="{ transitionDelay: `${index * 50}ms` }"
            class="px-3 py-1.5 rounded-lg bg-slate-800/40 border border-slate-700/50 text-[10px] sm:text-xs text-slate-300 font-medium transition-all duration-300 hover:scale-105 hover:border-emerald-500/50 hover:text-emerald-300 hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] animate-tag-in"
          >
            {{ item }}
          </span>
        </div>
      </div>
      
      <!-- Tools & Platforms -->
      <div v-glow class="mouse-glow group relative rounded-xl border border-slate-800/50 bg-slate-900/20 p-5 sm:p-6 transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-900/40">
        <h3 class="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4 flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
          Tools & Platforms
        </h3>
        <div class="flex flex-wrap gap-2.5 relative z-10">
          <span 
            v-for="(item, index) in ['GitHub', 'Netlify', 'Vercel', 'Webflow', 'NuxtStudio', 'Firebase', 'Supabase', 'MongoDB', 'Docker', 'Cloudflare Workers', 'Cloudflare R2', 'Figma']" 
            :key="item" 
            :style="{ transitionDelay: `${index * 50}ms` }"
            class="px-3 py-1.5 rounded-lg bg-slate-800/40 border border-slate-700/50 text-[10px] sm:text-xs text-slate-300 font-medium transition-all duration-300 hover:scale-105 hover:border-emerald-500/50 hover:text-emerald-300 hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] animate-tag-in"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>

    <div class="mt-10 flex items-center gap-2">


      <!--<Icon icon="ri:file-pdf-2-line" class="w-6 h-6 text-slate-400 hover:text-slate-300" />-->
      <nuxtLink to="/Resume-web.pdf" class="inline-flex items-center rounded-md border border-emerald-700 bg-emerald-600/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-emerald-300 hover:bg-emerald-600/20 transition-colors duration-200" target="_blank">→ View Full Résumé</nuxtLink>
    </div>
  </section>
</template>
<script lang="ts" setup>
// import { Icon } from '@iconify/vue';
</script>


