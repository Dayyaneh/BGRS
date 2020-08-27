import { createSlice } from '@reduxjs/toolkit';
import Character from '../data-models/characters';
import { fetchMovieInfo } from '../api/ApiCalls';
import Movie from '../data-models/movie';

interface MovieState {
  movie?: Character | null,
  movieList?: Movie[] | null,
  isLoading: boolean,
  isSuccess: boolean,
  isError: boolean,
}

const initialState: MovieState = {
  movie: null,
  movieList: [],
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
    setSelectedMovie: (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
      state.movie = action.payload;
    },
    setResultArrayAsSuccessfull: (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
      state.movieList = action.payload.data;
    },

    addResultArrayAsSuccessfull: (state, action) => {
      if (!state.movieList)
        state.movieList = []

      state.movieList.push(action.payload); 
    },
    setResultAsError: (state) => {
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = true;
      state.movie = null;
      state.movieList = null;
    },
    clearResult: (state) => {
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = false;
      state.movie = null;
      state.movieList = null;
    }
  },
});

export const { setResultArrayAsSuccessfull, addResultArrayAsSuccessfull, setSelectedMovie, setResultAsSuccessfull, setResultAsError, clearResult } = movieSlice.actions;

export const loadMovieList = (MovieURL: string[]) => (dispatch: (arg: any) => void) => {
  const movieList: Movie[] = [];
  MovieURL.forEach((MovieURL: string) => {
    const result = fetchMovieInfo(MovieURL);
    result.then((value) => {
      if (value.success) {        
        if (value.data) {
          dispatch(addResultArrayAsSuccessfull(value.data))
        }
      }
    });
  });
};

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

export const getMovieInfo = (state: { movie: { movie: any; }; }) =>
  state.movie.movie;

export const getMovieList = (state: { movie: { movieList: any; }; }) => {
  return state.movie.movieList;
}

export default movieSlice.reducer;
