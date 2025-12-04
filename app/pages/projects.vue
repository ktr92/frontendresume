<template>
  <div
    class="relative w-full h-full overflow-y-auto pl-0 lg:pl-[400px] dark:bg-gray-700"
  >
   123
  </div>
</template>

<script setup lang="ts">
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
