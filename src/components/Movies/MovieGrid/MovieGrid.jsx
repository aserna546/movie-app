import Movie from "./Movie";
import "./MovieGrid.css";

export default function MovieGrid({ movies, columns, rows, panelView }) {
  const movieListStyle = {
    gridTemplateColumns: `${columns}`,
    gridTemplateRows: `${rows}`,
  };
  return (
    <div className="movie-grid" style={movieListStyle}>
      {movies.map((movie, i) => {
        return <Movie key={i} movie={movie} panelView={panelView}></Movie>;
      })}
    </div>
  );
}
