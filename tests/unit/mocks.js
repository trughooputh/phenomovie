const movieMock = {
  "genres": [
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 10751,
      "name": "Family"
    }
  ],
  "homepage": "http://www.warnerbros.com/archive/spacejam/movie/jam.htm",
  "id": 2300,
  "original_language": "en",
  "original_title": "Space Jam",
  "overview": "Micheal Jordan and Bugs Bunny",
  "poster_path": "/w0y7mNCiiHdyo05KlguqQS28Frn.jpg",
  "release_date": "1996-11-15",
  "title": "Space Jam",
  "vote_average": 6.8
};

const MoviesStoreMock = {
    state: {
      movies: [{
        id: 1234
      }]
    },
    actions: {
      addMovie: function () {},
      removeMovie: function () {}
    },
    getters: {
      isMovieAdded: (movieResearched) => false
    }
}

export {
  movieMock,
  MoviesStoreMock
};
