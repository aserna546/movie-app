import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Movie.css";
import MoviePanel from "./MoviePanel";
export default function Movie({ movie, panelView }) {
  const [hovered, setHovered] = useState(false);
  const [panelHovered, setPanelHovered] = useState(false);
  const [mousePos, setMousePos] = useState({});
  const handlePosition = (event) => {
    const position = {
      x: event.pageX,
      y: event.pageY - 257,
    };
    setMousePos(position);
    setHovered(true);
  };
  return (
    <React.Fragment>
      <Link to={`/movie/${movie.id}`}>
        <div
          onMouseEnter={(event) => handlePosition(event)}
          onMouseLeave={() => {
            if (!panelHovered) {
              setHovered(false);
            }
          }}
          className="movie-grid-item"
        >
          <img
            className="movie-poster"
            src={movie.movieImage}
            alt="Not Found"
          />
          <div className="movie-title">
            <h2>{movie.title}</h2>
          </div>
        </div>
      </Link>
      {panelView && (
        <MoviePanel
          onHovered={setPanelHovered}
          movie={movie}
          hovered={hovered}
          position={mousePos}
          panelHovered={panelHovered}
        ></MoviePanel>
      )}
    </React.Fragment>
  );
}
