import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: 'page',
            source: '**/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                tech: z.array(z.string()).default([]),
                image: z.string().default(''),
                externalUrl: z.string().optional()
            })
        })
    }
})
