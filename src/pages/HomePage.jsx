import MovieGrid from "../components/Movies/MovieGrid/MovieGrid";
import "./HomePage.css";
import TrendingCarousel from "../components/TrendingCarousel/TrendingCarousel";
import HeaderGrid from "../components/HeaderGrid/HeaderGrid";

export default function HomePage({
  popularMovies,
  topRatedMovies,
  latestMovies,
  trendingMovies,
}) {
  return (
    <div className="home-page">
      <TrendingCarousel trendingMovies={trendingMovies}></TrendingCarousel>
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
