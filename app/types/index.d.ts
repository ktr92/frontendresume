declare global {
  interface IContact {
    code: string
    link: string
    text: string
  }
  interface IProject {
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
  interface ITimeline {
    date: string
    title: string
    description: string
    id: string
    status: boolean
    badge: string
  }
  interface IContent {
    contact: IContact[]
    project: IProject[]
  }
}
export {}
