import React from 'react';
import placeholder from "../assets/images/dummy_170x260_ffffff_cccccc_no-image.svg";
import Movie from "./Movie";
import {useDispatch, useSelector} from "react-redux";
import {setSavedMovies} from "../redux/librarySlice";

const Library = () => {
  const savedMovies = useSelector((state) => state.librarySlice.savedMovies)
  const searchValue = useSelector((state) => state.librarySlice.searchValue)
  const filteredMovies = savedMovies.filter((movie) => {
    if (movie['#TITLE'].toLowerCase().includes(searchValue.toLowerCase())) {
      return movie
    }
  })
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(setSavedMovies())
  }, [])
  return (
    <div className='w-screen bg-[#1E1E1E] pt-[40px] pl-[26px] '>
      <h2 className='uppercase mb-[25px] text-[16px] leading-none text-[#9A9A9A]'>Your saved movies</h2>
      <div className='flex gap-[15px] flex-wrap'>
        {searchValue ? filteredMovies.map((movie) => {
          const isImage = movie['#IMG_POSTER'] ? movie['#IMG_POSTER'] : placeholder
          return <Movie key={movie['#IMDB_ID']} movie={movie} isImage={isImage} movieId={movie['#IMDB_ID']}/>
        }) : savedMovies.map((movie) => {
          const isImage = movie['#IMG_POSTER'] ? movie['#IMG_POSTER'] : placeholder
          return <Movie key={movie['#IMDB_ID']} movie={movie} isImage={isImage} movieId={movie['#IMDB_ID']}/>
        })}
      </div>
    </div>
  );
};

export default Library;