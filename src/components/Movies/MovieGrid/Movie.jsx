import { useState } from "react";
import "./Movie.css";
import MoviePanel from "./MoviePanel";
export default function Movie({ movie, panelView }) {
  const base_url = "https://image.tmdb.org/t/p/w200/";
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="movie-item"
    >
      <img className="movie-poster" src={base_url + movie.poster_path} alt="" />
      <div className="movie-title">
        <h2>{movie.title}</h2>
      </div>
      {panelView && <MoviePanel movie={movie} hovered={hovered}></MoviePanel>}
    </div>
  );
}
