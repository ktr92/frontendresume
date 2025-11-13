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
              class="mb-2 rounded-md p-2"
              :class="{ active: activeId === project.id }"
            >
              <div
                v-if="project.id"
                class="flex items-center justify-between cursor-pointer"
                @click="toggleItem(project.id)"
              >
                <div>
                  <div v-if="project.prname">
                    {{ translate(project, project.prname) }}
                  </div>
                </div>
                <div>
                  <div v-if="project.prtags">
                    <div class="flex gap-4 items-center">
                      <div
                        v-for="prtag in project.prtags"
                        :key="prtag"
                        class="text-center w-8"
                      >
                        <img
                          :src="`/img/${prtag}.svg`"
                          class="w-6 h-6 block m-auto"
                        />
                        <div
                          class="text-[10px] text-gray-500 block leading-none"
                        >
                          {{ prtag }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Transition>
                <div v-show="activeId === project.id" class="active-content">
                  <div>
                    <div class="mb-2 text-gray-500 text-sm">
                      {{ project.prdescription }}
                    </div>
                    <div class="flex items-center gap-2">
                      <a
                        :href="project.prlink"
                        target="_blank"
                        class="rounded-md border border-gray-200 py-2 px-4 text-sm"
                      >
                        {{ $t("DEMO") }}
                      </a>
                      <a
                        :href="project.prlink"
                        target="_blank"
                        class="rounded-md border border-gray-200 py-2 px-4 text-sm"
                      >
                        {{ $t("WEBSITE") }}
                      </a>
                      <a
                        :href="project.prlink"
                        target="_blank"
                        class="rounded-md border border-gray-200 py-2 px-4 text-sm"
                      >
                        {{ $t("GITHUB") }}
                      </a>
                    </div>
                  </div>
                </div>
              </Transition>
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
const activeId = ref("")
const mainstore = useMainStore()
const projects: IProject[] = mainstore.getProjects ? mainstore.getProjects : []

const toggleItem = (id: string) => {
  activeId.value !== id ? (activeId.value = id) : ""
  nextTick()
}
</script>

<style scoped>
@keyframes accordion {
  0% {
    max-height: 0;
  }

  100% {
    max-height: unset;
  }
}
.active {
  background: #fff;
  box-shadow: 0 4px 4px #7364b31a;
  border: 1px solid #7364b31a;
}
.active-content {
  animation: accordion 0.3s linear;
  max-height: 0;
}
.active .active-content {
  max-height: unset;
}
</style>
