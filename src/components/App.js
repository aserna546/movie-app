import MovieGrid from "./Movies/MovieGrid/MovieGrid";
import NavBar from "./NavBar/NavBar";
import { movies } from "../MovieData";
import "./App.css";
import TopRatedCarousel from "./TopRated/TopRatedCarousel";
import { useEffect, useState } from "react";
import SideBar from "./SideBar/SideBar";

function App() {
  return (
    <div className="main">
      <NavBar></NavBar>
      <SideBar></SideBar>
      <TopRatedCarousel></TopRatedCarousel>
      <div className="container">
        <h1>Movies</h1>
        <MovieGrid movies={movies} panelView={true}></MovieGrid>
      </div>
    </div>
  );
}

export default App;
