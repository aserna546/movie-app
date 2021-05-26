import { useState } from "react";
import { useSearchMovies } from "../../hooks/Services";
import MovieList from "../Movies/MovieList/MovieList";
import "./Search.css";
export default function Search() {
  const [foucus, setFocused] = useState(false);
  const [search, setSearch] = useState("");
  const [hoverd, setHovered] = useState(false);

  const movies = useSearchMovies(search, 5, 1);
  return (
    <div
      onFocus={() => setFocused(true)}
      onBlur={() => {
        if (!hoverd) {
          setFocused(false);
        }
      }}
      className="search"
    >
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        value={search}
        placeholder="Searching..."
      />
      <i className="fas fa-search fa-lg icon"></i>

      <div
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="search-suggest"
        style={
          !foucus || movies.length === 0
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <MovieList movies={movies}></MovieList>
        <a href="" className="movie-search-link">
          View all
        </a>
      </div>
    </div>
  );
}
