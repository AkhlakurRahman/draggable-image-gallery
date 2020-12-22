import { getImages, FETCH_IMAGES_FROM_API } from '../actions';

const initialState = {
  images: [],
};

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_FROM_API:
      return { ...state, images: action.payload };

    default:
      return state;
  }
};

export const fetchImages = () => async (dispatch) => {
  const response = await fetch(
    'https://www.breakingbadapi.com/api/characters?limit=20'
  );
  const images = await response.json();

  const modifiedImages = images.map((image) => ({
    ...image,
    insidePanel: false,
  }));

  dispatch(getImages(modifiedImages));
};
