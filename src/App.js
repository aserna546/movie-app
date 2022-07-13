import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NotFound from "./pages/NotFound";
import { useFetchMovies, useDiscoverMovies } from "./hooks/Services";

function App() {
  const popularPath = "/movie/popular";
  const topRatedPath = "/movie/top_rated";
  const date = new Date().toISOString().split("T")[0];
  const urlQuery = `sort_by=release_date.desc&release_date.lte=${date}&language=en-US&with_original_language=en`;
  const [popularMovies] = useFetchMovies(popularPath, 16, 500, 1);
  const [topRatedMovies] = useFetchMovies(topRatedPath, 16, 500, 1);
  const [latestMovies] = useDiscoverMovies(urlQuery, 16, 500, 1);
  const urlPath = "/trending/movie/day";
  const [trendingMovies] = useFetchMovies(urlPath, 5, 1280, 1);
  const data = {
    popularMovies,
    topRatedMovies,
    latestMovies,
    trendingMovies,
  };
  return (
    <Router>
      <div className="main">
        <NavBar></NavBar>
        <SideBar></SideBar>
        <Switch>
          <Route path="/" exact>
            <HomePage {...data}></HomePage>
          </Route>
          <Route path="/search/:search" exact>
            <SearchPage></SearchPage>
          </Route>
          <Route path="/movie/:id" exact>
            <MovieDetailsPage></MovieDetailsPage>
          </Route>
          <Route path="/">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
