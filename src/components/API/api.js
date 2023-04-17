import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a0d42475ca47464f434a1779823aa27d';

export const fetchPopularMovies = async ()  => {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`,
    // {
    //   signal: controller.signal,
    // }
  );
  return response.data;
};

export const fetchMovieSearchByKey = async (query, controller) => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`,
    {
      signal: controller.signal,
    }
  );
  return response.data;
};

export const fetchDetailsOfMovie = async (id) => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}`,
    // {
    //   signal: controller.signal,
    // }
  );
  return response.data;
};

export const fetchMovieCredits = async (id, controller) => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`,
    {
      signal: controller.signal,
    }
  );
  return response.data;
};

export const fetchMovieReviews = async (id, controller) => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`,
    {
      signal: controller.signal,
    }
  );
  return response.data;
};
