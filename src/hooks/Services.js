import { useState, useEffect } from "react";
import { mapResult } from "../utilities/helpers";

const posterUrl = "https://image.tmdb.org/t/p/w";
const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "0fa0b27f454eb4a6fd29bbeaae965e3b";

// number is how many to retrieve
export const useFetchTrending = (number) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const url = `${movieBaseUrl}/trending/movie/day?api_key=${apiKey}`;
  useEffect(() => {
    fetchData(url, number, setTrendingMovies, 500);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return trendingMovies;
};

export function useSearchMovies(search, number, page) {
  const [searchMovies, setSearchMovies] = useState([]);
  const url = `${movieBaseUrl}/search/movie?query=${search}&page=${page}&api_key=${apiKey}`;
  useEffect(() => {
    if (search.length > 1) {
      fetchData(url, number, setSearchMovies, 200);
    }
  }, [page, search, number]); // eslint-disable-line react-hooks/exhaustive-deps
  return searchMovies;
}

export function useMoviesInTheators(number = 21) {
  const [moviesInTh, setMoviesInTh] = useState([]);
  const url = `${movieBaseUrl}/movie/now_playing?api_key=${apiKey}`;
  useEffect(() => {
    fetchData(url, number, setMoviesInTh, 200);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return moviesInTh;
}

async function fetchData(url, number, setMovies, width) {
  const res = await fetch(url);
  const json = await res.json();
  const movies = mapResult(json.results.slice(0, number), width, posterUrl);
  setMovies(movies);
}
