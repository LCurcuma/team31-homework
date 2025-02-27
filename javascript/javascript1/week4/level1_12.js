console.log("----level 1. 1.2. Review IMDB's code----");

function giveTheBestMovie(movies) {
  let arrayOfTitlesOfMovies = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating >= 8) {
      arrayOfTitlesOfMovies.push(movies[i].title);
    }
  }
  return arrayOfTitlesOfMovies;
}

let dataAboutTheMovies = [
  { title: "Interstellar", rating: 8.6 },
  { title: "The Room", rating: 3.7 },
  { title: "The Godfather", rating: 9.2 },
  { title: "Cars", rating: 7.1 },
];

console.log(giveTheBestMovie(dataAboutTheMovies));
// Expected Output: ["Interstellar", "The Godfather"]
