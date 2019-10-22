export const getMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=149174d30ba0677b5219f8786eaaaaa7')
  const data = await response.json();
  console.log(data)
}