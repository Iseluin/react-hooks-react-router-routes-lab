import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesToDisplay = movies.map (
    (movie) => (
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <p>Runtime: {movie.time} mins.</p>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    )
  )
  return <div>
    <h1>Movies Page</h1>
    {moviesToDisplay}
  </div>;
}

export default Movies;
