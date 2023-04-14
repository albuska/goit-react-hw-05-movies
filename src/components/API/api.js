import axios from 'axios';

export const fetchPopularMovies = async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=a0d42475ca47464f434a1779823aa27d', {
        // signal: controller.signal,
      }
  );
    return response.data; 
}  

export const fetchMovieSearchByKey = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=a0d42475ca47464f434a1779823aa27d&query=${query}`
  );
  console.log(response.data)
  return response.data;
};

export const fetchDetailsOfMovie = async (id) => { 
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=a0d42475ca47464f434a1779823aa27d`
  ); 
  return response.data; 
};

export const fetchMovieCredits = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=a0d42475ca47464f434a1779823aa27d`
  ); 
  return response.data;
};

export const fetchMovieReviews = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=a0d42475ca47464f434a1779823aa27d`
  );
  return  response.data;
};
