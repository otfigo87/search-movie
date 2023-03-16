import React from "react";

const MovieDisplay = ({ movie }) => {
  return (
    <div className="movie-container">
      <div>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <h2>{movie.Year}</h2>
      </div>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
};

export default MovieDisplay;
