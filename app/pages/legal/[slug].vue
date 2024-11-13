<script setup lang="ts">
definePageMeta({
  layout: "default",
});
const route = useRoute();
const { data } = await useAsyncData("article", () =>
    queryContent(`/legal/${route.params.slug}`).findOne()
);
</script>

<template>
  <section :id="'legal-' + route.params.slug" class="bg-white dark:bg-gray-900 w-full pb-24 mb-0">
    <div class="w-full pb-40 pt-20 bg-gray-100 dark:bg-black px-4">
      <h1 class="text-6xl font-bold text-center text-gray-700 dark:text-white">{{ data.title }}</h1>
    </div>
    <div class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 max-w-7xl rounded-3xl flex flex-col items-center shadow-md -mt-20 mx-auto p-10 gap-10">
      <p class="text-body italic text-lg text-gray-500 dark:text-gray-400 max-w-3xl">
        {{ data.last_updated_at }}
      </p>
      <ContentDoc :value="data" class="prose prose-sm lg:prose-base dark:prose-invert max-w-5xl"/>
    </div>
  </section>
</template>

<style scoped>

</style>
