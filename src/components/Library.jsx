import React from 'react';
import Movie from './Movie';
import { useDispatch, useSelector } from 'react-redux';
import Error from './Error';
import { setRecentMovies } from '../redux/movieSlice';
import { selectLibrary } from '../redux/selectors';

const Library = () => {
  const { savedMovies, searchValue } = useSelector(selectLibrary);
  const dispatch = useDispatch();
  const errorMessage = searchValue
    ? 'Error nothing was found.'
    : `You don't have any saved movies.`;
  const filteredMovies = savedMovies.filter((movie) => {
    if (movie['#TITLE'].toLowerCase().includes(searchValue.toLowerCase())) {
      return movie;
    }
  });
  const recentHandler = (movie) => {
    dispatch(setRecentMovies(movie));
  };
  return (
    <div className='w-screen bg-[#1E1E1E] pt-[40px] pl-[26px] main'>
      <p className='uppercase mb-[25px] text-[16px] leading-none text-[#9A9A9A]'>
        Your saved movies
      </p>
      {filteredMovies.length === 0 ? (
        <Error value={errorMessage} />
      ) : (
        <div className='flex gap-[15px] flex-wrap'>
          {searchValue
            ? filteredMovies.map((movie) => {
                return (
                  <Movie
                    recentHandler={() => recentHandler(movie)}
                    key={movie['#IMDB_ID']}
                    movie={movie}
                  />
                );
              })
            : savedMovies.map((movie) => {
                return (
                  <Movie
                    recentHandler={() => recentHandler(movie)}
                    key={movie['#IMDB_ID']}
                    movie={movie}
                  />
                );
              })}
        </div>
      )}
    </div>
  );
};

export default Library;
