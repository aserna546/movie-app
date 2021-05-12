import { movies } from "../../../MovieData.js";
import MovieListItem from "./MovieListItem.jsx";
export default function MovieList() {
  return (
    <div>
      <ul>
        {movies.map((movie, i) => {
          return (
            <li>
              <MovieListItem movie={movie}></MovieListItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
