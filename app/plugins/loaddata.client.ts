/**
 * однократная загрузка данных приложения из json файла и сохранение в хранилище.
 */

export default defineNuxtPlugin(async (nuxtApp) => {
  const store = useMainStore()
  const { $i18n } = useNuxtApp()
  if (store.getContent) return

  const response = await fetch("/content.json")
  const content: IContent = await response.json()


  /**
   *  инициализируем сообщения для многоязычности из i18n если оно имеется
   * @param key - идентификатор типа данных 
   */
  const initLocale = (key: IContentType) => {
    if (content[key]) {
      content[key].forEach((item: IContentItem) => {
        // проверяем задан ли перевод
        if (item.i18n) {
          // обходим все свойства для которых есть перевод
          Object.entries(item.i18n).forEach(([label, messages]) => {
              // обходим все сообщения
             Object.entries(messages).forEach(([locale, localMessage]) => {
              // добавляем сообщения в локаль, присваивая сообщению идентификатор для связи с данными
               $i18n.mergeLocaleMessage(locale, {
                  [`${item.id}_${label}`]: localMessage,
                })
             })
          })
        }
      })
    }


  }

  initLocale("project")
  initLocale("experience")
  initLocale("education")

  store.setContent(content)
})
