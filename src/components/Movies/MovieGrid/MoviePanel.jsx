import "./MoviePanel.css";
import { truncate } from "../../../utilities/helpers";
import { useEffect, useState } from "react";
export default function MoviePanel({
  movie,
  hovered,
  position,
  onHovered,
  panelHovered,
}) {
  const { release_date } = movie;
  const [posStyle, setPosStyle] = useState({});

  useEffect(() => {
    const viewStyle = {
      display: hovered || panelHovered ? "block" : "none",
      top: `${position.y}px`,
      left: `${position.x}px`,
    };
    setPosStyle(viewStyle);
  }, [hovered, panelHovered]);
  return (
    <div
      onMouseEnter={() => onHovered(true)}
      onMouseLeave={() => onHovered(false)}
      className="panel"
      style={posStyle}
    >
      <div className="panel-title">{movie.title}</div>
      <div className="panel-content">
        <div className="top-content">
          <span className="movie-info rating">
            TMDb: {movie.vote_average * 10}%
          </span>
          {!isNaN(release_date) && (
            <span className="movie-info">{release_date.getFullYear()}</span>
          )}
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
