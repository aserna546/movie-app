import MovieListItem from "./MovieListItem.jsx";
import "./MovieList.css";
export default function MovieList({ movies }) {
  return (
    <ul className="movie-list">
      {movies.map((movie, i) => {
        return <MovieListItem key={i} movie={movie}></MovieListItem>;
      })}
    </ul>
  );
}
