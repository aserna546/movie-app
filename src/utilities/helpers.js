import noImage from "../images/330px-No-Image-Placeholder.svg.png";
export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export const truncate = (string, length) => {
  return string.length < length - 3
    ? string
    : string.slice(0, length - 2) + "...";
};

// map array of movies to new object
export function mapResult(res, width, posterUrl) {
  return res.map((movie) => {
    // deconstruct movie
    const {
      poster_path,
      adult,
      backdrop_path,
      id,
      vote_count,
      vote_average,
      title,
      release_date,
      genre_ids,
      original_language,
      overview,
      popularity,
    } = movie;

    const movieObject = {
      movieImage: poster_path ? posterUrl + width + poster_path : noImage,
      adult,
      backgroundImage: backdrop_path
        ? posterUrl + width + backdrop_path
        : undefined,
      id,
      vote_count,
      vote_average,
      title,
      release_date: new Date(release_date), // make sure to change data type
      original_language,
      genre_ids,
      overview,
      popularity,
    };
    return movieObject;
  });
}
