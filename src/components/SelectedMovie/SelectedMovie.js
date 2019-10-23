import React from "react";
import "./SelectedMovie.scss";

const SelectedMovie = () => {
  return (
    <main className="SelectedMovie">
      <div className="SelectedMovie__div--container">
        <header className="SelectedMovie__header">
          <img
            className="SelectedMovie__img--favorite"
            src="#"
            alt="Favorite icon"
          />
          <img
            className="SelectedMovie__img--close"
            src="#"
            alt="Close window icon"
          />
        </header>
        <h3 className="SelectedMovie__h3">Movie.title</h3>
        <img
          className="SelectedMovie__img--poster"
          // src={movie.poster}
          alt="Official movie poster"
        />
        {/* <p className="SelectedMovie__p--overview">{movie.overview}</p> */}
        {/* <p className="SelectedMovie__p--genre">{movie.genre}</p> */}
        {/* <p className="SelectedMovie__p--release_date">{movie.release_date}</p> */}
        {/* <p className="SelectedMovie__p--rating">{movie.rating}</p> */}
      </div>
    </main>
  );
};

export default SelectedMovie;
