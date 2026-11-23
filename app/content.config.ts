import {defineContentConfig, defineCollection} from '@nuxt/content'

export default defineContentConfig({
    collections: {
        service: defineCollection({
            type: 'page',
            source: 'service/**/*.md'
        }),

        blog: defineCollection({
            type: 'page',
            source: 'blog/**/*.md'
        }),

        legal: defineCollection({
            type: 'page',
            source: 'legal/**/*.md'
        })
    }
})
