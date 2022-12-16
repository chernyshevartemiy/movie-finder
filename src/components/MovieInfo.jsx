import React from 'react';
import { useParams } from 'react-router-dom';
import placeholder from '../assets/images/dummy_170x260_ffffff_cccccc_no-image.svg';
import { BiCommentDots, BiWorld } from 'react-icons/bi';
import { HiOutlineLanguage } from 'react-icons/hi2';
import { FiExternalLink } from 'react-icons/fi';
import { setSavedMovies } from '../redux/librarySlice';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie } from '../redux/librarySlice';
import { findMovieById } from '../redux/selectors';

const MovieInfo = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const savedMovie = useSelector(findMovieById(movieId));
  const [movie, setMovie] = React.useState({});
  const [movieInfoItem, setMovieInfoItem] = React.useState({});

  React.useEffect(() => {
    fetch(`https://search.imdbot.workers.dev/?q=${movieId}`)
      .then((response) => response.json())
      .then((json) => {
        const { 0: movieInfo } = json.description;
        setMovieInfoItem(movieInfo);
      });
  }, []);

  const onAddHandler = () => {
    dispatch(addMovie(movieInfoItem));
    dispatch(setSavedMovies());
  };

  React.useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=5863b2ef`)
      .then((response) => response.json())
      .then((json) => {
        setMovie(json);
      });
  }, []);
  const isPoster = movie.Poster === 'N/A' ? placeholder : movie?.Poster;
  const isSaved =
    savedMovie?.isSaved === true ? 'Remove from Watchlist' : 'Add to Watchlist';
  return (
    <div className='w-screen bg-[#1E1E1E] pt-[50px] md:pl-[40px] sm:pl-[0px] main'>
      <div className='flex lg:flex-row sm:flex-col sm:items-center lg:items-start cont'>
        <img
          className='md:max-w-[260px] sm:max-w-[240px] lg:min-w-[300px] w-full h-full object-cover rounded-[8px] sm:h-[350px] sm:mb-[16px] lg:mb-[0px] lg:h-[440px] mimg'
          src={isPoster}
          alt=''
        />
        <div className='flex flex-col lg:ml-[34px] sm:ml-[10px] sm:items-center lg:items-start'>
          <span className='mb-[14px] font-bold text-[26px]'>
            {movie?.Title}
          </span>
          <span className='mb-[10px] text-[16px]'>
            Runtime: {movie?.Runtime}
          </span>
          <div className='mb-[40px] flex flex-wrap gap-[8px]'>
            <span className='bg-[#161616] px-[6px] py-[4px] rounded-[4px] text-[14px] flex items-center'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg'
                alt=''
                className='w-[24px] mr-[8px]'
              />
              {movie?.imdbRating}
            </span>
            <span className='bg-[#161616] px-[8px] py-[4px] rounded-[4px] text-[14px] flex items-center'>
              <BiWorld className='mr-[8px]' />
              {movie?.Country}
            </span>
            <span className='bg-[#161616] px-[8px] py-[4px] rounded-[4px] text-[14px] flex items-center'>
              <HiOutlineLanguage className='min-w-[16px] mr-[8px] text-[16px]' />
              {movie?.Language}
            </span>
            <span className='bg-[#161616] px-[8px] py-[4px] rounded-[4px] text-[14px] flex items-center'>
              <BiCommentDots className='mr-[8px]' />
              {movie?.imdbVotes}
            </span>
          </div>
          <div className='flex flex-wrap gap-[8px]'>
            <button className='px-[8px] py-[2px] bg-[#F33F3F] hover:bg-[#D63838] hover:text-neutral-200 rounded-[6px] text-[15px] flex items-center'>
              <span className='text-[15px] mr-[8px]'>
                <a
                  className='text-[15px]'
                  target='_blank'
                  href={`https://www.imdb.com/title/${movieId}`}
                >
                  Watch Now
                </a>
              </span>
              <FiExternalLink className='text-[14px]' />
            </button>
            <button
              onClick={onAddHandler}
              className='px-[8px] py-[2px] bg-[#F33F3F] hover:bg-[#D63838] hover:text-neutral-200 rounded-[6px] text-[15px]'
            >
              {isSaved}
            </button>
          </div>
          <div className='mt-[36px] mb-[46px] text-[16px] mr-[10px]'>
            {movie?.Plot}
          </div>
          <div className='flex sm:self-start'>
            <span className='text-[#A3A3A3] min-w-[80px] mr-[50px] text-[15px]'>
              Actors
            </span>
            <span className='text-[#D2D2D2] text-[16px] mr-[4px]'>
              {movie?.Actors}
            </span>
          </div>
          <div className='flex sm:self-start'>
            <span className='text-[#A3A3A3] min-w-[80px] mr-[50px] text-[15px]'>
              Written By
            </span>
            <span className='text-[#D2D2D2] text-[16px]  mr-[4px]'>
              {movie?.Writer}
            </span>
          </div>
          <div className='flex sm:self-start '>
            <span className='text-[#A3A3A3] min-w-[80px] mr-[50px] text-[15px]'>
              Released
            </span>
            <span className='text-[#D2D2D2] text-[16px] mr-[4px]'>
              {movie?.Released}
            </span>
          </div>
          <div className='flex sm:self-start '>
            <span className='text-[#A3A3A3] min-w-[80px] mr-[50px] text-[15px]'>
              Genre
            </span>
            <span className='text-[#D2D2D2] text-[16px] mr-[4px]'>
              {movie?.Genre}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
