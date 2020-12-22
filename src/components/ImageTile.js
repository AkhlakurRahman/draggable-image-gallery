import React from 'react';
import { useDrag } from 'react-dnd';

import { ItemTypes } from '../utils/item';

const ImageTile = ({ image }) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.IMAGE,
      id: image.char_id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <img
      src={image.img}
      alt={image.name}
      ref={drag}
      className={`${isDragging ? 'low-opacity' : ''}`}
    />
  );
};

export default ImageTile;
