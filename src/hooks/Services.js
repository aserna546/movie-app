import { useState, useEffect } from "react";
import { mapResult } from "../utilities/helpers";

const posterUrl = "https://image.tmdb.org/t/p/w";
const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "0fa0b27f454eb4a6fd29bbeaae965e3b";

/**
 * Fetches movies from user search input.
 * @param {String} search Serach string to query the api
 * @param {nubmer} number How many movies to return
 * @param {numer} page Page to query
 * @returns {Array} An array of movies
 */
export function useSearchMovies(search, number, page = 1) {
  const [searchMovies, setSearchMovies] = useState([]);
  const url = `${movieBaseUrl}/search/movie?query=${search}&page=${page}&api_key=${apiKey}`;
  useEffect(() => {
    if (search.length > 1) {
      fetchData(url, number, setSearchMovies, 200);
    }
  }, [page, search, number, url]); // eslint-disable-line react-hooks/exhaustive-deps
  return searchMovies;
}

export function useDiscoverMovies(urlQuery, number, width, page) {
  const [movies, setMovies] = useState([]);
  const url = `${movieBaseUrl}/discover/movie?${urlQuery}&page=${page}&api_key=${apiKey}`;
  useEffect(() => {
    fetchData(url, number, setMovies, width);
  }, [page, url, urlQuery]); // eslint-disable-line react-hooks/exhaustive-deps
  return movies;
}

/**
 * Fetches movies from themovie db
 * @param {String} urlPath The specific api path url
 * @param {number} number How many movies to return
 * @param {number} width Size of image width
 * @param {number} page Page to query
 * @returns {Array} An array of movies
 */

export function useFetchMovies(urlPath, number = 16, width = 200, page = 1) {
  const [movies, setMovies] = useState([]);
  const url = `${movieBaseUrl}${urlPath}?page=${page}&api_key=${apiKey}`;
  useEffect(() => {
    fetchData(url, number, setMovies, width);
  }, [page, url]); // eslint-disable-line react-hooks/exhaustive-deps
  return movies;
}

async function fetchData(url, number, setMovies, width) {
  const res = await fetch(url);
  const json = await res.json();
  const movies = mapResult(json.results.slice(0, number), width, posterUrl);
  setMovies(movies);
}
