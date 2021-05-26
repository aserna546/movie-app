import { useMoviesInTheators } from "../../hooks/Services";
import MovieList from "../Movies/MovieList/MovieList";
import "./SideBar.css";
import moviedblogo from "../../images/moviedb.png";
export default function SideBar() {
  const movies = useMoviesInTheators();
  return (
    <div className="side-bar">
      <h2 style={{ marginTop: "70px" }}>Movies in Theaters</h2>
      <div className="side-bar-top">
        <MovieList movies={movies}></MovieList>
      </div>
      <hr></hr>
      <div className="side-bar-bottom">
        <a href="https://www.themoviedb.org/">
          <img className="logo" src={moviedblogo} alt="" />
        </a>
      </div>
    </div>
  );
}
