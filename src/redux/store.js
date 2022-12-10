import {configureStore} from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import librarySlice from "./librarySlice";
import movieInfoSlice from "./movieInfoSlice";
export default configureStore({
  reducer: {
    movieSlice,
    librarySlice,
    movieInfoSlice
  }
})
