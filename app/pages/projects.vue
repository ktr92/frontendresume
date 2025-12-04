<template>
  <div
    class="relative w-full h-full overflow-y-auto pl-0 lg:pl-[400px] dark:bg-gray-700"
  >
    <div class="p-2 md:p-8">
      <NuxtLinkLocale to="/" class="block text-green-600 dark:text-green-400 underline"
        >{{ $t('gotoresume')  }}</NuxtLinkLocale
      >
      <template v-if="projects">
        <div class="my-4 text-lg">
          <div class="">
            <div
              v-for="project in projects"
              :key="project.id"
              class="rounded-md py-2 px-2 md:border-transparent bg-gray-100 dark:bg-gray-700 mb-1 "
              :class="{ active: activeId === project.id }"
            >
              <div
                v-if="project.id"
                class="md:flex items-center justify-between cursor-pointer accordion p-2 md:py-0 dark:bg-gray-600 rounded"    
                @click="toggleItem(project.id)"
              >
                <div>
                  <div
                    v-if="project.prname"
                    class="text-gray-700 dark:text-gray-200 text-sm leading-1 md:text-md"
                  >
                    {{ translate(project, project.prname) }}
                  </div>
                </div>
                <div>
                  <div v-if="project.prtags">
                    <div class="flex gap-1 items-center mt-2">
                      <div
                        v-for="prtag in project.prtags"
                        :key="prtag"
                        class="md:text-center  flex items-center ml-4"
                      >
                        <img
                          :src="`/img/${prtag}.svg`"
                          width="25" height="24"
                          class="w-4 md:w-6  block m-auto"
                        />
                        <span class="pl-1 text-[10px] text-gray-500 dark:text-gray-200 uppercase font-bold">{{ prtag }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="active-content"
                :class="{ activecontent: activeId === project.id }"
              >
                <div class="overflow-hidden">
                  <div
                    class="mt-2 mb-4 text-gray-600  text-sm  md:text-[15px] md:leading-[1.4] dark:text-gray-200"
                    v-html="translate(project, project.prdescription)"
                  >
                  </div>
                  <div class="flex items-center gap-2 mb-2">
                    <UiButton :link="project.prlink" v-if="project.prlink">
                      {{ $t("DEMO") }}
                    </UiButton>
                    <UiButton :link="project.prwork" v-if="project.prwork">
                      {{ $t("WEBSITE") }}
                    </UiButton>
                    <UiButton :link="project.prgit" v-if="project.prgit">
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
const projects = mainstore.getContentBy("project") 
const activeId = ref("")
if (projects && projects[0]) {
  activeId.value = projects[0].id
}

const toggleItem = (id: string) => {
  activeId.value !== id ? (activeId.value = id) : ""
  nextTick()
}
</script>

<style scoped>
.accordion {
  position: relative;
  padding-left: 22px;
}
.accordion::before {
  content: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='%23777' version='1.1' id='Capa_1' width='12px' height='12px' viewBox='0 0 30.727 30.727' xml:space='preserve'%3e%3cg%3e%3cpath d='M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z'/%3e%3c/g%3e%3c/svg%3e");
  display: block;
  position: absolute;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}
.active .accordion::before {
  transform: rotate(180deg) translateY(50%);
}
.active {
  @apply bg-gray-200 dark:bg-gray-700;
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
