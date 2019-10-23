import React from "react";
import "./MovieCard.scss";

const MovieCard = () => {
  return (
    <main className="MovieCard">
      <div className="MovieCard__div--container">
        <header className="MovieCard__header">
        <img className="MovieCard__img--favorite" src="#" alt="Favorite icon" />
        <img className="MovieCard__img--close" src="#" alt="Close window icon" />
        </header>
        <h3 className="MovieCard__h3">Movie.title</h3>
        <img className="MovieCard__img--poster" src={movie.poster} />
        <p className="MovieCard__p--overview">{movie.overview}</p>
        <p className="MovieCard__p--genre">{movie.genre}</p>
        <p className="MovieCard__p--release_date">{movie.release_date}</p>
        <p className="MovieCard__p--rating">{movie.rating}</p>
      </div>
    </main>
  );
};

export default MovieCard;