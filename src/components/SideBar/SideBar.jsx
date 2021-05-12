import MovieList from "../Movies/MovieList/MovieList";
import "./SideBar.css";
export default function SideBar() {
  return (
    <div className="side-bar">
      <h2 style={{ marginTop: "70px" }}>Movies in Theaters</h2>
      <MovieList></MovieList>
    </div>
  );
}
