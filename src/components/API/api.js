import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// axios.defaults.headers.common['api_key'] = process.env.REACT_APP_API_KEY;

// export const fetchPopularMovies = async () => {
//     const response = await axios.get('/trending/all/day');
//     const data = response.data;
//     return data;
// }

export const fetchPopularMovies = async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=a0d42475ca47464f434a1779823aa27d', {
        // signal: controller.signal,
      }
  );
    return response.data; 
}  

export const fetchMovieSearchByKey = async () => {
  const response = await axios.get('/search/movie');
  return response.data;
};

export const fetchDetailsOfMovie = async (movieId) => { 
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=a0d42475ca47464f434a1779823aa27d`
  ); 
  return response.data;

};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`); 
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return  response.data;
};
