import "./MoviePanel.css";
import { truncate } from "../../../utilities/helpers";
export default function MoviePanel({ movie, hovered }) {
  const releaseDate = new Date(
    movie.media_type === "movie" ? movie.release_date : movie.first_air_date
  );

  return (
    <div className="panel" style={{ display: hovered ? "block" : "none" }}>
      <div className="panel-title">{movie.title}</div>
      <div className="panel-content">
        <div className="top-content">
          <span className="movie-info rating">
            TMDb: {movie.vote_average * 10}%
          </span>
          <span className="movie-info">{releaseDate.getFullYear()}</span>
          <span className="movie-info">{movie.original_language}</span>
        </div>
        <div>
          <p>{truncate(movie.overview, 150)}</p>
        </div>
        <div className="panel-bottom">
          <button type="button" className="btn btn-block btn-danger">
            <i className="fa fa-play"></i> Watch Movie
          </button>
        </div>
      </div>
    </div>
  );
}
