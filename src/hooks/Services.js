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
  const [pages, setPages] = useState();
  const url = `${movieBaseUrl}/search/movie?query=${search}&api_key=${apiKey}`;
  useEffect(() => {
    if (search.length > 1) {
      fetchData(url, number, setSearchMovies, setPages, 200, page);
    }
  }, [page, search, number, url]); // eslint-disable-line react-hooks/exhaustive-deps
  return [searchMovies, setSearchMovies, pages];
}

export function useDiscoverMovies(urlQuery, number, width, page = 1) {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState();
  const url = `${movieBaseUrl}/discover/movie?${urlQuery}&api_key=${apiKey}`;
  useEffect(() => {
    fetchData(url, number, setMovies, setPages, width, page);
  }, [page, url, urlQuery]); // eslint-disable-line react-hooks/exhaustive-deps
  return [movies, pages];
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
  const [pages, setPages] = useState();
  const url = `${movieBaseUrl}${urlPath}?api_key=${apiKey}`;
  useEffect(() => {
    fetchData(url, number, setMovies, setPages, width, page);
  }, [page, url]); // eslint-disable-line react-hooks/exhaustive-deps
  return [movies, pages];
}

async function fetchData(url, number, setMovies, setPages, width, page = 1) {
  let pages = 0;
  const res = await fetch(`${url}&page=${page}`);
  const json = await res.json();
  pages = json.total_pages;
  const movies = mapResult(json.results.slice(0, number), width, posterUrl);
  setMovies(movies);
  setPages(pages);
}
