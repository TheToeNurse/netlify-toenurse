<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-white dark:bg-black'
  }
})
</script>

<template>
  <DefaultNavigation />
  <slot></slot>
  <DefaultFooter />
</template>

<style scoped>

</style>
