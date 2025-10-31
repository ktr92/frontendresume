<template>
  <div
    class="relative w-full h-full overflow-y-auto pl-0 lg:pl-[400px] dark:bg-gray-700"
  >
    <main>
      <div
        class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-2 xl:gap-8 dark:bg-gray-700"
      >
        <div class="mb-4 col-span-1 xl:mb-2">
          <h1
            class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
          >
            О себе
          </h1>
          <div class="my-4 text-gray-700 text-lg max-w-[1000px]">
            <p>{{ $t('about') }}</p>
          </div>
        </div>
        <div class="mb-4 col-span-1 xl:mb-2">
          <h1
            class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
          >
            Предпочитаемый формат работы
          </h1>
          <div class="my-4 text-gray-700 text-lg max-w-[1000px]">
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
        class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-1 xl:gap-8 dark:bg-gray-700"
      >
        <div class="mb-4 col-span-1 xl:mb-2">
          <h1
            class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
          >
            Образование и опыт работы
          </h1>
          <div class="my-4 text-gray-700 text-lg">
            <UiTimeline :experience="experience" />
          </div>
        </div>
       
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  const aboutlist = $t('aboutlist')
  const aboutlist_li = computed(() => {
    return aboutlist.split('.').filter(item => item.length > 1)
  })

  const experienceStore = useExperienceStore()
  const experience = experienceStore.getExperience
</script>

<style scoped></style>
