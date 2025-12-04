<template>
  <div
    class="relative w-full h-full overflow-y-auto pl-0 lg:pl-[400px] dark:bg-gray-700"
  >
    <main>
      <div
        class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-2 xl:gap-8 dark:bg-gray-700 text-gray-700 dark:text-white"
      >
        <div class="mb-4 col-span-1 xl:mb-2">
          <h1 class="text-xl font-semibold sm:text-2xl text-gray-700 dark:text-white">
            {{ $t("title_about") }}
          </h1>
          <div class="my-4 text-lg max-w-[1000px]" >
            <p v-for="item in about" :key="item.id">
              {{ translate(item, item.text) }}
            </p>
          </div>
        </div>
        <div class="mb-4 col-span-1 xl:mb-2">
          <h2 class="text-xl font-semibold sm:text-2xl text-gray-700 dark:text-white">
            {{ $t("title_format") }}
          </h2>
          <div class="my-4 text-lg max-w-[1000px]">
            <ul class="ml-4">
              <li v-for="item in aboutlist" class="list-disc">
                <span >
                  {{ translate(item, item.text) }}
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
          <h2 class="text-xl font-semibold sm:text-2xl text-gray-700 dark:text-white">
            {{ $t("title_skills") }}
          </h2>
          <template v-if="skills">
            <div class="my-4 text-lg">
              <div class="flex flex-wrap gap-4">
                <div v-for="skill in skills" :key="skill.id">
                  <span class="text-green-900 font-bold dark:text-white">{{ skill.name }}</span>
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
           <template v-if="information">
            <div class="my-4 text-lg">
              <ul class="list-disc ml-6 text-gray-700 dark:text-white">
                <li v-for="item in information" :key="information.id" class="leading-[1.4] mb-2">
                  {{ translate(item, item.text) }}
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
          <h2 class="text-xl font-semibold sm:text-2xl text-gray-700 dark:text-white">
            {{ $t("title_information") }}
          </h2>
           <template v-if="extra">
            <div class="my-4 text-lg">
              <ul class="list-disc ml-6 text-gray-700 dark:text-white">
                <li v-for="item in extra" :key="item.id" class="leading-[1.4] mb-2">
                  <template v-if="item.text">
                    {{ translate(item, item.text) }} <a :href="item.link" target="_blank" class="text-green-600">{{ item.link }}</a>
                  </template>
                  <template v-else>
                    {{ translate(item, item.text) }}
                  </template>
                 
                </li>
              </ul>
            </div>
          </template>
          <template v-else>
            <div v-for="value in 6" :key="value">
              <UiSkeleton />
            </div>
          </template>
         
        </div>
      </div>
         <div
        class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-2 xl:gap-8 dark:bg-gray-700"
      >
        <div class="mb-4 col-span-1 xl:mb-2">
          <h2 class="text-xl font-semibold sm:text-2xl text-gray-700 dark:text-white">
            {{ $t("title_experience") }}
          </h2>
          <template v-if="experience && experience.length">
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
          <h2 class="text-xl font-semibold sm:text-2xl text-gray-700 dark:text-white">
            {{ $t("title_education") }}
          </h2>

          <template v-if="education && education.length">
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

const mainstore = useMainStore()
const skills = mainstore.getContentBy("skills")
const experience = mainstore.getContentBy("experience")
const information = mainstore.getContentBy("information")
const extra = mainstore.getContentBy("extra")
const about = mainstore.getContentBy("about")
const education = mainstore.getContentBy("education")
const aboutlist = mainstore.getContentBy("aboutlist")

/* const experience = mainstore.getExperience
const skills = mainstore.getSkills
const informationlist = mainstore.getInformation
const extra = mainstore.getExtra
const about = mainstore.getAbout
const aboutlist = mainstore.getAboutlist */
</script>

<style scoped></style>
