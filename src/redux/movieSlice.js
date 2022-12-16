import { createSlice } from '@reduxjs/toolkit';
import { getRecentMoviesFromLs } from '../utils/getRecentMoviesFromLs';
import { fetchMovies } from './async/fetchMovies';

const initialState = {
  movies: [],
  status: null,
  recentMovies: getRecentMoviesFromLs(),
};
const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setRecentMovies: (state, action) => {
      state.recentMovies.unshift(action.payload);
      const uniqueId = [];
      const uniqueMovies = state.recentMovies.filter((movie) => {
        const isDuplicate = uniqueId.includes(movie['#IMDB_ID']);
        if (!isDuplicate) {
          uniqueId.push(movie['#IMDB_ID']);
          return true;
        }
        return false;
      });
      state.recentMovies = uniqueMovies;
      if (state.recentMovies.length > 7) {
        state.recentMovies = state.recentMovies.slice(0, 7);
      }
      localStorage.setItem('recentMovies', JSON.stringify(state.recentMovies));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state) => {
      state.status = 'success';
    });
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = action.payload;
    });
  },
});
export const { setMovies, setRecentMovies } = movieSlice.actions;
export default movieSlice.reducer;
