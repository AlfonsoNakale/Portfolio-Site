import { _ as __nuxt_component_0 } from "./nuxt-link-Dkcz6mcN.js";
import { defineComponent, mergeProps, withCtx, unref, createVNode, useSSRContext, createTextVNode } from "C:/Users/Alfonso.Nakale/Downloads/Dev Projects/alfonso-portfolio/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Icon } from "@iconify/vue";
const projects = [
  {
    slug: "unlocking-user-insights-in-namibia",
    title: "Unlocking User Insights",
    description: "Why Microsoft Clarity Should Be Your Go-to Analytics Tool.",
    tech: ["Analytics", "Microsoft Clarity", "SEO"],
    content: "In many Namibian businesses, websites are still treated as checkbox assets—necessary, yet under-leveraged.",
    image: "/project-images/Clarity-main-img.jpg"
    // externalUrl: 'https://clarity.microsoft.com'
  }
];
function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SocialIcons",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-4 sm:gap-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_nuxtLink, {
        to: "https://www.linkedin.com/in/alfonso-nakale/",
        target: "_blank",
        class: "transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "mynaui:brand-linkedin",
              class: "w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-slate-300"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Icon), {
                icon: "mynaui:brand-linkedin",
                class: "w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-slate-300"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxtLink, {
        to: "https://github.com/alfonso-nakale",
        target: "_blank",
        class: "transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "ri:github-fill",
              class: "w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-slate-300"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Icon), {
                icon: "ri:github-fill",
                class: "w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-slate-300"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxtLink, {
        to: "mailto:alfonso.nakale@gmail.com",
        target: "_blank",
        class: "transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "ri:send-plane-line",
              class: "w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-slate-300"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Icon), {
                icon: "ri:send-plane-line",
                class: "w-4 h-4 sm:w-5 sm:h-5 text-slate-400 hover:text-slate-300"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialIcons.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-slate-950 text-slate-300" }, _attrs))}><div class="w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 px-2 sm:px-0"><div class="flex justify-center sm:justify-start">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div><div class="flex justify-center sm:justify-end">`);
      _push(ssrRenderComponent(_component_nuxtLink, {
        to: "tel:+264814687647",
        class: "text-xs sm:text-sm font-medium text-slate-400 hover:text-slate-300 transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-slate-400"${_scopeId}>Cell · </span>+264 81 468 7647 `);
          } else {
            return [
              createVNode("span", { class: "text-slate-400" }, "Cell · "),
              createTextVNode("+264 81 468 7647 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  getProjectBySlug as g,
  projects as p
};
//# sourceMappingURL=Footer-Doba11WO.js.map
