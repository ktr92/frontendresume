<template>
  <div>
    <li>
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
        role="menuitem"
      >
        <span class="inline-flex items-center">
          <UiIcon
            v-if="icon && icon.length"
            :name="icon"
            :class="iconclasses"
          />
          <template v-if="title">{{ title }}</template>
        </span>
      </a>
    </li>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  iconclasses: {
    type: String,
    default: "h-3.5 mr-2 rounded-full w-3.5 overflow-hidden",
  },
})
</script>

<style scoped></style>
