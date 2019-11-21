import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./SelectedMovie.scss";
import { TrailerPlayer } from '../TrailerPlayer/TrailerPlayer';
import { getTrailer } from '../../apiCalls/apiCalls';

class SelectedMovie extends Component {
  constructor() {
    super()
    this.state = {
      videoKey: ''
    }
  }
  componentDidMount = async () => {
    this.setState({
      videoKey: await getTrailer(this.props.movieDetails.movie_id) ? await getTrailer(this.props.movieDetails.movie_id) : ''
    })
  }

  render() {
    const { wallpapers, movieDetails, match } = this.props;
    const { title, overview, poster_path, rating, movie_id, release_date } = movieDetails;
    const movieWallpaper = wallpapers.find(wallpaper => wallpaper.id === movie_id)
      .wallpaper;
    return (
      <>
        <Link to={`/${match.params[0]}`}>
          <div className="modal-backdrop-white">
            <div className="modal-backdrop"></div>
          </div>
        </Link>
        <main className="SelectedMovie movie-modal">
          <div className="SelectedMovie__div--container">
            <header className="SelectedMovie__header">
              {
                this.state.videoKey ? <TrailerPlayer youtubeId={this.state.videoKey} className="SelectedMovie__img--favorite" />
                  : <img
                    className="SelectedMovie__img--favorite"
                    src={movieWallpaper}
                    alt="Wallpaper"
                  />
              }
              <img
                className="SelectedMovie__img--close"
                src={poster_path}
                alt="Close window icon"
              />
            </header>
            <div className="bottom-container">
              <div className="movie-text">
                <h2><span>{title}</span></h2>
                <h3 className="SelectedMovie__h3">{overview}</h3>
              </div>
              <div className="movie-details">
                <h4>
                  Rating <span>{rating}</span>
                </h4>
                <h4 className='release-date'>
                  Released <span>{release_date.slice(0, 4)}</span>
                </h4>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  };
}

export default SelectedMovie;

SelectedMovie.propTypes = {
  movieDetails: PropTypes.object,
  wallpapers: PropTypes.array
  // match: Proptypes.object
};
