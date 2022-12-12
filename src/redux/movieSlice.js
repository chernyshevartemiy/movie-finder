import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

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
        console.log(data)
          if (data.description.length === 0) {
            return rejectWithValue()
          }
        dispatch(setMovies(data.description))
      } else if (query === '') {
        dispatch(setMovies([]))
      }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  })

const initialState = {
  movies: [],
  status: 'success',
  recentMovies: [],
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
      if (state.recentMovies.length >= 7 ) {
        state.recentMovies = state.recentMovies.slice(1)
      }
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
      state.status = 'error'
    })
  }
})
export const {setMovies, setRecentMovies} = movieSlice.actions
export default movieSlice.reducer