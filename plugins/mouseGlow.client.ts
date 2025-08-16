// Registers a global directive `v-glow` that updates CSS variables
// `--glow-x` and `--glow-y` with the pointer position relative to the element.
// This enables mouse-tracking visual effects via CSS/Tailwind.

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('glow', {
    mounted(el: HTMLElement) {
      let frameRequested = false
      let lastX = 0
      let lastY = 0

      const updateVars = () => {
        frameRequested = false
        el.style.setProperty('--glow-x', `${lastX}px`)
        el.style.setProperty('--glow-y', `${lastY}px`)
      }

      const onPointerMove = (event: PointerEvent) => {
        const rect = el.getBoundingClientRect()
        lastX = event.clientX - rect.left
        lastY = event.clientY - rect.top
        if (!frameRequested) {
          frameRequested = true
          requestAnimationFrame(updateVars)
        }
      }

      const onPointerLeave = () => {
        // Optionally center or clear on leave
        // el.style.removeProperty('--glow-x')
        // el.style.removeProperty('--glow-y')
      }

      el.addEventListener('pointermove', onPointerMove)
      el.addEventListener('pointerleave', onPointerLeave)

      // Store handlers for cleanup
      ;(el as any)._glowHandlers = { onPointerMove, onPointerLeave }
    },
    unmounted(el: HTMLElement) {
      const handlers = (el as any)._glowHandlers as
        | { onPointerMove: (e: PointerEvent) => void; onPointerLeave: () => void }
        | undefined
      if (handlers) {
        el.removeEventListener('pointermove', handlers.onPointerMove)
        el.removeEventListener('pointerleave', handlers.onPointerLeave)
        delete (el as any)._glowHandlers
      }
    },
  })
})


