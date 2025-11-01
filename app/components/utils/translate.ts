function getKeyByValue(object: IObjectIndex, value: string) {
  return Object.keys(object).find(key => object[key] === value);
}

export default (item: IObjectIndex, value: string) => {

   const { $i18n } = useNuxtApp()

  const key = getKeyByValue(item, value)
  console.log($i18n.t(`${item.id}_${key}`))
  const result = $i18n.t(`${item.id}_${key}`) || value
  return result
}