<template>
  <div
    class="relative w-full h-full overflow-y-auto pl-0 lg:pl-[400px] dark:bg-gray-700"
  >
    <main>
      <div
        class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-2 xl:gap-8 dark:bg-gray-700 text-gray-700 dark:text-white"
      >
        <div class="mb-4 col-span-1 xl:mb-2">
          <h1 class="text-xl font-semibold sm:text-2xl">О себе</h1>
          <div class="my-4 text-lg max-w-[1000px]">
            <p>{{ $t("about") }}</p>
          </div>
        </div>
        <div class="mb-4 col-span-1 xl:mb-2">
          <h2 class="text-xl font-semibold sm:text-2xl">
            Предпочитаемый формат работы
          </h2>
          <div class="my-4 text-lg max-w-[1000px]">
            <ul class="ml-4">
              <li v-for="item in aboutlist_li" class="list-disc">
                <span v-if="item.length">
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-2 xl:gap-8 dark:bg-gray-700"
      >
        <div class="mb-4 col-span-1 xl:mb-2">
          <h2 class="text-xl font-semibold sm:text-2xl">Опыт работы</h2>
           <template v-if="experience">
             <div class="my-4 text-lg">
            <UiTimeline :timedata="experience" />
          </div>
          </template>
          <template v-else>
            <div v-for="value in 4" :key="value">
              <UiSkeleton />
            </div>
          </template>
         
        </div>

        <div class="mb-4 col-span-1 xl:mb-2">
          <h2 class="text-xl font-semibold sm:text-2xl">Образование</h2>

          <template v-if="education">
            <div class="my-4 text-lg">
              <UiTimeline :timedata="education" />
            </div>
          </template>
          <template v-else>
            <div v-for="value in 4" :key="value">
              <UiSkeleton />
            </div>
          </template>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const aboutlist = $t("aboutlist")
const aboutlist_li = computed(() => {
  return aboutlist.split(".").filter((item) => item.length > 1)
})
const mainstore = useMainStore()
const education = mainstore.getEducation
const experience = mainstore.getExperience
const { t, locale, messages } = useI18n();

console.log(messages.value)
</script>

<style scoped></style>
