import React from 'react';
import Main from "./components/Main";
import {Route, Routes} from "react-router-dom";
import Library from "./components/Library";
import MovieInfo from "./components/MovieInfo";
import Layout from "./components/Layout";

function App() {
  return (
    <div className='flex'>
      <Routes>
        <Route element={<Layout/>} path={'/'}>
          <Route element={<Main/>} index/>
          <Route element={<Library/>} path={'library'}/>
          <Route element={<MovieInfo/>} path={'movie/:movieId'}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
