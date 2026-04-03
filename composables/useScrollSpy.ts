import { ref, onMounted, onUnmounted } from 'vue'

export const useScrollSpy = (selectors: string[], offset: number = 100) => {
  const activeSection = ref<string | null>(selectors[0] || null)

  const updateActiveSection = () => {
    const scrollPosition = window.scrollY + offset

    for (const selector of selectors) {
      const element = document.querySelector(selector)
      if (element instanceof HTMLElement) {
        if (
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          activeSection.value = selector
          break
        }
      }
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', updateActiveSection)
    updateActiveSection()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
  })

  return { activeSection }
}
