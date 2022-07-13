import { Link } from "react-router-dom";
import { genreListString } from "../../../utilities/GenreMap";
import "./MovieListItem.css";
export default function MovieListItem({ movie, fullDate }) {
  const { release_date } = movie;
  return (
    <li className="movie-list-item">
      <Link to={`/movie/${movie.id}`}>
        <img className="list-thumb" src={movie.movieImage} alt="" />
      </Link>
      <div className="movie-info">
        <Link to={`/movie/${movie.id}`} className="list-title">
          {movie.title}
        </Link>
        {!isNaN(release_date.getTime()) && (
          <p>
            {fullDate
              ? release_date.toLocaleDateString()
              : release_date.getFullYear()}
          </p>
        )}
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
