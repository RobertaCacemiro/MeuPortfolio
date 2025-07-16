export const getFilePath = (fileName) => {
  return import.meta.env.BASE_URL + `downloads/${fileName}`
}