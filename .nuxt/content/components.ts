const pickExport = (mod, exportName, componentName, path) => {
  const resolved = exportName === 'default' ? mod?.default : mod?.[exportName]
  if (!resolved) {
    throw new Error(`[nuxt-content] Missing export "${exportName}" for component "${componentName}" in "${path}".`)
  }
  return resolved
}
export const localComponentLoaders = {
  AboutSection: () => import("./../../components/AboutSection.vue").then(m => pickExport(m, "default", "AboutSection", "./../../components/AboutSection.vue")),
  BackToTopButton: () => import("./../../components/BackToTopButton.vue").then(m => pickExport(m, "default", "BackToTopButton", "./../../components/BackToTopButton.vue")),
  ExperienceSection: () => import("./../../components/ExperienceSection.vue").then(m => pickExport(m, "default", "ExperienceSection", "./../../components/ExperienceSection.vue")),
  Footer: () => import("./../../components/Footer.vue").then(m => pickExport(m, "default", "Footer", "./../../components/Footer.vue")),
  GreetingChip: () => import("./../../components/GreetingChip.vue").then(m => pickExport(m, "default", "GreetingChip", "./../../components/GreetingChip.vue")),
  ProjectsSection: () => import("./../../components/ProjectsSection.vue").then(m => pickExport(m, "default", "ProjectsSection", "./../../components/ProjectsSection.vue")),
  SocialIcons: () => import("./../../components/SocialIcons.vue").then(m => pickExport(m, "default", "SocialIcons", "./../../components/SocialIcons.vue")),
  SocialShareButtons: () => import("./../../components/SocialShareButtons.vue").then(m => pickExport(m, "default", "SocialShareButtons", "./../../components/SocialShareButtons.vue")),
  ScriptAriaLoadingIndicator: () => import("./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue").then(m => pickExport(m, "default", "ScriptAriaLoadingIndicator", "./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue")),
  ScriptCarbonAds: () => import("./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue").then(m => pickExport(m, "default", "ScriptCarbonAds", "./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue")),
  ScriptCrisp: () => import("./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue").then(m => pickExport(m, "default", "ScriptCrisp", "./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue")),
  ScriptGoogleAdsense: () => import("./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue").then(m => pickExport(m, "default", "ScriptGoogleAdsense", "./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue")),
  ScriptGoogleMaps: () => import("./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleMaps.vue").then(m => pickExport(m, "default", "ScriptGoogleMaps", "./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleMaps.vue")),
  ScriptIntercom: () => import("./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue").then(m => pickExport(m, "default", "ScriptIntercom", "./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue")),
  ScriptLemonSqueezy: () => import("./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue").then(m => pickExport(m, "default", "ScriptLemonSqueezy", "./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue")),
  ScriptLoadingIndicator: () => import("./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue").then(m => pickExport(m, "default", "ScriptLoadingIndicator", "./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue")),
  ScriptStripePricingTable: () => import("./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue").then(m => pickExport(m, "default", "ScriptStripePricingTable", "./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue")),
  ScriptVimeoPlayer: () => import("./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue").then(m => pickExport(m, "default", "ScriptVimeoPlayer", "./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue")),
  ScriptYouTubePlayer: () => import("./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue").then(m => pickExport(m, "default", "ScriptYouTubePlayer", "./../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue")),
  NuxtWelcome: () => import("./../../node_modules/nuxt/dist/app/components/welcome.vue").then(m => pickExport(m, "default", "NuxtWelcome", "./../../node_modules/nuxt/dist/app/components/welcome.vue")),
  NuxtLayout: () => import("./../../node_modules/nuxt/dist/app/components/nuxt-layout").then(m => pickExport(m, "default", "NuxtLayout", "./../../node_modules/nuxt/dist/app/components/nuxt-layout")),
  NuxtErrorBoundary: () => import("./../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").then(m => pickExport(m, "default", "NuxtErrorBoundary", "./../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")),
  ClientOnly: () => import("./../../node_modules/nuxt/dist/app/components/client-only").then(m => pickExport(m, "default", "ClientOnly", "./../../node_modules/nuxt/dist/app/components/client-only")),
  DevOnly: () => import("./../../node_modules/nuxt/dist/app/components/dev-only").then(m => pickExport(m, "default", "DevOnly", "./../../node_modules/nuxt/dist/app/components/dev-only")),
  ServerPlaceholder: () => import("./../../node_modules/nuxt/dist/app/components/server-placeholder").then(m => pickExport(m, "default", "ServerPlaceholder", "./../../node_modules/nuxt/dist/app/components/server-placeholder")),
  NuxtLink: () => import("./../../node_modules/nuxt/dist/app/components/nuxt-link").then(m => pickExport(m, "default", "NuxtLink", "./../../node_modules/nuxt/dist/app/components/nuxt-link")),
  NuxtLoadingIndicator: () => import("./../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").then(m => pickExport(m, "default", "NuxtLoadingIndicator", "./../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")),
  NuxtTime: () => import("./../../node_modules/nuxt/dist/app/components/nuxt-time.vue").then(m => pickExport(m, "default", "NuxtTime", "./../../node_modules/nuxt/dist/app/components/nuxt-time.vue")),
  NuxtRouteAnnouncer: () => import("./../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").then(m => pickExport(m, "default", "NuxtRouteAnnouncer", "./../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")),
  NuxtAnnouncer: () => import("./../../node_modules/nuxt/dist/app/components/nuxt-announcer").then(m => pickExport(m, "default", "NuxtAnnouncer", "./../../node_modules/nuxt/dist/app/components/nuxt-announcer")),
  NuxtImg: () => import("./../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue").then(m => pickExport(m, "default", "NuxtImg", "./../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")),
  NuxtPicture: () => import("./../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue").then(m => pickExport(m, "default", "NuxtPicture", "./../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")),
  ContentRenderer: () => import("./../../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue").then(m => pickExport(m, "default", "ContentRenderer", "./../../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")),
  NuxtPage: () => import("./../../node_modules/nuxt/dist/pages/runtime/page").then(m => pickExport(m, "default", "NuxtPage", "./../../node_modules/nuxt/dist/pages/runtime/page")),
  NoScript: () => import("./../../node_modules/nuxt/dist/head/runtime/components").then(m => pickExport(m, "NoScript", "NoScript", "./../../node_modules/nuxt/dist/head/runtime/components")),
  Link: () => import("./../../node_modules/nuxt/dist/head/runtime/components").then(m => pickExport(m, "Link", "Link", "./../../node_modules/nuxt/dist/head/runtime/components")),
  Base: () => import("./../../node_modules/nuxt/dist/head/runtime/components").then(m => pickExport(m, "Base", "Base", "./../../node_modules/nuxt/dist/head/runtime/components")),
  Title: () => import("./../../node_modules/nuxt/dist/head/runtime/components").then(m => pickExport(m, "Title", "Title", "./../../node_modules/nuxt/dist/head/runtime/components")),
  Meta: () => import("./../../node_modules/nuxt/dist/head/runtime/components").then(m => pickExport(m, "Meta", "Meta", "./../../node_modules/nuxt/dist/head/runtime/components")),
  Style: () => import("./../../node_modules/nuxt/dist/head/runtime/components").then(m => pickExport(m, "Style", "Style", "./../../node_modules/nuxt/dist/head/runtime/components")),
  Head: () => import("./../../node_modules/nuxt/dist/head/runtime/components").then(m => pickExport(m, "Head", "Head", "./../../node_modules/nuxt/dist/head/runtime/components")),
  Html: () => import("./../../node_modules/nuxt/dist/head/runtime/components").then(m => pickExport(m, "Html", "Html", "./../../node_modules/nuxt/dist/head/runtime/components")),
  Body: () => import("./../../node_modules/nuxt/dist/head/runtime/components").then(m => pickExport(m, "Body", "Body", "./../../node_modules/nuxt/dist/head/runtime/components")),
  MDC: () => import("./../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue").then(m => pickExport(m, "default", "MDC", "./../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")),
  MDCCached: () => import("./../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue").then(m => pickExport(m, "default", "MDCCached", "./../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue")),
  MDCRenderer: () => import("./../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue").then(m => pickExport(m, "default", "MDCRenderer", "./../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")),
  MDCSlot: () => import("./../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue").then(m => pickExport(m, "default", "MDCSlot", "./../../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")),
  NuxtIsland: () => import("./../../node_modules/nuxt/dist/app/components/nuxt-island").then(m => pickExport(m, "default", "NuxtIsland", "./../../node_modules/nuxt/dist/app/components/nuxt-island")),
}
export const globalComponents: string[] = ["ProseA","ProseBlockquote","ProseCode","ProseEm","ProseH1","ProseH2","ProseH3","ProseH4","ProseH5","ProseH6","ProseHr","ProseImg","ProseLi","ProseOl","ProseP","ProsePre","ProseScript","ProseStrong","ProseTable","ProseTbody","ProseTd","ProseTh","ProseThead","ProseTr","ProseUl","Icon"]
export const localComponents: string[] = ["AboutSection","BackToTopButton","ExperienceSection","Footer","GreetingChip","ProjectsSection","SocialIcons","SocialShareButtons","ScriptAriaLoadingIndicator","ScriptCarbonAds","ScriptCrisp","ScriptGoogleAdsense","ScriptGoogleMaps","ScriptIntercom","ScriptLemonSqueezy","ScriptLoadingIndicator","ScriptStripePricingTable","ScriptVimeoPlayer","ScriptYouTubePlayer","NuxtWelcome","NuxtLayout","NuxtErrorBoundary","ClientOnly","DevOnly","ServerPlaceholder","NuxtLink","NuxtLoadingIndicator","NuxtTime","NuxtRouteAnnouncer","NuxtAnnouncer","NuxtImg","NuxtPicture","ContentRenderer","NuxtPage","NoScript","Link","Base","Title","Meta","Style","Head","Html","Body","MDC","MDCCached","MDCRenderer","MDCSlot","NuxtIsland"]