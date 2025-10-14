<template>
  <div class="inline-flex justify-center items-center">
    <button
      type="button"
      data-dropdown-toggle="language-dropdown"
      class=" text-gray-500 rounded cursor-pointer hover:text-gray-900 dark:hover:text-white"
      @click.prevent="showLanguage()"
      v-click-outside="() => closeLanguage()"
    >
      <UiIcon
        :name="locale"
        classes="h-5 rounded-full w-5 overflow-hidden"
      />
    </button>

    <div
      v-show="languagemenu"
      class="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 absolute bottom-[100%]"
      id="language-dropdown"
      data-popper-placement="bottom"
    >
      <ul class="py-1" role="none">
        <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
          <UiOption :title="locale.name" :icon="locale.code" />
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
const languagemenu = ref(false)
const showLanguage = () => {
  languagemenu.value = !languagemenu.value
}
const closeLanguage = () => {
  languagemenu.value = false
}
</script>

<style scoped>

</style>