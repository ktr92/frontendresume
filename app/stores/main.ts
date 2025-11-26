
export const useMainStore = defineStore('mainStore', () => {

  //state
  const content = ref<IContent | null>(null)

  // getters
  const getContent = computed(() => content.value)

  const getContentBy = (key: string) => content.value?.[key] ? content.value?.[key] : []

  //actions
   function setContent(payload: IContent) {
    if (!payload) return
    content.value = payload
  }

  return { getContentBy, setContent, getContent }
})