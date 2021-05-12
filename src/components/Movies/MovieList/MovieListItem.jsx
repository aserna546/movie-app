export default function MovieListItem({ movie }) {
  const base_url = "https://image.tmdb.org/t/p/w200/";
  return (
    <div>
      <img src={base_url + movie.poster_path} alt="" />
      <div className="movie-info">
        <a href="">{movie.title}</a>
        <p>{movie.release_date}</p>
        {movie.genre_ids.map((id) => {
          return <a href="">{id} ,</a>;
        })}
      </div>
    </div>
  );
}
