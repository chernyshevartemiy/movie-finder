import React from 'react';
import {useSelector} from "react-redux";
import placeholder from '../assets/images/dummy_170x260_ffffff_cccccc_no-image.svg'

const Main = () => {
  const movies = useSelector((state) => state.movieSlice.movies)
  return (
    <main className='w-screen bg-[#1E1E1E] pt-[40px] pl-[30px]'>
      <h2 className='uppercase mb-[25px] text-[16px] leading-none text-[#9A9A9A]'>Your recent movies</h2>
      <div className='flex gap-[15px] flex-wrap'>
        {movies.map((movie) => {
          const isImage = movie['#IMG_POSTER'] ? movie['#IMG_POSTER'] : placeholder
          return (
            <div key={movie['#IMDB_ID']} className='flex flex-col max-w-[170px]'>
              <img className='min-w-[170px] max-w-[170px] min-h-[260px] max-h-[260px] block mb-[4px] rounded-md object-cover'
                   src={isImage} alt=""/>
              <span className='font-bold text-[16px] text-[#EAEAEA] '>{movie['#TITLE']}</span>
              <span className='flex justify-between items-center text-[14px] text-[#808080]'>
              Year: {movie['#YEAR']}
              <button
                className='bg-[#F33F3F]  rounded-[8px] text-[13px] px-[10px] py-[2px] transition hover:bg-[#D63838] text-[#EAEAEA] hover:text-neutral-200 '>+ Add</button>
            </span>
            </div>
          )
        })}
      </div>
    </main>
  );
};

// 170x260
export default Main;