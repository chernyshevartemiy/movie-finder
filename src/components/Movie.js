import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addMovie, findMovieById} from "../redux/librarySlice";

const Movie = ({movie, isImage, movieId}) => {
  const savedMovie = useSelector(findMovieById(movieId))
  const dispatch = useDispatch();
  const addMovieHandler = () => {
    dispatch(addMovie(movie))
  }
  return (
    <div key={movie['#IMDB_ID']} className='flex flex-col max-w-[170px]'>
      <img
        className='min-w-[170px] max-w-[170px] h-full max-h-[260px] block mb-[4px] rounded-md object-cover'
        src={isImage} alt=""/>
      <span className='font-bold text-[16px] text-[#EAEAEA] '>{movie['#TITLE']} </span>
      <span className='flex justify-between items-center text-[14px] text-[#808080]'>
              Year: {movie['#YEAR']}
        <button
          className='bg-[#F33F3F]  rounded-[8px] text-[13px] px-[10px] py-[2px] transition hover:bg-[#D63838] text-[#EAEAEA] hover:text-neutral-200 '
          onClick={() => addMovieHandler()}>
          {savedMovie?.isSaved ? '- Rem' : '+ Add'}
        </button>
      </span>
    </div>
  );
};

export default Movie;