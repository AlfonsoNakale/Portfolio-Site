import type { ComponentData } from 'nuxt-component-meta'
export type NuxtComponentMetaNames = 'ProseA' | 'ProseBlockquote' | 'ProseCode' | 'ProseEm' | 'ProseH1' | 'ProseH2' | 'ProseH3' | 'ProseH4' | 'ProseH5' | 'ProseH6' | 'ProseHr' | 'ProseImg' | 'ProseLi' | 'ProseOl' | 'ProseP' | 'ProsePre' | 'ProseScript' | 'ProseStrong' | 'ProseTable' | 'ProseTbody' | 'ProseTd' | 'ProseTh' | 'ProseThead' | 'ProseTr' | 'ProseUl' | 'Icon'
export type NuxtComponentMeta = Record<NuxtComponentMetaNames, ComponentData>
declare const components: NuxtComponentMeta
export { components as default, components }