import React, { useCallback, useEffect, useState } from 'react';

import ModalFilter from './ModalFilter';

const Modal = ({
  imgId,
  img,
  name,
  handleCloseModal,
  options,
  setSelectedOptionIndex,
  handleFilterChange,
  setSelectedImageId,
}) => {
  const [imageOrFilter, setImageOrFilter] = useState('image');
  // const modifiedImageOptions = JSON.parse(
  //   localStorage.getItem('imageFilterOptions')
  // );
  let modalRef = null;

  // localStorage.setItem(
  //   'imageFilterOptions',
  //   JSON.stringify(DefaultImageOptions)
  // );

  const handleImageOrFilter = (type) => {
    setImageOrFilter(type);
    setSelectedImageId(imgId);
  };

  const closeModal = (e) => {
    if (modalRef && !modalRef.contains(e.target)) {
      handleCloseModal();
    }
  };
  console.log(imgId);
  const closeModalCallback = useCallback(closeModal, [closeModal]);

  useEffect(() => {
    document.addEventListener('click', closeModalCallback);
    return () => {
      document.removeEventListener('click', closeModalCallback);
    };
  }, [closeModalCallback]);

  return (
    <div className='modal' ref={(node) => (modalRef = node)}>
      <div className='modal-content'>
        <div className='modal-buttons'>
          <span
            onClick={() => handleImageOrFilter('image')}
            style={{ color: `${imageOrFilter === 'image' ? '' : '#ccc'}` }}
          >
            Image
          </span>
          <span
            onClick={() => handleImageOrFilter('filter')}
            style={{ color: `${imageOrFilter === 'filter' ? '' : '#ccc'}` }}
          >
            Filter
          </span>
        </div>

        <div className='horizontal-line'></div>

        {imageOrFilter === 'image' && <img src={img} alt={name} />}

        {imageOrFilter === 'filter' && (
          <div className='modal-filter'>
            {options.map((option, index) => (
              <ModalFilter
                imgId={imgId}
                key={index}
                svgSrc={option.svgSrc}
                property={option.property}
                min={option.range.min}
                max={option.range.max}
                defaultValue={option.value}
                handleClick={() => setSelectedOptionIndex(index)}
                handleChange={handleFilterChange}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
