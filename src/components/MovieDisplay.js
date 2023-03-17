import React from "react";

const MovieDisplay = ({ movie }) => {

  const loaded = () => {
   if (movie.Error){
    return <h1>Movie Not Found</h1>
   }
    return (
    <div className="movie-container">
      <div>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <h2>{movie.Year}</h2>
      </div>
      <img src={movie.Poster} alt={movie.Title} />
    </div>   
    )
  }

  const loading = () => <h1>No movie to display</h1>;


  return movie ? loaded() : loading();
};

export default MovieDisplay;
