import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addMovie, findMovieById, setSavedMovies} from '../redux/librarySlice';
import {NavLink, useLocation} from "react-router-dom";

const Movie = ({movie, isImage, movieId}) => {
  const savedMovie = useSelector(findMovieById(movieId))
  const dispatch = useDispatch()
  const addMovieHandler = () => {
    dispatch(addMovie(movie))
    dispatch(setSavedMovies())
  }
  const location = useLocation()
  console.log(location)
  return (
    <div key={movieId} className='flex flex-col max-w-[170px]'>
      <NavLink className='min-w-[170px] max-w-[170px] h-full max-h-[260px] mb-[6px] rounded-md object-cover' to={`movie/${movieId}`}>
        <img
          className='min-w-[170px] max-w-[170px] h-full max-h-[260px] mb-[4px] rounded-md object-cover'
          src={isImage}
          alt=''
        />
      </NavLink>
      <span className='font-bold text-[16px] text-[#EAEAEA] mb-[2px]'>
        {movie['#TITLE']}
      </span>
      <span className='flex justify-between items-center text-[14px] text-[#808080]'>
        {movie['#YEAR'] ? `Year : ${movie['#YEAR']}` : 'Year: Unknown'}
        <button
          className='bg-[#F33F3F]  rounded-[8px] text-[13px] px-[10px] py-[2px] transition hover:bg-[#D63838] text-[#EAEAEA] hover:text-neutral-200 '
          onClick={() => addMovieHandler()}
        >
          {savedMovie?.isSaved ? '- Rem' : '+ Add'}
        </button>
      </span>
    </div>
  );
};

export default Movie;
