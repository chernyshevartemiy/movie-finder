export const findMovieById = (id) => (state) => state.librarySlice.savedMovies.find((obj) => obj['#IMDB_ID'] === id) // Selector to find movie by id in local storage
export const selectLibrary = (state) => state.librarySlice // Selector to select library slice
export const selectMovie = (state) => state.movieSlice // Selector to select movie slice
