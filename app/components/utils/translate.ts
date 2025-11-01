function getKeyByValue(object: IObjectIndex, value: string) {
  return Object.keys(object).find(key => object[key] === value);
}

export default (item: IObjectIndex, value: string) => {

   const { $i18n } = useNuxtApp()

  const key = getKeyByValue(item, value)

  if ($i18n.te(`${item.id}_${key}`)) {
    return $i18n.t(`${item.id}_${key}`)
  }
  else {
    return value
  }
 
}