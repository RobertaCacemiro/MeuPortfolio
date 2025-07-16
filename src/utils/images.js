export const getImagePath = (imageName) => {
  return import.meta.env.BASE_URL + `img/${imageName}`;
}