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
  interface IContent {
    contact: IContact[]
    project: IProject[]
  }
}
export {}
