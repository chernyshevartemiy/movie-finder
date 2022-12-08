import React from 'react';
import {useSelector} from "react-redux";
import placeholder from '../assets/images/dummy_170x260_ffffff_cccccc_no-image.svg'
import Movie from "./Movie";

const Main = () => {
  const movies = useSelector((state) => state.movieSlice.movies)
  const isLoading = useSelector((state) => state.movieSlice.status)
  return (
    <main className='w-screen bg-[#1E1E1E] pt-[40px] pl-[26px]'>
      <h2 className='uppercase mb-[25px] text-[16px] leading-none text-[#9A9A9A]'>Your recent movies</h2>
      <div className='flex gap-[15px] flex-wrap'>
        {
          isLoading === 'loading' ? <div>Loading...</div> : movies.map((movie) => {
            const isImage = movie['#IMG_POSTER'] ? movie['#IMG_POSTER'] : placeholder
            return (
              <Movie key={movie['#IMDB_ID']} movie={movie} isImage={isImage} movieId={movie['#IMDB_ID']}/>
            )
          })}
      </div>
    </main>
  );
};

export default Main;