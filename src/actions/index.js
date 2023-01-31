import { IMAGES } from '../constants';

/*
The parentheses before the curly braces in this code example represent 
the implicit return of an object literal from the arrow function.
 It's equivalent to writing:

const loadImages = () => {
  return {
    type: IMAGES.LOAD,
  };
};

*/

const loadImages = () => ({
    type: IMAGES.LOAD,
});

const setImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images,
});

const setError = error => ({
    type: IMAGES.LOAD_ERROR,
    error,
});

export { loadImages, setImages, setError };
