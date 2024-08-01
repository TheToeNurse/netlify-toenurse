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
  <section class="bg-white dark:bg-black text-gray-900 dark:text-gray-100 pb-24">
    <div class="max-w-[1030px] mx-auto px-4 sm:px-8 xl:px-0">
      <div class="w-full lg:w-4/5 mx-auto text-center mt-24">
        <h1 class="font-bold text-2xl sm:text-4xl lg:text-custom-2 text-dark dark:text-gray-300 mb-5">
          {{  service.title }}
        </h1>
        <p class="text-body italic text-lg text-gray-500 dark:text-gray-400">
          {{ service.summary }}
        </p>
      </div>
      <NuxtImg
          :src="'/service-images/' + service.image"
          :alt="service.img_alt"
          class="rounded-xl mt-10 mb-11"
      />
      <div class="w-full lg:w-4/5 mx-auto text-gray-700 dark:text-gray-400">
        <ContentRenderer :value="service" class="prose lg:prose-lg dark:prose-invert max-w-none"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
</style>
