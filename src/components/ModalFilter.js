import React from 'react';

const ModalFilter = ({
  imgId,
  svgSrc,
  min,
  max,
  defaultValue,
  handleClick,
  handleChange,
}) => {
  const formatPercentage = () => {
    if (defaultValue === 0) return 0;

    return Math.floor((defaultValue / max).toFixed(2) * 100);
  };

  return (
    <div onClick={handleClick}>
      <img src={svgSrc} alt='svgsrc' />

      <input
        type='range'
        min={min}
        max={max}
        defaultValue={defaultValue}
        onChange={handleChange}
      />

      <span>{formatPercentage()}%</span>
    </div>
  );
};

export default ModalFilter;
