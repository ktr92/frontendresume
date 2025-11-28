<template>
  <div>
    <a
      :href="link"
      target="_blank"
      class="rounded-md border md:font-bold border-gray-400 py-2 px-2 md:px-4 text-xs md:text-sm bg-gray-400 hover:bg-gray-600 text-white transition-all dark:bg-gray-800 dark:text-gray-300"
    >
      <slot></slot>
    </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  link: String
})
</script>

<style scoped></style>
