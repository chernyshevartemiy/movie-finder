import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  movie: {}
}

const movieInfoSlice = createSlice({
  name: 'movieInfoSlice',
  initialState,
  reducers: {
    setMovieInfo: (state, action) => {
      state.movie = action.payload
    }
  }
})

export default movieInfoSlice.reducer
export const {setMovieInfo} = movieInfoSlice.actions