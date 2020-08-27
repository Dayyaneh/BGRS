import { createSlice } from '@reduxjs/toolkit';
import Character from '../data-models/characters';
import { fetchMovieInfo } from '../api/ApiCalls';

interface MovieState {
  movie?: Character | null,
  isLoading: boolean,
  isSuccess: boolean,
  isError: boolean,
}

const initialState: MovieState = {
  movie: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setResultAsSuccessfull: (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
      state.movie = action.payload.data;
    },
    setResultAsError: (state) => {
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = true;
      state.movie = null;
    },
    clearResult: (state) => {
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = false;
      state.movie = null;
    }
  },
});

export const { setResultAsSuccessfull, setResultAsError, clearResult } = movieSlice.actions;

export const loadMovieInfo = (MovieURL: string) => (dispatch: (arg: any) => void) => {
  const result = fetchMovieInfo(MovieURL);
  result.then((value) => {
    if (value.success) {
      dispatch(setResultAsSuccessfull(value))
    }
    else if (value.error) {
      dispatch(setResultAsError())
    }
  });
};

export const getMovieInfo = (state: { movie: { movie: any; }; }) => {
  return state.movie.movie;
}

export default movieSlice.reducer;
