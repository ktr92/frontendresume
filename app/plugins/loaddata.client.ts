/**
 * однократная загрузка данных приложения из json файла и сохранение в хранилище.
 */
export default defineNuxtPlugin(async () => {
  const store = useMainStore()

  if (store.getContent) return

  const response = await fetch("/content.json")
  const data = await response.json()
  store.setContent(data)
})
