import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

import { ItemTypes } from '../utils/item';
import DroppedItems from './DroppedItems';

const DroppableCanvas = ({ images }) => {
  const fromLocal = JSON.parse(localStorage.getItem('droppedImages')) || [];
  const [selectedImage, setSelectedImage] = useState(fromLocal);

  const putInsideCanvas = (id) => {
    const data = images.filter((image) => image.char_id === id);
    setSelectedImage((prevState) => {
      let filteredData = [];
      if (fromLocal) {
        filteredData = fromLocal.filter((fl) => fl.char_id !== data[0].char_id);
      } else {
        filteredData = prevState.filter((ps) => ps.char_id !== data[0].char_id);
      }

      const updatedImages = [...filteredData, ...data];

      localStorage.setItem('droppedImages', JSON.stringify(updatedImages));

      return updatedImages;
    });
  };

  const removeImageFromCanvas = (id) => {
    const imagesAfterDeletion = fromLocal.filter((fl) => fl.char_id !== id);

    localStorage.setItem('droppedImages', JSON.stringify(imagesAfterDeletion));

    setSelectedImage(imagesAfterDeletion);
  };

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.IMAGE,
    drop: (item, monitor) => putInsideCanvas(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <section ref={drop} className='droppable-panel'>
      <div className={`${isOver ? 'empty-box' : ''}`}>
        {selectedImage.length === 0 && fromLocal.length === 0 && (
          <div className='drop-placeholder'>
            <svg
              width='50'
              height='38'
              viewBox='0 0 50 38'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M43.75 4.41563H21.6969L18.1406 0.859374C17.75 0.468749 17.2187 0.25 16.6687 0.25H6.25C2.80312 0.25 0 3.05312 0 6.5V31.5C0 34.9469 2.80312 37.75 6.25 37.75H43.75C47.1969 37.75 50 34.9469 50 31.5V10.6656C50 7.21875 47.1969 4.41563 43.75 4.41563ZM6.25 4.41563H15.8062L19.3625 7.97187C19.7531 8.3625 20.2844 8.58125 20.8344 8.58125H43.75C44.9 8.58125 45.8344 9.51563 45.8344 10.6656V25.1219L34.875 14.1625C33.45 12.7375 31.1313 12.7375 29.7063 14.1625L19.7906 24.0781L17.1656 21.4531C15.7406 20.0281 13.4219 20.0281 11.9969 21.4531L4.1625 29.2875V6.5C4.16562 5.35 5.1 4.41563 6.25 4.41563Z'
                fill='#35AEF2'
              />
            </svg>

            <p>Drop an image from Media Panel</p>
          </div>
        )}

        <div className='dropped-items'>
          {selectedImage?.map((item, index) => (
            <DroppedItems
              key={index}
              item={item}
              removeImageFromCanvas={removeImageFromCanvas}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DroppableCanvas;
