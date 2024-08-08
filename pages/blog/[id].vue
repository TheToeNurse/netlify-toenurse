<script setup lang="ts">
const route = useRoute();
const { data: article } = await useAsyncData("article", () =>
    queryContent(`/blog/${route.params.id}`).findOne()
);
</script>

<template>
  <section :id="'article-' + route.params.id" class="bg-white dark:bg-gray-900 w-full pb-24 mb-0">
    <div class="w-full pb-40 pt-20 bg-gray-100 dark:bg-black px-4">
      <h1 class="text-6xl font-bold text-center text-gray-700 dark:text-white">{{ article.title }}</h1>
    </div>
    <div class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 max-w-7xl rounded-3xl flex flex-col items-center shadow-md -mt-20 mx-auto p-10 gap-10">
      <img
          :src="`/blog-images/${article.image}`"
          class="max-w-3xl rounded-2xl"
          :alt="`image for ${article.title} article`"
      />
      <div class="flex items-center justify-center gap-4 mt-7.5">
        <div class="flex w-10 h-10 rounded-full overflow-hidden">
          <NuxtImg
            :src="`/blog-images/author.jpg`"
            alt="author"
          />
        </div>
        <div class="text-left">
          <h4 class="font-medium text-custom-lg text-dark mb-1">
            <em>Trish <strong>The Toe Nurse</strong></em>
          </h4>
          <div class="flex items-center gap-1.5">
            <p>{{ article.published_date }}</p>
          </div>
        </div>
      </div>
      <ContentRenderer :value="article" class="prose lg:prose-lg dark:prose-invert max-w-5xl"/>
    </div>
  </section>
</template>

<style scoped>
.container p {

}
</style>
