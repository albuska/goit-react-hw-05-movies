import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['api_key'] = process.env.REACT_APP_API_KEY;

export const fetchPopularMovies = async () => {
    const response = await axios.get('/trending/all/day');
    const data = response.data;
    return data; 
}  

export const fetchMovieSearchByKey = async () => {
  const response = await axios.get('/search/movie');
  const data = response.data;
  return data;
};

export const fetchDetailsOfMovie = async (movieId) => { 
  const response = await axios.get(`/movie/${movieId}`, {
    params: {
      breed_id: movieId,
    },
  });
  const data = response.data;
  return data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  const data = response.data;
  return data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  const data = response.data;
  return data;
};
