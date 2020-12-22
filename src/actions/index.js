export const FETCH_IMAGES_FROM_API = 'FETCH_IMAGES_FROM_API';

export const getImages = (images) => ({
  type: FETCH_IMAGES_FROM_API,
  payload: images,
});
