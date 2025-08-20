import { _ as __nuxt_component_0 } from "./nuxt-link-Dkcz6mcN.js";
import { defineComponent, inject, reactive, provide, ref, mergeProps, unref, useSSRContext, withAsyncContext, computed, resolveDirective, withCtx, createTextVNode, createVNode, toDisplayString, withDirectives, createBlock, openBlock } from "C:/Users/Alfonso.Nakale/Downloads/Dev Projects/alfonso-portfolio/node_modules/vue/index.mjs";
import { u as useHead } from "./v3-UjTMhTIX.js";
import _sfc_main$2 from "./ContentRenderer-A4gGJZqD.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrGetDirectiveProps } from "vue/server-renderer";
import { g as getProjectBySlug, p as projects, _ as _sfc_main$3 } from "./Footer-Doba11WO.js";
import { u as useRoute } from "../server.mjs";
import { u as useAsyncData } from "./asyncData-Dx1Jrwy3.js";
import { q as queryContent } from "./query-D_xpVYMB.js";
import "C:/Users/Alfonso.Nakale/Downloads/Dev Projects/alfonso-portfolio/node_modules/ufo/dist/index.mjs";
import "C:/Users/Alfonso.Nakale/Downloads/Dev Projects/alfonso-portfolio/node_modules/@unhead/vue/dist/index.mjs";
import "./ContentRendererMarkdown-Hg1zZxAN.js";
import "C:/Users/Alfonso.Nakale/Downloads/Dev Projects/alfonso-portfolio/node_modules/destr/dist/index.mjs";
import "scule";
import "property-information";
import "./node-hwMnPqaI.js";
import "./preview-DaGHZvIK.js";
import "C:/Users/Alfonso.Nakale/Downloads/Dev Projects/alfonso-portfolio/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "C:/Users/Alfonso.Nakale/Downloads/Dev Projects/alfonso-portfolio/node_modules/h3/dist/index.mjs";
import "C:/Users/Alfonso.Nakale/Downloads/Dev Projects/alfonso-portfolio/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "C:/Users/Alfonso.Nakale/Downloads/Dev Projects/alfonso-portfolio/node_modules/klona/dist/index.mjs";
import "@iconify/vue";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/Alfonso.Nakale/Downloads/Dev Projects/alfonso-portfolio/node_modules/hookable/dist/index.mjs";
import "C:/Users/Alfonso.Nakale/Downloads/Dev Projects/alfonso-portfolio/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "C:/Users/Alfonso.Nakale/Downloads/Dev Projects/alfonso-portfolio/node_modules/radix3/dist/index.mjs";
import "C:/Users/Alfonso.Nakale/Downloads/Dev Projects/alfonso-portfolio/node_modules/defu/dist/defu.mjs";
import "C:/Users/Alfonso.Nakale/Downloads/Dev Projects/alfonso-portfolio/node_modules/perfect-debounce/dist/index.mjs";
import "C:/Users/Alfonso.Nakale/Downloads/Dev Projects/alfonso-portfolio/node_modules/ohash/dist/index.mjs";
const HeadComponentCtxSymbol = Symbol("head-component");
const TagPositionProps = {
  /**
   * @deprecated Use tagPosition
   */
  body: { type: Boolean, default: void 0 },
  tagPosition: { type: String }
};
const normalizeProps = (_props) => {
  const props = Object.fromEntries(
    Object.entries(_props).filter(([_, value]) => value !== void 0)
  );
  if (typeof props.body !== "undefined") {
    props.tagPosition = props.body ? "bodyClose" : "head";
  }
  if (typeof props.renderPriority !== "undefined") {
    props.tagPriority = props.renderPriority;
  }
  return props;
};
function useHeadComponentCtx() {
  return inject(HeadComponentCtxSymbol, createHeadComponentCtx, true);
}
function createHeadComponentCtx() {
  const prev = inject(HeadComponentCtxSymbol, null);
  if (prev) {
    return prev;
  }
  const input = reactive({});
  const entry = useHead(input);
  const ctx = { input, entry };
  provide(HeadComponentCtxSymbol, ctx);
  return ctx;
}
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: { type: [String, Object, Array], default: void 0 },
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: { type: [String, Object, Array], default: void 0 },
  tabindex: String,
  title: String,
  translate: String,
  /**
   * @deprecated Use tagPriority
   */
  renderPriority: [String, Number],
  /**
   * Unhead prop to modify the priority of the tag.
   */
  tagPriority: { type: [String, Number] }
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    title: String
  },
  setup(props, { slots }) {
    const { input } = useHeadComponentCtx();
    input.noscript || (input.noscript = []);
    const idx = input.noscript.push({}) - 1;
    return () => {
      var _a;
      const noscript = normalizeProps(props);
      const slotVnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const textContent = slotVnodes ? slotVnodes.filter(({ children }) => children).map(({ children }) => children).join("") : "";
      if (textContent) {
        noscript.innerHTML = textContent;
      }
      input.noscript[idx] = noscript;
      return null;
    };
  }
});
defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String
  },
  setup(props) {
    const { input } = useHeadComponentCtx();
    input.link || (input.link = []);
    const idx = input.link.push({}) - 1;
    return () => {
      input.link[idx] = normalizeProps(props);
      return null;
    };
  }
});
defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup(props) {
    const { input } = useHeadComponentCtx();
    return () => {
      input.base = normalizeProps(props);
      return null;
    };
  }
});
const Title = defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup(_, { slots }) {
    const { input } = useHeadComponentCtx();
    return () => {
      var _a, _b, _c;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
      input.title = ((_b = defaultSlot == null ? void 0 : defaultSlot[0]) == null ? void 0 : _b.children) ? String((_c = defaultSlot == null ? void 0 : defaultSlot[0]) == null ? void 0 : _c.children) : void 0;
      return null;
    };
  }
});
const Meta = defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    property: String
  },
  setup(props) {
    const { input } = useHeadComponentCtx();
    input.meta || (input.meta = []);
    const idx = input.meta.push({}) - 1;
    return () => {
      const meta = { "http-equiv": props.httpEquiv, ...normalizeProps(props) };
      if ("httpEquiv" in meta) {
        delete meta.httpEquiv;
      }
      input.meta[idx] = meta;
      return null;
    };
  }
});
defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props, { slots }) {
    const { input } = useHeadComponentCtx();
    input.style || (input.style = []);
    const idx = input.style.push({}) - 1;
    return () => {
      var _a, _b, _c;
      const style = normalizeProps(props);
      const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
      if (textContent) {
        input.style[idx] = style;
        style.textContent = textContent;
      }
      return null;
    };
  }
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => {
    createHeadComponentCtx();
    return () => {
      var _a, _b;
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup(_props, ctx) {
    const { input } = useHeadComponentCtx();
    return () => {
      var _a, _b;
      input.htmlAttrs = { ..._props, ...ctx.attrs };
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup(_props, ctx) {
    const { input } = useHeadComponentCtx();
    return () => {
      var _a, _b;
      input.bodyAttrs = { ..._props, ...ctx.attrs };
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SocialShareButtons",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    url: {}
  },
  setup(__props) {
    const copied = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-3" }, _attrs))}><span class="text-xs font-medium text-slate-400">Share:</span><div class="flex items-center gap-2"><button class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-800/60 hover:bg-blue-600/20 border border-slate-700 hover:border-blue-500/50 text-slate-400 hover:text-blue-400 transition-all duration-200 cursor-pointer" title="Share on Twitter"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></button><button class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-800/60 hover:bg-blue-700/20 border border-slate-700 hover:border-blue-600/50 text-slate-400 hover:text-blue-500 transition-all duration-200 cursor-pointer" title="Share on LinkedIn"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></button><button class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-800/60 hover:bg-emerald-600/20 border border-slate-700 hover:border-emerald-500/50 text-slate-400 hover:text-emerald-400 transition-all duration-200 cursor-pointer" title="Share via email"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></button><button class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-800/60 hover:bg-slate-600/20 border border-slate-700 hover:border-slate-500/50 text-slate-400 hover:text-slate-200 transition-all duration-200"${ssrRenderAttr("title", unref(copied) ? "Copied!" : "Copy link")}>`);
      if (!unref(copied)) {
        _push(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>`);
      } else {
        _push(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`);
      }
      _push(`</button></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialShareButtons.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const projectData = getProjectBySlug(slug);
    const { data: markdownContent, pending, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `project-content-${slug}`,
      () => queryContent(`/projects/${slug}`).findOne()
    )), __temp = await __temp, __restore(), __temp);
    const project = computed(() => {
      var _a;
      if (!projectData) return null;
      return {
        ...projectData,
        body: ((_a = markdownContent.value) == null ? void 0 : _a.body) || {},
        _path: `/projects/${slug}`,
        _id: slug,
        _type: "markdown"
      };
    });
    const shareUrl = computed(() => {
      return `https://alfonso-nakale.com/projects/${slug}`;
    });
    useHead(() => {
      var _a, _b, _c, _d;
      const siteUrl = "https://alfonso-nakale.com";
      const title = `${(_a = project.value) == null ? void 0 : _a.title} · Projects`;
      const description = (_b = project.value) == null ? void 0 : _b.description;
      const image = (_c = project.value) == null ? void 0 : _c.image;
      const url = `${siteUrl}/projects/${(_d = project.value) == null ? void 0 : _d.slug}`;
      const type = "website";
      return {
        title,
        meta: [
          { name: "description", content: description },
          { property: "og:title", content: title },
          { property: "og:description", content: description },
          { property: "og:image", content: image },
          { property: "og:url", content: url },
          { property: "og:type", content: type },
          { property: "og:url", content: url },
          { property: "og:image", content: image },
          { property: "og:type", content: type },
          { property: "og:url", content: url },
          { property: "og:image", content: image },
          { property: "og:type", content: type }
        ]
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_ContentRenderer = _sfc_main$2;
      const _component_SocialShareButtons = _sfc_main$1;
      const _component_Footer = _sfc_main$3;
      const _directive_glow = resolveDirective("glow");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-950 text-slate-300" }, _attrs))}><div class="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-12">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-xs sm:text-sm text-slate-400 hover:text-slate-200 transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`← Back to home`);
          } else {
            return [
              createTextVNode("← Back to home")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(pending)) {
        _push(`<div class="mt-6 sm:mt-8 md:mt-10"><div class="animate-pulse"><div class="h-6 sm:h-8 bg-slate-800 rounded w-3/4 mb-3 sm:mb-4"></div><div class="h-3 sm:h-4 bg-slate-800 rounded w-1/2 mb-4 sm:mb-6"></div><div class="h-24 sm:h-32 bg-slate-800 rounded"></div></div></div>`);
      } else if (unref(error) || !unref(project)) {
        _push(`<div class="mt-6 sm:mt-8 md:mt-10 px-2 sm:px-0">`);
        _push(ssrRenderComponent(_component_Head, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Title, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Project not found · Projects`);
                  } else {
                    return [
                      createTextVNode("Project not found · Projects")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Meta, {
                name: "description",
                content: "The project you are looking for does not exist."
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Title, null, {
                  default: withCtx(() => [
                    createTextVNode("Project not found · Projects")
                  ]),
                  _: 1
                }),
                createVNode(_component_Meta, {
                  name: "description",
                  content: "The project you are looking for does not exist."
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h1 class="text-xl sm:text-2xl font-semibold text-white">Project not found</h1><p class="mt-2 text-sm sm:text-base text-slate-400">The project you are looking for does not exist.</p></div>`);
      } else {
        _push(`<div class="mt-4 sm:mt-6">`);
        _push(ssrRenderComponent(_component_Head, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Title, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(`${unref(project).title} · Projects`)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(`${unref(project).title} · Projects`), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Meta, {
                name: "description",
                content: unref(project).description
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Title, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(`${unref(project).title} · Projects`), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_Meta, {
                  name: "description",
                  content: unref(project).description
                }, null, 8, ["content"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="px-2 sm:px-0"><h1 class="text-2xl sm:text-3xl font-bold text-white leading-tight">${ssrInterpolate(unref(project).title)}</h1><p class="mt-2 text-sm sm:text-base text-slate-400 leading-relaxed">${ssrInterpolate(unref(project).description)}</p>`);
        if (unref(project).tech) {
          _push(`<ul class="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2"><!--[-->`);
          ssrRenderList(unref(project).tech, (tech) => {
            _push(`<li class="rounded border border-slate-800 bg-slate-900/40 px-2 py-1 text-xs text-slate-400">${ssrInterpolate(tech)}</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(project).image) {
          _push(`<div class="mt-4 sm:mt-6 border-1 border-slate-900 rounded-lg overflow-hidden"><img${ssrRenderAttr("src", unref(project).image)}${ssrRenderAttr("alt", unref(project).title)} class="w-full rounded-lg"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="prose prose-invert prose-sm sm:prose-base mt-4 sm:mt-6 max-w-none">`);
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(project) }, null, _parent));
        _push(`</div><div class="mt-6 sm:mt-8 flex items-center gap-3">`);
        if (unref(project).externalUrl) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(project).externalUrl,
            target: "_blank",
            class: "inline-flex items-center rounded-md border border-emerald-700 bg-emerald-600/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-emerald-300 hover:bg-emerald-600/20 transition-colors duration-200"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Visit project `);
              } else {
                return [
                  createTextVNode(" Visit project ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="mt-6 sm:mt-8">`);
        _push(ssrRenderComponent(_component_SocialShareButtons, {
          title: unref(project).title,
          description: unref(project).description,
          url: unref(shareUrl)
        }, null, _parent));
        _push(`</div></div></div>`);
      }
      _push(`<div class="mx-auto w-full"><h2 class="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-400 mt-8 sm:mt-8">Other projects</h2><div class="mt-3 sm:mt-4 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(projects).slice(0, 2), (otherProject) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: otherProject.slug,
          to: `/projects/${otherProject.slug}`,
          class: "block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<article${ssrRenderAttrs(mergeProps({ class: "mouse-glow rounded-md border border-slate-800 bg-slate-900/40 p-3 sm:p-4 transition hover:border-slate-700" }, ssrGetDirectiveProps(_ctx, _directive_glow)))}${_scopeId}><img${ssrRenderAttr("src", otherProject.image)}${ssrRenderAttr("alt", otherProject.title)} class="w-full h-32 sm:h-40 object-cover rounded-md mb-2 sm:mb-3 border-1 border-slate-900"${_scopeId}><h4 class="font-semibold text-sm sm:text-base text-slate-100 leading-snug"${_scopeId}>${ssrInterpolate(otherProject.title)}</h4><p class="mt-1 text-xs sm:text-sm text-slate-400 line-clamp-2 sm:truncate leading-relaxed"${_scopeId}>${ssrInterpolate(otherProject.description)}</p><div class="mt-2 text-xs text-slate-500 leading-relaxed"${_scopeId}>${ssrInterpolate(otherProject.tech.join(" · "))}</div></article>`);
            } else {
              return [
                withDirectives((openBlock(), createBlock("article", { class: "mouse-glow rounded-md border border-slate-800 bg-slate-900/40 p-3 sm:p-4 transition hover:border-slate-700" }, [
                  createVNode("img", {
                    src: otherProject.image,
                    alt: otherProject.title,
                    class: "w-full h-32 sm:h-40 object-cover rounded-md mb-2 sm:mb-3 border-1 border-slate-900"
                  }, null, 8, ["src", "alt"]),
                  createVNode("h4", { class: "font-semibold text-sm sm:text-base text-slate-100 leading-snug" }, toDisplayString(otherProject.title), 1),
                  createVNode("p", { class: "mt-1 text-xs sm:text-sm text-slate-400 line-clamp-2 sm:truncate leading-relaxed" }, toDisplayString(otherProject.description), 1),
                  createVNode("div", { class: "mt-2 text-xs text-slate-500 leading-relaxed" }, toDisplayString(otherProject.tech.join(" · ")), 1)
                ])), [
                  [_directive_glow]
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="mt-4 sm:mt-6 flex items-center justify-start">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#projects",
        class: "text-xs sm:text-sm text-slate-400 hover:text-slate-200 transition-colors duration-200 px-4 py-2 rounded-md border border-slate-800 hover:border-slate-700 bg-slate-900/40 cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`← See more`);
          } else {
            return [
              createTextVNode("← See more")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><footer class="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-12">`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-27nT62EC.js.map
