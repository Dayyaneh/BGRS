import { configureStore } from '@reduxjs/toolkit';
import movieStore from '../actions/movieSlice';
import characterStore from '../actions/characterSlice';

export default configureStore({
  reducer: {
    movie: movieStore,
    character: characterStore,
  },
});
