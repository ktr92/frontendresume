<template>
  <div
    class="relative w-full h-full overflow-y-auto pl-0 lg:pl-[400px] dark:bg-gray-700"
  >
    <div class="p-8">
      <NuxtLink to="/" class="block text-green-600 underline">Вернуться к резюме</NuxtLink> 
      <template v-if="projects">
        <div class="my-4 text-lg">
          <ul class="list-disc ml-6">
            <li v-for="project in projects" :key="project._id" class="">
              {{ project.prname }}
            </li>
          </ul>
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
const mainstore = useMainStore()
const projects = mainstore.getProjects
</script>

<style scoped></style>
