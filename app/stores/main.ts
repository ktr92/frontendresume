
export const useMainStore = defineStore('mainStore', () => {

  //state
  const content = ref<IContent | null>(null)

  // getters
  const getContent = computed(() => content.value)
  const getContact = computed(() => content.value?.contact)
  const getProjects = computed(() => content.value?.project)
  const getExperience = computed(() => content.value?.experience)
  const getEducation = computed(() => content.value?.education)
  const getSkills = computed(() => content.value?.skills)
  const getInformation = computed(() => content.value?.information)
  const getExtra = computed(() => content.value?.extra)

  //actions
   function setContent(payload: IContent) {
    if (!payload) return
    content.value = payload
  }

  return { getSkills, getExtra, getInformation, getContent, getProjects, getContact, getExperience, getEducation, setContent }
})