import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getRecentMoviesFromLs} from "../utils/getRecentMoviesFromLs";

export const fetchMovies = createAsyncThunk(
  'movie/fetchMovies',
  async (query, {
    rejectWithValue,
    dispatch,
    getState
  }) => {
    try {
      if (query) {
        const response = await fetch(`https://search.imdbot.workers.dev?q=${query}`)
        const data = await response.json()
          if (data.description.length === 0 || data.ok !== true) {
            return rejectWithValue('error')
          } else {
            dispatch(setMovies(data.description))
          }
      } else if (query === '') {
        dispatch(setMovies([]))
        return rejectWithValue(null)
      }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  })

const initialState = {
  movies: [],
  status: null,
  recentMovies: getRecentMoviesFromLs(),
}
const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload
    },
    setRecentMovies: (state, action) => {
      state.recentMovies.push(action.payload)
      const uniqueId = []
      const uniqueMovies = state.recentMovies.filter((movie) => {
        const isDuplicate = uniqueId.includes(movie['#IMDB_ID'])
        if (!isDuplicate) {
          uniqueId.push(movie['#IMDB_ID'])
          return true
        }
        return false
      })
      state.recentMovies = uniqueMovies
      if (state.recentMovies.length > 7 ) {
        state.recentMovies = state.recentMovies.slice(1)
      }
      localStorage.setItem('recentMovies', JSON.stringify(state.recentMovies))
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = 'success'
    });
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.status = 'loading'
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = action.payload
    })
  }
})
export const {setMovies, setRecentMovies} = movieSlice.actions
export default movieSlice.reducer