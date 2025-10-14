<template>
  <div>
    <button
      @click="toggleDark()"
      class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <UiIcon :name="iconcode" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
const iconcode = computed(() => isDark.value ? 'dark' : 'light')

</script>

<style scoped></style>
