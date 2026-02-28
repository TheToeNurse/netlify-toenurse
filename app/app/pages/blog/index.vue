<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

type BlogMeta = {
  image?: string
  published_date?: string
}

type BlogPostListItem = {
  path: string
  title?: string
  description?: string
  meta?: BlogMeta
}

const { data: blog } = await useAsyncData<BlogPostListItem[]>('blog', () =>
  queryCollection('blog')
    .select('path', 'title', 'description', 'meta')
    .all()
)
</script>

<template>
  <div class="w-full bg-white dark:bg-gray-900 pb-24">
    <div class="w-full pb-40 pt-20 bg-white dark:bg-black px-4">
      <h1 class="text-6xl font-bold text-center text-gray-700 dark:text-white">My Blog</h1>
    </div>

    <div
      class="max-w-7xl bg-white rounded-3xl shadow-md -mt-20 mx-auto p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      <div
        v-for="item in (blog || [])"
        :key="item.path"
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <NuxtLink :to="item.path">
          <img
            v-if="item.meta?.image"
            class="rounded-t-lg aspect-square"
            :src="`/blog-images/${item.meta.image}`"
            :alt="item.title || 'Blog post image'"
          />
        </NuxtLink>

        <div class="p-5">
          <NuxtLink :to="item.path">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ item.title }}
            </h5>
          </NuxtLink>

          <p v-if="item.description" class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ item.description }}
          </p>

          <p v-if="item.meta?.published_date" class="mb-3 text-sm text-gray-500 dark:text-gray-400">
            {{ item.meta.published_date }}
          </p>

          <NuxtLink
            :to="item.path"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
