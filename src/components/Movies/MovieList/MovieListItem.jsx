import { genreListString } from "../../../utilities/GenreMap";
import "./MovieListItem.css";
export default function MovieListItem({ movie }) {
  return (
    <li className="movie-list-item">
      <img className="list-thumb" src={movie.movieImage} alt="" />
      <div className="movie-info">
        <a className="list-title" href="https://www.themoviedb.org/">
          {movie.title}
        </a>
        <p>{movie.release_date}</p>
        {genreListString(movie.genre_ids).map((genre, i) => {
          return (
            <a key={i} href="">
              {genre}
            </a>
          );
        })}
      </div>
    </li>
  );
}
