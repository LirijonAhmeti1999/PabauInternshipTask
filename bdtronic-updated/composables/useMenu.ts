export const useMenu= () => {
  const prismic = usePrismic()
  return useAsyncData('$menu', () => prismic.client.getSingle('menu')).data
}
