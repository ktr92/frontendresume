<template>
  <div class="border-none">
    <div class="mb-1">
      <div class="pt-2 space-y-2" v-for="link in links" :key="link.code">
        <a
          :href="link.link"
          target="_blank"
          class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
        >
          <UiIcon :name="link.code" classes="h-8 rounded-full w-8 overflow-hidden block" />
          <span class="ml-3" sidebar-toggle-item="">{{ link.text }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    code: "email",
    link: "mailto:ktr716@yandex.ru",
    text: "ktr716@yandex.ru",
  },
]
</script>

<style scoped></style>
