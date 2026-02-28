<script setup lang="ts">
const route = useRoute()

type ServiceMeta = {
  image?: string
}

type ServiceArticle = {
  path: string
  stem: string
  title?: string
  description?: string
  meta?: ServiceMeta
  body?: unknown
}

const slug = computed(() => String(route.params.service || ''))

const { data: article } = await useAsyncData<ServiceArticle | null>(
  () => `service-article-${slug.value}`,
  () =>
    queryCollection('service')
      .select('path', 'stem', 'title', 'description', 'meta', 'body')
      .where('stem', '=', `service/${slug.value}`)
      .first()
)

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Service post not found' })
}
</script>

<template>
  <section :id="'article-' + route.params.service" class="bg-white dark:bg-gray-900 w-full pb-24 mb-0">
    <div class="w-full pb-40 pt-20 bg-gray-100 dark:bg-black px-4">
      <h1 class="text-6xl font-bold text-center text-gray-700 dark:text-white">{{ article?.title }}</h1>
    </div>
    <div class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 max-w-7xl rounded-3xl flex flex-col items-center shadow-md -mt-20 mx-auto p-10 gap-10">
      <NuxtImg
          :src="`/service-images/${article?.meta?.image}`"
          class="max-w-3xl rounded-2xl"
          :alt="`image for ${article?.title} article`"
      />
      <ContentRenderer :value="article" class="prose lg:prose-lg dark:prose-invert max-w-5xl"/>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
</style>
