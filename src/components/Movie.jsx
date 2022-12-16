import { useDispatch, useSelector } from 'react-redux';
import { addMovie, setSavedMovies } from '../redux/librarySlice';
import { NavLink } from 'react-router-dom';
import { BiBookmarkPlus } from 'react-icons/bi';
import { BiBookmarkMinus } from 'react-icons/bi';
import placeholder from '../assets/images/dummy_170x260_ffffff_cccccc_no-image.svg';
import { findMovieById } from '../redux/selectors';

const Movie = ({ movie, recentHandler }) => {
  const movieId = movie['#IMDB_ID'];
  const savedMovie = useSelector(findMovieById(movieId));
  const dispatch = useDispatch();
  const addMovieHandler = () => {
    dispatch(addMovie(movie));
    dispatch(setSavedMovies());
  };
  const isMovieYear = movie['#YEAR']
    ? `Year : ${movie['#YEAR']}`
    : 'Year: Unknown';
  const isImage = movie['#IMG_POSTER'] ? movie['#IMG_POSTER'] : placeholder;
  return (
    <div className='flex flex-col max-w-[170px]'>
      <NavLink
        onClick={recentHandler}
        className='min-w-[170px] max-w-[170px] h-full min-h-[260px] max-h-[260px] mb-[6px] rounded-md object-cover'
        to={`/movie/${movieId}`}
      >
        <img
          className='min-w-[170px] transform transition-all hover:scale-105 max-w-[170px] h-full min-h-[260px] max-h-[260px] mb-[4px] rounded-md object-cover'
          src={isImage}
          alt=''
        />
      </NavLink>
      <span className='font-bold text-[16px] text-[#EAEAEA] mb-[2px] overflow-ellipsis overflow-hidden whitespace-nowrap'>
        {movie['#TITLE']}
      </span>
      <span className='flex justify-between items-center text-[14px] text-[#808080]'>
        {isMovieYear}
        <button
          className='bg-[#F33F3F]  rounded-[8px] text-[13px] px-[10px] py-[2px] transition hover:bg-[#D63838] text-[#EAEAEA] hover:text-neutral-200'
          onClick={addMovieHandler}
        >
          {savedMovie?.isSaved ? (
            <span className='text-[13px] flex items-center'>
              <BiBookmarkMinus className='mr-[6px]' /> Rem
            </span>
          ) : (
            <span className='text-[13px] flex items-center'>
              <BiBookmarkPlus className='mr-[6px]' /> Add
            </span>
          )}
        </button>
      </span>
    </div>
  );
};

export default Movie;
