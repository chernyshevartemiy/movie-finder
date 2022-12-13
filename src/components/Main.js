import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import placeholder from '../assets/images/dummy_170x260_ffffff_cccccc_no-image.svg'
import Movie from "./Movie";
import Error from "./Error";
import {setRecentMovies} from "../redux/movieSlice";

const Main = () => {
  const {movies, status, recentMovies} = useSelector((state) => state.movieSlice)
  const dispatch = useDispatch()
  const recentHandler = (movie) => {
    dispatch(setRecentMovies(movie))
  }
  return (
    <main className='w-screen bg-[#1E1E1E] pt-[40px] pl-[26px]'>
      {status === 'error' ?
        <>
          <h2 className='uppercase mb-[25px] text-[16px] leading-none text-[#9A9A9A]'>Movies</h2>
          <Error/>
        </>
        :
        <>
          <h2
            className='uppercase mb-[25px] text-[16px] leading-none text-[#9A9A9A]'>
            {
              status === null ? 'Your recent movies' : 'Movies'}</h2>
          <div className='flex gap-[15px] flex-wrap'>
            {
              movies.length === 0 && status === null ? recentMovies.map((movie) => {
                const isImage = movie['#IMG_POSTER'] ? movie['#IMG_POSTER'] : placeholder
                return (
                  <Movie recentHandler={() => recentHandler(movie)} key={movie['#IMDB_ID']} movie={movie}
                         isImage={isImage} movieId={movie['#IMDB_ID']}/>
                )
              }) : (status === 'loading' ? <div>Loading...</div> : movies.map((movie) => {
                const isImage = movie['#IMG_POSTER'] ? movie['#IMG_POSTER'] : placeholder
                return (
                  <Movie recentHandler={() => recentHandler(movie)} key={movie['#IMDB_ID']} movie={movie}
                         isImage={isImage} movieId={movie['#IMDB_ID']}/>
                )
              }))}
          </div>
        </>}
    </main>
  );
};

export default Main;