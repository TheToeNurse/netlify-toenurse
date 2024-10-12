<script setup lang="ts">
definePageMeta({
  layout: "default",
});
const route = useRoute();
const { data: service } = await useAsyncData("service", () =>
    queryContent(`/service/${route.params.service}`).findOne()
);
</script>

<template>
  <section :id="'article-' + route.params.service" class="bg-white dark:bg-gray-900 w-full pb-24 mb-0">
    <div class="w-full pb-40 pt-20 bg-gray-100 dark:bg-black px-4">
      <h1 class="text-6xl font-bold text-center text-gray-700 dark:text-white">{{ service.title }}</h1>
    </div>
    <div class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 max-w-7xl rounded-3xl flex flex-col items-center shadow-md -mt-20 mx-auto p-10 gap-10">
      <NuxtImg
          :src="`/service-images/${service.image}`"
          class="max-w-3xl rounded-2xl"
          :alt="`image for ${service.title} article`"
      />
      <p class="text-body italic text-lg text-gray-500 dark:text-gray-400 max-w-3xl">
        {{ service.summary }}
      </p>
      <ContentRenderer :value="service" class="prose lg:prose-lg dark:prose-invert max-w-5xl"/>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
</style>
