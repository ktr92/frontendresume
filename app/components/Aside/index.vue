<template>
  <aside
    class="bg-gray-50 fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-[400px] h-full font-normal duration-75 lg:flex transition-width"
    aria-label="Sidebar"
  >
    <div
      class="relative flex flex-col flex-1 min-h-0 pt-0 bg-gray-50 border-r border-gray-200 dark:bg-gray-700 dark:border-gray-600"
    >
      <div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
        <div
          class="flex-1 px-3 space-y-1 bg-gray-50 divide-y divide-gray-200 dark:bg-gray-700 dark:divide-gray-500"
        >
          <AsidePhoto />
          <AsideContact />
          
        </div>
      </div>
      <AsideFooter />
    </div>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped></style>
