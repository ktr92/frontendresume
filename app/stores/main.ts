export const useMainStore = defineStore('mainStore', () => {

  //state
  const content = ref<IContent | null>(null)

  // getters
  const getContent = computed(() => content.value)
  const getContact = computed(() => content.value?.contact)
  const getProjects = computed(() => content.value?.project)

  //actions
   function setContent(payload: IContent) {
    if (!payload) return
    content.value = payload
  }

  return { getContent, getProjects, getContact, setContent }
})