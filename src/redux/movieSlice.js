import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async (query, {
  rejectWithValue,
  dispatch,
}) => {
  try {
    if (query) {
      const response = await fetch(`https://search.imdbot.workers.dev?q=${query}`)
      const data = await response.json()
      console.log(data)
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
}
const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload
    },
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
export const {setMovies} = movieSlice.actions
export default movieSlice.reducer