<template>
  <div
    class="absolute bottom-0 left-0 justify-center hidden w-full p-4 space-x-4 bg-white lg:flex dark:bg-gray-800"
    sidebar-bottom-menu=""
  >
    <a
      href="#"
      class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
        ></path>
      </svg>
    </a>
    <a
      href="https://flowbite-admin-dashboard.vercel.app/settings/"
      data-tooltip-target="tooltip-settings"
      class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </a>
    <div
      id="tooltip-settings"
      role="tooltip"
      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      style="
        position: absolute;
        inset: auto auto 0px 0px;
        margin: 0px;
        transform: translate3d(71.5636px, -63.7091px, 0px);
      "
      data-popper-placement="top"
    >
      Settings page
      <div
        class="tooltip-arrow"
        data-popper-arrow=""
        style="
          position: absolute;
          left: 0px;
          transform: translate3d(54.1091px, 0px, 0px);
        "
      ></div>
    </div>
    <button
      type="button"
      data-dropdown-toggle="language-dropdown"
      class="inline-flex justify-center items-center text-gray-500 rounded cursor-pointer hover:text-gray-900 dark:hover:text-white"
      @click.prevent="showLanguage()"
      v-click-outside="() => closeLanguage()"
    >
      <UiIcon
        :name="currentLang"
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
        <NuxtLink :to="$switchLocalePath('ru')">
          <UiOption title="Russian" icon="ru" />
        </NuxtLink>
        <NuxtLink :to="$switchLocalePath('en')">
          <UiOption title="English" icon="en" />
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

const currentLang = ref("ru")
const languagemenu = ref(false)
const showLanguage = () => {
  languagemenu.value = !languagemenu.value
}
const closeLanguage = () => {
  languagemenu.value = false
}
const selectLanguage = (lang: string) => {
  currentLang.value = lang
}
</script>

<style scoped></style>
