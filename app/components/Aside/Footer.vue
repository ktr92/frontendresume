<template>
  <div
    class="fixed md:absolute bottom-0 left-0 justify-center md:hidden w-full p-1 md:p-4 space-x-4 bg-gray-50/80 md:bg-gray-50 lg:flex dark:bg-gray-700/80 z-10 flex "
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
