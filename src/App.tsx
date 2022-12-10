import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import {Route, Routes} from "react-router-dom";
import Library from "./components/Library";
import MovieInfo from "./components/MovieInfo";

function App() {
  return (
    <div className='flex'>
      <Header/>
      <Routes>
        <Route element={<Main/>} path={'/'}/>
        <Route element={<Library/>} path={'/library'}/>
        <Route element={<MovieInfo/>} path={'/movie/:movieId'}/>
        <Route element={<MovieInfo/>} path={'/movie/library/:movieId'}/>
      </Routes>
    </div>
  );
}

export default App;
