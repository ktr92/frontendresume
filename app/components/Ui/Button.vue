<template>
  <div>
    <a
      :href="link"
      target="_blank"
      class="rounded-md border border-gray-400 py-2 px-4 text-sm bg-gray-400 hover:bg-gray-600 text-white transition-all"
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
