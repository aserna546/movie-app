import { useParams } from "react-router";
import { useFetchMovieDetail } from "../hooks/Services";
import "./MovieDetailsPage.css";
export default function MovieDetailsPage() {
  const { id } = useParams();
  const movie = useFetchMovieDetail(id);
  console.log(movie);
  return (
    <div className="detail-page">
      <div
        className="cover"
        style={{ backgroundImage: `url(${movie.imagePath})` }}
      ></div>
      <div className="container">
        <div className="detail-info">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
