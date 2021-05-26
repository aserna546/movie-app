const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const mapGenre = (genres) => {
  const genreMap = new Map();
  genres.forEach((genre) => {
    genreMap.set(genre.id, genre.name);
  });
  return genreMap;
};

// keys are ids and values are names of genre.
export const genreMap = mapGenre(genres);

export function genreListString(genreIds) {
  if (genreIds.length === 1) {
    return [genreMap.get(genreIds[0])];
  } else {
    let genreString = [];
    for (let index = 0; index < genreIds.length; index++) {
      const genreName = genreMap.get(genreIds[index]);
      if (index < genreIds.length - 1) {
        genreString.push(genreName + ", ");
      } else {
        genreString.push(genreName);
      }
    }
    return genreString;
  }
}
