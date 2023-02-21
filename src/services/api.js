import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '86b2774f72e9923bd0f07dfe6f4fea8a',
  language: 'en-US',
}

export const getTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day');
  return response.data.results;
}

export const searchMovies = async query => {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data.results;
}

export const getMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`);
  // console.log(response.data);
  return response.data;
}

export const getMovieCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  // console.log(response);
  return response.data.cast;
}

export const getMoviesReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data.results;
}
