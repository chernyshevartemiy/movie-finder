import {configureStore} from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
export default configureStore({
  reducer: {
    movieSlice
  }
})
