import { useDispatch, useSelector } from 'react-redux';
import Movie from './Movie';
import Error from './Error';
import { setRecentMovies } from '../redux/movieSlice';
import { selectMovie } from '../redux/selectors';

const Main = () => {
  const { movies, status, recentMovies } = useSelector(selectMovie);
  const dispatch = useDispatch();
  const recentHandler = (movie) => {
    dispatch(setRecentMovies(movie));
  };
  const isStatus = status === null ? 'Your recent movies' : 'Movies';
  return (
    <main className='w-screen bg-[#1E1E1E] pt-[40px] pl-[26px] main'>
      {status === 'error' ? (
        <>
          <p className='uppercase mb-[25px] text-[16px] leading-none text-[#9A9A9A]'>
            Movies
          </p>
          <Error />
        </>
      ) : (
        <>
          <p className='uppercase mb-[25px] text-[16px] leading-none text-[#9A9A9A]'>
            {isStatus}
          </p>
          <div className='flex gap-[15px] flex-wrap'>
            {movies.length === 0 && status === null ? (
              recentMovies.map((movie) => {
                return (
                  <Movie
                    recentHandler={() => recentHandler(movie)}
                    key={movie['#IMDB_ID']}
                    movie={movie}
                  />
                );
              })
            ) : status === 'loading' ? (
              <div>Loading...</div>
            ) : (
              movies.map((movie) => {
                return (
                  <Movie
                    recentHandler={() => recentHandler(movie)}
                    key={movie['#IMDB_ID']}
                    movie={movie}
                  />
                );
              })
            )}
          </div>
        </>
      )}
    </main>
  );
};

export default Main;
