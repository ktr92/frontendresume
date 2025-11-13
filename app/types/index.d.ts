declare global {
  interface ITranslate {
    i18n?: ITranslatedObject
    [key: string]: string
  }
  interface ISkills {
    name: string
    text: string
  }
  interface IContact extends ITranslate {
    code: string
    link: string
    text: string
  }
  interface IProject extends ITranslate {
    _id: string
    prname: string
    prdescription: string
    prtags: string[]
    prlink: string
    prgit: string
    prwork: string
    prsort: number
    __v: number
  }
  interface ITimeline extends ITranslate {
    date: string
    title: string
    description: string
    id: string
    status: boolean
    badge: string
  }
  interface IExperience extends ITranslate {
    date: string
    title: string
    description: string
    id: string
    status: boolean
    badge: string
    
  }
  type IContentList = IContact[] | IProject[] | IExperience[]
  type IContentItem = IContact | IProject | IExperience
  type IContentType = "project" | "experience" | "contact" | "education"
  interface IContent {
    [key: string]: IContentList
    contact: IContact[]
    project: IProject[]
    experience: IExperience[]
    education: IExperience[]
    [key: string]: unknown
  }

  interface ITranslatedObject {
    [key: string]: ILocale
  }
  interface IObjectIndex{
    [key: string]: string
  }
  interface ILocale {
    ru: string
    en: string
  }
}
export {}
