export const getPopularMovies = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWQ5MDdhYjMxZTkwYjJjYTY4MTVhMDAyYmRkMWE3YyIsInN1YiI6IjY0ZjlhNjFhNWYyYjhkMDEzOWQwYTgwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PS_mo30389N144N9mkpPelkWgOM616tY1cH5wbzpGC4'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};