import {createAsyncThunk} from "@reduxjs/toolkit";
import {setMovies} from "../movieSlice";

export const fetchMovies = createAsyncThunk(
  'movie/fetchMovies',
  async (query, {
    rejectWithValue,
    dispatch,
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
      return rejectWithValue('error')
    }
  })
