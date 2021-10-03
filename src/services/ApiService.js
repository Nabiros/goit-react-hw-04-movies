import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";

axios.defaults.params = {
  apiKey: "98821d28938ee5f201a6b9b7afe95fef",
};

async function fetchMovies(url = "", configure = {}) {
  const response = await axios.get(url, configure);
  return response.data;
}

export function trendingMovies() {
  return fetchMovies(`trending/movie/day?`);
}

export function searchMovie(searchMovie, page) {
  return fetchMovies(`search/movie?&query=${searchMovie}&page=${page}`);
}

export function movieDetails(movieId) {
  return fetchMovies(`movie/${movieId}`);
}

export function movieCast(movieId) {
  return fetchMovies(`movie/${movieId}/credits`);
}

export function movieReviews(movieId) {
  return fetchMovies(`movie/${movieId}/reviews`);
}
