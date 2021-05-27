import { useFetchMovies } from "../../hooks/Services";
import MovieList from "../Movies/MovieList/MovieList";
import "./SideBar.css";
import moviedblogo from "../../images/moviedb.png";
export default function SideBar() {
  const urlPath = "/movie/now_playing";
  const [movies] = useFetchMovies(urlPath, 20, 200, 1);
  return (
    <div className="side-bar">
      <h2 style={{ marginTop: "70px" }}>Movies in Theaters</h2>
      <div className="side-bar-top">
        <MovieList movies={movies} fullDate={true}></MovieList>
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
