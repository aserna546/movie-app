import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import "./TopRatedCarousel.css";
import { truncate } from "../../utilities/helpers";

export default function TopRatedCarousel() {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const apiKey = "0fa0b27f454eb4a6fd29bbeaae965e3b";
  const [topRated, setTopRated] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setTopRated(data.results.slice(0, 5)));
  }, []);

  return (
    <div className="carousel">
      <Carousel interval={2000} fade={true} indicators={true}>
        {topRated.map((top, index) => {
          return (
            <CarouselItem key={index}>
              <img
                className="carousel-img"
                src={baseUrl + top.backdrop_path}
                alt=""
              />
              <Carousel.Caption>
                <div className="slide-caption">
                  <h2>{top.title}</h2>
                  <p>{truncate(top.overview, 200)}</p>
                  <button type="button" className="btn btn-danger mt-10">
                    <i className="fa fa-play"></i> Watch Now
                  </button>
                </div>
              </Carousel.Caption>
            </CarouselItem>
          );
        })}
      </Carousel>
    </div>
  );
}
