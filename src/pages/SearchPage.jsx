import { useLocation, useParams } from "react-router";
import HeaderGrid from "../components/HeaderGrid/HeaderGrid";
import MovieGrid from "../components/Movies/MovieGrid/MovieGrid";
import Pagination from "../components/Pagination/Pagination";
import { useSearchMovies } from "../hooks/Services";
import "./SearchPage.css";

export default function SearchPage() {
  const location = useLocation();
  let page = parseInt(location.search.replace("?page=", ""));
  let currentPage = isNaN(page) ? 1 : page;
  let { search } = useParams();
  const title = `Search Results for ${search}`;
  const [movies, ...array] = useSearchMovies(search, 20, currentPage * 2 - 1);
  const [movies2] = useSearchMovies(search, 20, currentPage * 2);
  const [pages] = array.slice(-1);
  const totalFloor = Math.floor(pages / 2);
  const totalPages = totalFloor === 0 ? 1 : totalFloor;
  return (
    <div className="container search-page">
      <HeaderGrid title={title}></HeaderGrid>
      <MovieGrid movies={movies.concat(movies2)} panelView={true}></MovieGrid>
      <Pagination
        totalPages={totalPages}
        location={location}
        currentPage={currentPage}
      ></Pagination>
    </div>
  );
}
