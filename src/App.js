import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <Router>
      <div className="main">
        <NavBar></NavBar>
        <SideBar></SideBar>
        <Switch>
          <Route path="/" exact>
            <HomePage></HomePage>
          </Route>
          <Route path="/search/:search" exact>
            <SearchPage></SearchPage>
          </Route>
          <Route path="/movie/:id">
            <MovieDetailsPage></MovieDetailsPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
