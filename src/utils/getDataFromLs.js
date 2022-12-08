export const getDataFromLs = () => {
  const data = localStorage.getItem('savedMovies')
  const movies = data ? JSON.parse(data) : []
  return movies
}