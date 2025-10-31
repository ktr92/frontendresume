export const useExperienceStore = defineStore('experienceStore', () => {

  //state
  const experience = [
    {
      date: '2010 - 2015',
      title: 'Филиал Казанского (Приволжского) федерального университета, Набережные Челны',
      description: 'Прикладная математика и информатика (математик, системный программист)',
      badge: 'Специалист',
      status: false,
      id: '001'
    },
    {
      date: '2015 - 2018',
      title: 'VELVETMEDIA, веб-студия г. Набережные Челны',
      description: 'Frontend разработка + интеграция сайтов на CMS Diafan, Wordpress, Opencart.',
      badge: 'Frontend-разработчик',
      status: false,
      id: '002'
    },
    {
      date: '2021 - 2022',
      title: 'ООО ИПОТЕХ. Иннополис',
      description: 'Frontend разработка на проекте Vue / Nuxt + REST API',
      badge: 'Frontend-разработчик',
      status: false,
      id: '004'
    },
    {
      date: '2018 - н.в.',
      title: 'ООО "Эмпис", интернет-агентство полного цикла, г.Москва - <a href="//www.empis.ru" target="_blank">empis.ru</a> ',
      description: 'Frontend разработка + поддержка сайтов на CMS Битрикс',
      badge: 'Frontend-разработчик',
      status: true,
      id: '004'
    },
   /*  {
      date: '04.2022 - 2023',
      title: 'ООО "ИПОТЕХ", Иннополис',
      description: 'Разработка Frontend части приложений Nuxt Vue.',
      badge: 'Frontend-разработчик',
      status: 'present',
      id: '005'
    }, */
  ]

  // getters
  const getExperience= computed(() => experience)

  //actions
 

  return { getExperience }
})