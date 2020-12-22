import React from 'react';
import ImageTile from './ImageTile';

const MediaPanel = ({ images }) => {
  return (
    <aside className='media-panel'>
      <h4>Media Panel</h4>

      <div className='image-container'>
        {images.map((image) => (
          <ImageTile image={image} key={image.char_id} />
        ))}
      </div>
    </aside>
  );
};

export default MediaPanel;
