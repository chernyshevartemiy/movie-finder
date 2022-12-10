import React from 'react';
import {useParams} from "react-router-dom";
import {FaImdb} from "react-icons/fa";

const MovieInfo = () => {
  const {movieId} = useParams()
  const [movie, setMovie] = React.useState({})
  React.useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=5863b2ef`)
      .then((response) => response.json())
      .then((json) => {
        setMovie(json)
        console.log(json)
      })
  }, [])
  return (
    <div className='w-screen bg-[#1E1E1E] pt-[50px] md:pl-[40px] sm:pl-[0px] main'>
      <div className='flex lg:flex-row sm:flex-col sm:items-center cont'>
        <img
          className='md:max-w-[260px] sm:max-w-[240px] lg:max-w-[280px] w-full h-full max-h-[500px] object-cover rounded-[8px] sm:mb-[16px] lg:mb-[0px] mimg'
          src={movie?.Poster}
          alt=''
        />
        <div className='flex flex-col lg:ml-[34px] sm:ml-[10px] sm:items-center lg:items-start'>
          <span className='mb-[14px] font-bold text-[26px]'>{movie?.Title}</span>
          <span className='mb-[10px] text-[16px]'>Runtime: {movie?.Runtime}</span>
          <div className='mb-[40px] flex flex-wrap gap-[8px]'>
            <span className='bg-[#161616] px-[6px] py-[4px] rounded-[4px] text-[14px]'>
              {movie?.Language}
            </span>
            <span className='bg-[#161616] px-[8px] py-[4px] rounded-[4px] text-[14px] flex items-center'>
              <FaImdb className='mr-[6px] text-amber-500' color={'orange'}/>
              {movie?.imdbRating}
            </span>
            <span className='bg-[#161616] px-[8px] py-[4px] rounded-[4px] text-[14px]'>
              100%
            </span>
            <span className='bg-[#161616] px-[8px] py-[4px] rounded-[4px] text-[14px]'>
              86%
            </span>
            <span className='bg-[#161616] px-[8px] py-[4px] rounded-[4px] mr-[8px] text-[14px]'>
              77%
            </span>
          </div>
          <div className='flex flex-wrap gap-[8px]'>
            <button className='px-[8px] py-[2px] bg-[#F33F3F] rounded-[6px] text-[15px]'>
              Watch Now
            </button>
            <button className='px-[8px] py-[2px] bg-[#F33F3F] rounded-[6px] text-[15px]'>
              Add to Watchlist
            </button>
            <button className='px-[8px] py-[2px] bg-[#F33F3F] rounded-[6px] text-[15px]'>
              Trailer
            </button>
          </div>
          <div className='mt-[36px] mb-[46px] text-[16px] mr-[10px]'>
            {movie?.Plot}
          </div>
          <div className='flex sm:self-start'>
            <span className='text-[#A3A3A3] min-w-[80px] mr-[50px] text-[15px]'>Actors</span>
            <span className='text-[#D2D2D2] text-[16px] mr-[4px]'>{movie?.Actors}</span>
          </div>
          <div className='flex sm:self-start'>
            <span className='text-[#A3A3A3] min-w-[80px] mr-[50px] text-[15px]'>Written By</span>
            <span className='text-[#D2D2D2] text-[16px]  mr-[4px]'>{movie?.Writer}</span>
          </div>
          <div className='flex sm:self-start '>
            <span className='text-[#A3A3A3] min-w-[80px] mr-[50px] text-[15px]'>Released</span>
            <span className='text-[#D2D2D2] text-[16px] mr-[4px]'>{movie?.Released}</span>
          </div>
          <div className='flex sm:self-start '>
            <span className='text-[#A3A3A3] min-w-[80px] mr-[50px] text-[15px]'>Genre</span>
            <span className='text-[#D2D2D2] text-[16px] mr-[4px]'>{movie?.Genre}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
