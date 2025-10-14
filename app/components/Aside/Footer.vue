<template>
  <div
    class="absolute bottom-0 left-0 justify-center hidden w-full p-4 space-x-4 bg-gray-50 lg:flex dark:bg-gray-700"
    sidebar-bottom-menu=""
  >
    <AsideTheme />
    <ClientOnly>
      <AsideLanguage />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
