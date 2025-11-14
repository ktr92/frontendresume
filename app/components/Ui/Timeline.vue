<template>
  <div>
    <ol class="relative border-s border-gray-200 dark:border-gray-700">
      <li class="mb-10 ms-4" v-for="item in timedata" :key="item.id">
        <div
          class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
          :class="{ 'bg-green-500': item.status }"
        ></div>
        <time
          class="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500"
          >{{ item.date }}</time
        >
        <h3 class="text-lg font-semibold text-gray-700 dark:text-white leading-[1.4]">
          {{ translate(item, item.title) }}
        </h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {{ translate(item, item.description) }}
        </p>
        <span
          href="#"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >{{ translate(item, item.badge) }}</span
        >
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import translate from "@/utils/translate"

const props = defineProps({
  timedata: {
    type: Object as PropType<ITimeline[]>,
    required: true,
  },
})

/* const getLocalizedText = (item, key) => {
    const currentLocale = useI18n().locale;
    if (item.i18n && item.i18n[key] && item.i18n[key][currentLocale]) {
      return item.i18n[key][currentLocale];
    }
    // если перевод отсутствует, возвращаем оригинальное значение или пустую строку
    return item[key] || '';
  } */
</script>

<style scoped></style>
