<template>
  <div
    class="relative w-full h-full overflow-y-auto pl-0 lg:pl-[400px] dark:bg-gray-700"
  >
    <main>
      <div
        class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-2 xl:gap-8 dark:bg-gray-700 text-gray-700 dark:text-white"
      >
        <div class="mb-4 col-span-1 xl:mb-2">
          <h1 class="text-xl font-semibold sm:text-2xl">
            {{ $t("title_about") }}
          </h1>
          <div class="my-4 text-lg max-w-[1000px]">
            <p>{{ $t("about") }}</p>
          </div>
        </div>
        <div class="mb-4 col-span-1 xl:mb-2">
          <h2 class="text-xl font-semibold sm:text-2xl">
            {{ $t("title_format") }}
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
          <h2 class="text-xl font-semibold sm:text-2xl">
            {{ $t("title_experience") }}
          </h2>
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
          <h2 class="text-xl font-semibold sm:text-2xl">
            {{ $t("title_education") }}
          </h2>

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
      <div
        class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-2 xl:gap-8 dark:bg-gray-700"
      >
        <div class="mb-4 col-span-1 xl:mb-2">
          <h2 class="text-xl font-semibold sm:text-2xl">
            {{ $t("title_skills") }}
          </h2>
          <template v-if="skills">
            <div class="my-4 text-lg">
              <div class="flex flex-wrap gap-4">
                <div v-for="skill in skills" :key="skill.name">
                  <span class="text-green-900 font-bold">{{ skill.name }}</span>
                  <span>{{ skill.text }}</span>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div v-for="value in 4" :key="value">
              <UiSkeleton />
            </div>
          </template>
           <template v-if="informationlist">
            <div class="my-4 text-lg">
              <ul class="list-disc ml-6">
                <li v-for="information in informationlist" :key="information.name" class="">
                  {{ information.text }}
                </li>
              </ul>
            </div>
          </template>
          <template v-else>
            <div v-for="value in 4" :key="value">
              <UiSkeleton />
            </div>
          </template>
        </div>

        <div class="mb-4 col-span-1 xl:mb-2">
          <h2 class="text-xl font-semibold sm:text-2xl">
            {{ $t("title_information") }}
          </h2>
          <template v-if="extra">
            <div class="my-4 text-lg">
              {{ extra }}
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
const skills = mainstore.getSkills
const informationlist = mainstore.getInformation
const extra = mainstore.getExtra
</script>

<style scoped></style>
