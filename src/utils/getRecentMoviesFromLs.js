export const getRecentMoviesFromLs = () => {
  const data = localStorage.getItem('recentMovies')
  const recentMovies = data ? JSON.parse(data) : []
  return recentMovies
}