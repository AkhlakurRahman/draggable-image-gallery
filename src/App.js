import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DroppableCanvas from './components/DroppableCanvas';
import MediaPanel from './components/MediaPanel';
import { fetchImages } from './reducers/imagesReducer';

const App = () => {
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return (
    <div className='container'>
      <MediaPanel images={images.images} />

      <DroppableCanvas images={images.images} />
    </div>
  );
};

export default App;
