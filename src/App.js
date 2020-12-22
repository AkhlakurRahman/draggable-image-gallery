import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DroppablePanel from './components/DroppablePanel';
import MediaPanel from './components/MediaPanel';

import { fetchImages } from './reducers/imagesReducer';

const App = () => {
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  console.log(images);

  return (
    <div className='container'>
      <MediaPanel images={images.images} />

      <DroppablePanel images={images.images} />
    </div>
  );
};

export default App;
