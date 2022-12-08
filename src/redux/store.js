import {configureStore} from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import librarySlice from "./librarySlice";
export default configureStore({
  reducer: {
    movieSlice,
    librarySlice
  }
})
