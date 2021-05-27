import MovieGrid from "../components/Movies/MovieGrid/MovieGrid";
import "./HomePage.css";
import TrendingCarousel from "../components/TrendingCarousel/TrendingCarousel";
import HeaderGrid from "../components/HeaderGrid/HeaderGrid";
import { useDiscoverMovies, useFetchMovies } from "../hooks/Services";

export default function HomePage() {
  const popularPath = "/movie/popular";
  const topRatedPath = "/movie/top_rated";
  const date = new Date().toISOString().split("T")[0];
  const urlQuery = `sort_by=release_date.desc&release_date.lte=${date}&language=en-US&with_original_language=en`;
  const [popularMovies] = useFetchMovies(popularPath, 16, 500, 1);
  const [topRatedMovies] = useFetchMovies(topRatedPath, 16, 500, 1);
  const [latestMovies] = useDiscoverMovies(urlQuery, 16, 500, 1);
  return (
    <div className="home-page">
      <div className="top-content">
        <TrendingCarousel></TrendingCarousel>
      </div>
      <div className="container">
        <HeaderGrid title="Popular Movies"></HeaderGrid>
        <MovieGrid movies={popularMovies} panelView={true}></MovieGrid>
        <HeaderGrid title="Top Rated Movies"></HeaderGrid>
        <MovieGrid movies={topRatedMovies} panelView={true}></MovieGrid>
        <HeaderGrid title="Latest Movies"></HeaderGrid>
        <MovieGrid movies={latestMovies} panelView={true}></MovieGrid>
      </div>
    </div>
  );
}
