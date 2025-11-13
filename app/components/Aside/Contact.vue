<template>
  <div class="border-none">
    <template v-if="links">
      <div class="pt-2 space-y-2" v-for="item in links" :key="item.code">
        <a
          :href="item.link"
          target="_blank"
          class="flex items-center text-base  mb-4 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
        >
          <UiIcon
            :name="item.code"
            classes="h-8 rounded-full w-8  block"
          />
          <span class="ml-3" sidebar-toggle-item="">{{ item.text }}</span>
        </a>
      </div>
      <div class="pt-2 space-y-2" >
        <NuxtLink :to="isprojects ? '/' : '/projects'"
          class="flex items-center text-base  mb-4 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
        >
           <UiIcon
            name="projects"
            classes="h-8 rounded-full w-8  block"
          />
          <span class="ml-3 text-green-500 font-bold" sidebar-toggle-item="">{{ isprojects ? $t("index") : $t("portfolio") }}</span>
        </NuxtLink>
      </div>
    </template>
    <template v-else>
      <div v-for="value in 6" :key="value">
        <UiSkeleton />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const links = useMainStore().getContact
const route = useRoute()
const isprojects = computed(() => route.path === '/projects')
</script>

<style scoped></style>
