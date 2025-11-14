<template>
  <div
    class="relative w-full h-full overflow-y-auto pl-0 lg:pl-[400px] dark:bg-gray-700"
  >
    <div class="p-8">
      <NuxtLink to="/" class="block text-green-600 underline"
        >Вернуться к резюме</NuxtLink
      >
      <template v-if="projects">
        <div class="my-4 text-lg">
          <div class="">
            <div
              v-for="project in projects"
              :key="project.id"
              class="rounded-md py-1 px-2 border-transparent bg-gray-100 dark:bg-gray-800 mb-1"
              :class="{ active: activeId === project.id }"
            >
              <div
                v-if="project.id"
                class="flex items-center justify-between cursor-pointer"
                @click="toggleItem(project.id)"
              >
                <div>
                  <div v-if="project.prname" class="text-gray-700 dark:text-white text-md mb-2">
                    {{ translate(project, project.prname) }}
                  </div>
                </div>
                <div>
                  <div v-if="project.prtags">
                    <div class="flex gap-1 items-center">
                      <div
                        v-for="prtag in project.prtags"
                        :key="prtag"
                        class="text-center w-8"
                      >
                        <img
                          :src="`/img/${prtag}.svg`"
                          class="w-6 h-6 block m-auto"
                        />
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <div  class="active-content" :class="{activecontent: activeId === project.id }">
                  <div class="overflow-hidden">
                    <div class="mb-4 text-gray-600 dark:text-white text-[15px] leading-[1.4]">
                      {{ project.prdescription }}
                    </div>
                    <div class="flex items-center gap-2 mb-2">
                      <UiButton :link="project.prlink">
                        {{ $t("DEMO") }}
                      </UiButton>
                      <UiButton :link="project.prwork">
                        {{ $t("WEBSITE") }}
                      </UiButton>
                      <UiButton :link="project.prgit">
                        {{ $t("GITHUB") }}
                      </UiButton>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div v-for="value in 22" :key="value">
          <UiSkeleton />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import translate from "@/utils/translate"
const mainstore = useMainStore()
const projects: IProject[] = mainstore.getProjects ? mainstore.getProjects : []
const activeId = ref('')
  if (projects && projects[0]) {
    activeId.value = (projects[0].id)
  }

const toggleItem = (id: string) => {
  activeId.value !== id ? (activeId.value = id) : ""
  nextTick()
}
</script>

<style scoped>

.active {
  @apply bg-white dark:bg-gray-700;

 
}
.active-content {
 display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.5s ease-out;
  overflow: hidden;
}
.activecontent {
   grid-template-rows: 1fr;
}

</style>
