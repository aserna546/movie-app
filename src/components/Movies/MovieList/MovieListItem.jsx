import { genreListString } from "../../../utilities/GenreMap";
import "./MovieListItem.css";
export default function MovieListItem({ movie, fullDate }) {
  const { release_date } = movie;
  return (
    <li className="movie-list-item">
      <img className="list-thumb" src={movie.movieImage} alt="" />
      <div className="movie-info">
        <a className="list-title" href="https://www.themoviedb.org/">
          {movie.title}
        </a>
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
