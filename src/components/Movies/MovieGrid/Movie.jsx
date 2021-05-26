import { useState } from "react";
import "./Movie.css";
import MoviePanel from "./MoviePanel";
export default function Movie({ movie, panelView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="movie-grid-item"
    >
      <img className="movie-poster" src={movie.movieImage} alt="Not Found" />
      <div className="movie-title">
        <h2>{movie.title}</h2>
      </div>
      {panelView && <MoviePanel movie={movie} hovered={hovered}></MoviePanel>}
    </div>
  );
}
