import { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useSearchMovies } from "../../hooks/Services";
import MovieList from "../Movies/MovieList/MovieList";
import "./Search.css";
export default function Search() {
  const [foucus, setFocused] = useState(false);
  const [search, setSearch] = useState("");
  const [hoverd, setHovered] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const handleSubmit = (event) => {
    if (event.code === "Enter") {
      let location = {
        pathname: `/search/${search}`,
        state: {
          currentPage: 1,
        },
      };
      history.push(location);
      setSearch("");
      setMovies([]);
    }
  };

  useEffect(() => {
    // when location changes resets search string and movies
    setSearch("");
    setMovies([]);
  }, [location]);

  const [movies, setMovies] = useSearchMovies(search, 5, 1);
  return (
    <div
      onKeyDown={(event) => {
        handleSubmit(event);
      }}
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
      <Link to={`/search/${search}`}>
        <i className="fas fa-search fa-lg icon"></i>
      </Link>
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
        <MovieList movies={movies} fullDate={false}></MovieList>
        <Link to={`/search/${search}`} className="movie-search-link">
          View all
        </Link>
      </div>
    </div>
  );
}
