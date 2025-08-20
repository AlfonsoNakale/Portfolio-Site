import { b as buildAssetsURL } from '../_/nitro.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, computed, resolveDirective, withDirectives, createBlock, openBlock, toDisplayString, unref, useSSRContext } from 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrGetDirectiveProps, ssrRenderClass, ssrRenderStyle } from 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/vue/server-renderer/index.mjs';
import { Icon } from 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/@iconify/vue/dist/iconify.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-Dkcz6mcN.mjs';
import { _ as _sfc_main$5, p as projects } from './Footer-Doba11WO.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/unified/index.js';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/remark-parse/index.js';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/remark-rehype/index.js';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/remark-mdc/dist/index.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/remark-gfm/index.js';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/rehype-external-links/index.js';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/rehype-sort-attribute-values/index.js';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/rehype-sort-attributes/index.js';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/rehype-raw/index.js';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/detab/index.js';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/micromark-util-sanitize-uri/index.js';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/hast-util-to-string/index.js';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/github-slugger/index.js';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/@nuxt/icon/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/@iconify/utils/lib/index.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/@nuxt/icon/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/consola/dist/index.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Alfonso.Nakale/Downloads/Dev%20Projects/alfonso-portfolio/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "GreetingChip",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(false);
    ref();
    ref();
    const alertPosition = ref({});
    const getTimeOfDay = () => {
      const hour = (/* @__PURE__ */ new Date()).getHours();
      if (hour < 12) return "Morning";
      if (hour < 17) return "Afternoon";
      return "Evening";
    };
    const getGreetingIcon = () => {
      const hour = (/* @__PURE__ */ new Date()).getHours();
      if (hour < 12) return "ri:sun-line";
      if (hour < 17) return "ri:sun-cloudy-line";
      return "ri:moon-line";
    };
    const getGreetingTitle = () => {
      const timeOfDay = getTimeOfDay();
      const greetings = {
        Morning: ["Rise and Code! \u2615", "Morning, Code Warrior! \u{1F305}", "Good Morning! \u{1F324}\uFE0F"],
        Afternoon: ["Afternoon! \u2600\uFE0F", "Hey There! \u{1F31E}", "Afternoon Vibes! \u{1F324}\uFE0F"],
        Evening: ["Evening! \u{1F319}", "Good Evening! \u2728", "Night Owl Mode! \u{1F989}"]
      };
      const options = greetings[timeOfDay];
      return options[Math.floor(Math.random() * options.length)];
    };
    const getGreetingMessage = () => {
      const hour = (/* @__PURE__ */ new Date()).getHours();
      const messages = {
        morning: [
          "Hope you're having a fantastic start to your day! Ready to build something amazing?",
          "Nothing beats morning creativity and a fresh cup of coffee! What are we building today?",
          "Early bird gets the bug-free code! Let's make some digital magic happen."
        ],
        afternoon: [
          "Hope your day is going great! Time for some afternoon inspiration and maybe a stretch break?",
          "Midday energy is perfect for tackling those exciting challenges. What caught your eye?",
          "Afternoon is prime time for creative breakthroughs. Ready to dive into some cool projects?"
        ],
        evening: [
          "Evening browsing? The best time for exploring new ideas and getting inspired!",
          "Hope you're winding down nicely! Perfect time to check out some creative work.",
          "Night owl spotted! \u{1F989} The most creative minds work best when the world gets quiet."
        ]
      };
      let timeKey;
      if (hour < 12) timeKey = "morning";
      else if (hour < 17) timeKey = "afternoon";
      else timeKey = "evening";
      const options = messages[timeKey];
      return options[Math.floor(Math.random() * options.length)];
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative inline-block" }, _attrs))} data-v-0bd7e5be><button class="${ssrRenderClass([{ "ring-2 ring-emerald-400/50": unref(isVisible) }, "group inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800/80 hover:bg-slate-700/90 border border-slate-600/50 hover:border-slate-500/70 rounded-full transition-all duration-300 cursor-pointer backdrop-blur-sm"])}" data-v-0bd7e5be>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "ri:hand-heart-line",
        class: "w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform duration-200"
      }, null, _parent));
      _push(`<span class="text-xs font-medium text-slate-300 group-hover:text-white transition-colors duration-200" data-v-0bd7e5be>${ssrInterpolate(getTimeOfDay())}</span></button>`);
      if (unref(isVisible)) {
        _push(`<div class="greeting-alert" style="${ssrRenderStyle(unref(alertPosition))}" data-v-0bd7e5be><div class="greeting-arrow" data-v-0bd7e5be></div><div class="flex items-start gap-3" data-v-0bd7e5be><div class="flex-shrink-0 mt-0.5" data-v-0bd7e5be>`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: getGreetingIcon(),
          class: "w-5 h-5 text-emerald-400 animate-pulse"
        }, null, _parent));
        _push(`</div><div class="flex-1" data-v-0bd7e5be><p class="text-sm font-medium text-white mb-1" data-v-0bd7e5be>${ssrInterpolate(getGreetingTitle())}</p><p class="text-xs text-slate-300 leading-relaxed" data-v-0bd7e5be>${ssrInterpolate(getGreetingMessage())}</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GreetingChip.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-0bd7e5be"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AboutSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "about",
        class: "scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24"
      }, _attrs))}><h3 class="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-400">About</h3><p class="mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base text-slate-300 px-1 sm:px-0"> I bridge complex business logic with elegant, user-friendly interfaces. Forget cookie-cutter solutions-I build custom web applications that automate workflows, crush inefficiencies, and unlock growth, powered by modern technologies.<br><br> My work lives at the intersection of engineering and user experience, where performance, scalability, and intuitive design collide. Whether it\u2019s a <strong>dashboard, a SaaS automation tool, or a data-driven enterprise platform</strong>, I build solutions that are as robust under the hood as they are delightful to use.<br><br> Currently, I leverage my hybrid background in banking, marketing, and informatics to develop applications that solve real-world business challenges-translating legacy processes into sleek, future-proof systems. Past projects span financial services automation, CRM integrations, and real-time analytics tools, all built with accessibility and maintainability in mind. </p><div class="mt-4 sm:mt-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_nuxtLink, {
        to: "https://www.example.com",
        class: "inline-flex items-center rounded-md border border-emerald-700 bg-emerald-600/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-emerald-300 hover:bg-emerald-600/20 transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u2192 View Full R\xE9sum\xE9`);
          } else {
            return [
              createTextVNode("\u2192 View Full R\xE9sum\xE9")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "experience",
    class: "scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24"
  }, _attrs))}><h3 class="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-400">Experience</h3><ul class="mt-3 sm:mt-4 space-y-4 sm:space-y-6"><li class="text-slate-300"><div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-0"><p class="font-medium text-sm sm:text-base text-slate-100 leading-snug">Web Developer \xB7 Ohlthaver &amp; List Group</p><span class="text-xs font-semibold text-slate-400 flex-shrink-0">2024 \u2014 Present</span></div><p class="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">Map, Develop, Debug solutions that inform stategies and meet user needs. such as WordPress and Webflow</p></li><li class="text-slate-300"><div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-0"><p class="font-medium text-sm sm:text-base text-slate-100 leading-snug">Curriculum Advisory Board Member \xB7 NUST</p><span class="text-xs font-semibold text-slate-400 flex-shrink-0">2025 \u2014 2029</span></div><p class="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">Supporting the development of Namibia&#39;s professionals in the field of Advanced Web Technologies and Big Data Technologies.</p></li><li class="text-slate-300"><div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-0"><p class="font-medium text-sm sm:text-base text-slate-100 leading-snug">Digital &amp; Dev Specialist \xB7 Ohlthaver &amp; List Group</p><span class="text-xs font-semibold text-slate-400 flex-shrink-0">2022 \u2014 2024</span></div><p class="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">Front-end web development, maintenance, and updating of web presences.</p></li><li class="text-slate-300"><div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-0"><p class="font-medium text-sm sm:text-base text-slate-100 leading-snug">Digital Change - Projects \xB7 Standard Bank</p><span class="text-xs font-semibold text-slate-400 flex-shrink-0">2020 \u2014 2021</span></div><p class="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">Identify change needs and scope, including coordinating change management activities.</p></li></ul></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExperienceSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const visibleCount = ref(4);
    const visibleProjects = computed(() => {
      return projects.slice(0, visibleCount.value);
    });
    const canLoadMore = computed(() => {
      return visibleCount.value < projects.length;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _directive_glow = resolveDirective("glow");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "projects",
        class: "scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24"
      }, _attrs))}><h3 class="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-400">Projects</h3><div class="mt-3 sm:mt-4 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2"><!--[-->`);
      ssrRenderList(visibleProjects.value, (project) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: project.slug,
          to: `/projects/${project.slug}`,
          class: "block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<article${ssrRenderAttrs(mergeProps({ class: "mouse-glow rounded-md border border-slate-800 bg-slate-900/40 p-3 sm:p-4 transition hover:border-slate-700" }, ssrGetDirectiveProps(_ctx, _directive_glow)))}${_scopeId}><img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)} class="w-full h-32 sm:h-40 object-cover rounded-md mb-2 sm:mb-3 border-1 border-slate-900"${_scopeId}><h4 class="font-semibold text-sm sm:text-base text-slate-100 leading-snug"${_scopeId}>${ssrInterpolate(project.title)}</h4><p class="mt-1 text-xs sm:text-sm text-slate-400 line-clamp-2 sm:truncate leading-relaxed"${_scopeId}>${ssrInterpolate(project.description)}</p><div class="mt-2 text-xs text-slate-500 leading-relaxed"${_scopeId}>${ssrInterpolate(project.tech.join(" \xB7 "))}</div></article>`);
            } else {
              return [
                withDirectives((openBlock(), createBlock("article", { class: "mouse-glow rounded-md border border-slate-800 bg-slate-900/40 p-3 sm:p-4 transition hover:border-slate-700" }, [
                  createVNode("img", {
                    src: project.image,
                    alt: project.title,
                    class: "w-full h-32 sm:h-40 object-cover rounded-md mb-2 sm:mb-3 border-1 border-slate-900"
                  }, null, 8, ["src", "alt"]),
                  createVNode("h4", { class: "font-semibold text-sm sm:text-base text-slate-100 leading-snug" }, toDisplayString(project.title), 1),
                  createVNode("p", { class: "mt-1 text-xs sm:text-sm text-slate-400 line-clamp-2 sm:truncate leading-relaxed" }, toDisplayString(project.description), 1),
                  createVNode("div", { class: "mt-2 text-xs text-slate-500 leading-relaxed" }, toDisplayString(project.tech.join(" \xB7 ")), 1)
                ])), [
                  [_directive_glow]
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (canLoadMore.value) {
        _push(`<div class="mt-4 sm:mt-6 text-center"><button class="w-full text-xs sm:text-sm text-slate-400 hover:text-slate-200 transition-colors duration-200 px-4 py-2 rounded-md border border-slate-800 hover:border-slate-700 bg-slate-900/40 cursor-pointer"> Load More </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectsSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("bio-image_2.SqKRxEpY.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    ref();
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GreetingChip = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_AboutSection = _sfc_main$3;
      const _component_ExperienceSection = __nuxt_component_3;
      const _component_ProjectsSection = _sfc_main$1;
      const _component_Footer = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-950 text-slate-300" }, _attrs))} data-v-d5adf747><div class="mx-auto grid w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-12 md:grid-cols-[1fr_2fr] md:gap-16 md:px-16 md:py-16" data-v-d5adf747><aside class="md:sticky md:top-24 self-start" data-v-d5adf747><div class="space-y-4" data-v-d5adf747><div class="mb-6 md:mb-10 text-center md:text-left" data-v-d5adf747><div class="relative inline-block mb-6 md:mb-8" data-v-d5adf747><img id="bio-image_2"${ssrRenderAttr("src", _imports_0)} alt="Alfonso Nakale" class="rounded-[35%] md:rounded-[15%] w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 border-3 border-slate-700 mx-auto md:mx-0" data-v-d5adf747><div class="absolute -top-2 -right-2 md:-right-4" data-v-d5adf747>`);
      _push(ssrRenderComponent(_component_GreetingChip, null, null, _parent));
      _push(`</div></div><h1 class="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-semibold text-white leading-tight" data-v-d5adf747>Alfonso Nakale</h1><h2 class="mt-1 text-lg sm:text-xl text-slate-400" data-v-d5adf747>Web Developer</h2><p class="mt-2 text-sm sm:text-base text-slate-400 leading-relaxed px-2 md:px-0" data-v-d5adf747>I build custom web apps that automate workflows, crush inefficiencies.</p></div><nav class="flex flex-col gap-1 text-center md:text-left" data-v-d5adf747>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#about",
        class: "text-base sm:text-lg font-medium text-slate-400 hover:text-white transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-xl sm:text-2xl text-emerald-400" data-v-d5adf747${_scopeId}>\xB7</span> About`);
          } else {
            return [
              createVNode("span", { class: "text-xl sm:text-2xl text-emerald-400" }, "\xB7"),
              createTextVNode(" About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#experience",
        class: "text-base sm:text-lg font-medium text-slate-400 hover:text-white transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-xl sm:text-2xl text-emerald-400" data-v-d5adf747${_scopeId}>\xB7</span> Experience`);
          } else {
            return [
              createVNode("span", { class: "text-xl sm:text-2xl text-emerald-400" }, "\xB7"),
              createTextVNode(" Experience")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#projects",
        class: "text-base sm:text-lg font-medium text-slate-400 hover:text-white transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-xl sm:text-2xl text-emerald-400" data-v-d5adf747${_scopeId}>\xB7</span> Projects`);
          } else {
            return [
              createVNode("span", { class: "text-xl sm:text-2xl text-emerald-400" }, "\xB7"),
              createTextVNode(" Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div></aside><main class="space-y-12 md:space-y-16" data-v-d5adf747>`);
      _push(ssrRenderComponent(_component_AboutSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ExperienceSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ProjectsSection, null, null, _parent));
      _push(`<footer class="mt-12 md:mt-15" data-v-d5adf747>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</footer></main></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d5adf747"]]);

export { index as default };
//# sourceMappingURL=index-BszpNLiR.mjs.map
