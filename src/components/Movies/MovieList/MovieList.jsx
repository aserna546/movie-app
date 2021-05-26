import MovieListItem from "./MovieListItem.jsx";
import "./MovieList.css";
export default function MovieList({ movies, fullDate }) {
  return (
    <ul className="movie-list">
      {movies.map((movie, i) => {
        return (
          <MovieListItem
            key={i}
            movie={movie}
            fullDate={fullDate}
          ></MovieListItem>
        );
      })}
    </ul>
  );
}
