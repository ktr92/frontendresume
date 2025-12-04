function getKeyByValue(object: IObjectIndex, value: string) {
  return Object.keys(object).find((key) => object[key] === value)
}

export default (item: IObjectIndex, value: string) => {
  const { $i18n } = useNuxtApp()

  if ($i18n) {
    const key = getKeyByValue(item, value)
    if (key) {
      if ($i18n.te(`${item.id}_${key}`)) {
        return $i18n.t(`${item.id}_${key}`)
      } 
    }
  }
  return value
}
