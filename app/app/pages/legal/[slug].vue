<script setup lang="ts">
const route = useRoute();

type LegalMeta = {
  last_updated_at?: string
}

type LegalArticle = {
  path: string
  stem: string
  title?: string
  meta?: LegalMeta
  body?: unknown
}


const slug = computed(() => String(route.params.slug || ''))

const { data: article } = await useAsyncData<LegalArticle | null>(
    () => `legal-article-${slug.value}`,
    () =>
        queryCollection('legal')
            .select('path', 'stem', 'title', 'meta', 'body')
            .where('stem', '=', `legal/${slug.value}`)
            .first()
)

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Legal post not found' })
}
</script>

<template>
  <section :id="'legal-' + route.params.slug" class="bg-white dark:bg-gray-900 w-full pb-24 mb-0">
    <div class="w-full pb-40 pt-20 bg-gray-100 dark:bg-black px-4">
      <h1 class="text-6xl font-bold text-center text-gray-700 dark:text-white">{{ article?.title }}</h1>
    </div>
    <div class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 max-w-7xl rounded-3xl flex flex-col items-center shadow-md -mt-20 mx-auto p-10 gap-10">
      <p class="text-body italic text-lg text-gray-500 dark:text-gray-400 max-w-3xl">
        {{ article?.meta?.last_updated_at }}
      </p>
      <ContentRenderer :value="article" class="prose prose-sm lg:prose-base dark:prose-invert max-w-5xl"/>
    </div>
  </section>
</template>

<style scoped>

</style>
