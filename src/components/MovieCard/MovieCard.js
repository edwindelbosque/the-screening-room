import React from "react";
import "./MovieCard.scss";

const MovieCard = () => {
  return (
    <div className="MovieCard__div--container">
      <img
        className="MovieCard__img--poster"
        src="#"
        alt="Official movie poster"
      />
      <p className="MovieCard__p--title">{movie.title}</p>
      <p className="MovieCard__p--rRated">{movie.rRated}</p>
      <p className="MovieCard__p--release_date">{movie.release_date}</p>
      <img
        className="MovieCard__img--favorite-icon"
        src="#"
        alt="Favorite icon"
      />
    </div>
  );
};

export default MovieCard;
