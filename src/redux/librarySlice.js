import {createSlice} from "@reduxjs/toolkit";
import {getDataFromLs} from "../utils/getDataFromLs";

const initialState = {
  savedMovies: getDataFromLs()
}

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    setSavedMovies: (state, action) => {
      state.savedMovies = state.savedMovies.filter((movie) => {
        if (movie.isSaved) {
          return movie
        }
      })
      localStorage.setItem('savedMovies', JSON.stringify(state.savedMovies))
    },
    addMovie: (state, action) => {
      const findItem = state.savedMovies.find((obj) => obj['#IMDB_ID'] === action.payload['#IMDB_ID'])
      if (findItem) {
        findItem.isSaved = !findItem.isSaved
      } else {
        state.savedMovies.push({
          ...action.payload,
          isSaved: true
        })
      }
    },
  }
})

export const findMovieById = (id) => (state) => state.librarySlice.savedMovies.find((obj) => obj['#IMDB_ID'] === id)
export const {setSavedMovies, addMovie} = librarySlice.actions
export default librarySlice.reducer