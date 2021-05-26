import MovieGrid from "./Movies/MovieGrid/MovieGrid";
import NavBar from "./NavBar/NavBar";
import { movies } from "../MovieData";
import "./App.css";
import TopRatedCarousel from "./TopRated/TopRatedCarousel";
import SideBar from "./SideBar/SideBar";
import HeaderGrid from "./HeaderGrid/HeaderGrid";

function App() {
  return (
    <div className="main">
      <NavBar></NavBar>
      <SideBar></SideBar>
      <div className="top-content">
        <TopRatedCarousel></TopRatedCarousel>
      </div>
      <div className="container">
        <HeaderGrid title="Lastest Movies"></HeaderGrid>
        <MovieGrid movies={movies} panelView={true}></MovieGrid>
      </div>
    </div>
  );
}

export default App;
