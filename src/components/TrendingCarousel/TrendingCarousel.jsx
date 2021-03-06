import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import "./TrendingCarousel.css";
import { truncate } from "../../utilities/helpers";
import { Link } from "react-router-dom";

export default function TrendingCarousel({ trendingMovies }) {
  return (
    <div className="carousel">
      <Carousel interval={2000} fade={true} indicators={true}>
        {trendingMovies.map((top, index) => {
          return (
            <CarouselItem key={index}>
              <div className="trending-movies">
                <img
                  className="carousel-img"
                  src={top.backgroundImage}
                  alt="Not Found"
                />
              </div>
              <Carousel.Caption>
                <div className="slide-caption">
                  <h2>{top.title}</h2>
                  <p>{truncate(top.overview, 200)}</p>
                  <Link to={`/movie/${top.id}`}>
                    <button type="button" className="btn btn-danger mt-10">
                      <i className="fa fa-play"></i> Watch Now
                    </button>
                  </Link>
                </div>
              </Carousel.Caption>
            </CarouselItem>
          );
        })}
      </Carousel>
    </div>
  );
}
