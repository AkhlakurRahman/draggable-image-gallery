import invert from '../assets/Invert.svg';
import grayscale from '../assets/Grayscale.svg';
import brightness from '../assets/Brightness.svg';
import contrast from '../assets/Contrast.svg';

export const DefaultImageOptions = [
  {
    name: 'Invert',
    property: 'invert',
    value: 0,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
    svgSrc: invert,
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
    svgSrc: grayscale,
  },
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
    svgSrc: brightness,
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
    svgSrc: contrast,
  },
];
