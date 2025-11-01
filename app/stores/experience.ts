export const useExperienceStore = defineStore('experienceStore', () => {

  //state
  const education = [
    {
      date: '2010 - 2015',
      title: 'Филиал Казанского (Приволжского) федерального университета, Набережные Челны',
      description: 'Прикладная математика и информатика (математик, системный программист)',
      badge: 'Специалист',
      status: false,
      id: '001'
    }
  ]

  const experience = [
    {
      date: '2018 - н.в.',
      title: 'ООО "Эмпис", интернет-агентство полного цикла, г.Москва - empis.ru',
      description: 'Frontend разработка + поддержка сайтов на CMS Битрикс',
      badge: 'Frontend-разработчик',
      status: true,
      id: '004'
    },
    {
      date: '2021 - 2022',
      title: 'ООО ИПОТЕХ. Иннополис',
      description: 'Frontend разработка на проекте Vue / Nuxt + REST API',
      badge: 'Frontend-разработчик',
      status: false,
      id: '003'
    },
     {
      date: '2015 - 2018',
      title: 'VELVETMEDIA, веб-студия г. Набережные Челны',
      description: 'Frontend разработка + интеграция сайтов на CMS Diafan, Wordpress, Opencart.',
      badge: 'Frontend-разработчик',
      status: false,
      id: '002'
    },
  ]

  // getters
  const getExperience= computed(() => experience)
  const getEducation= computed(() => education)

  //actions
 

  return { getExperience, getEducation }
})