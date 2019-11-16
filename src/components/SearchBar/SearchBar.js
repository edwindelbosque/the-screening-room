import React, { Component } from 'react';
import './SearchBar.scss';
import { getSearch, cleanSearch, getSearchWallpapers } from '../../apiCalls/apiCalls';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSearchResults, setSearchWallpapers } from '../../actions/index';
import { NavLink } from 'react-router-dom';

class SearchBar extends Component {
	constructor() {
		super();
		this.state = {
			search: ''
		};
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = async () => {
		if (this.state.search) {
			const results = await getSearch(this.state.search);
			const cleanResults = cleanSearch(results);
			const { favorites, setSearchResults, setSearchWallpapers } = this.props;
			const markedFavorites = this.markFavorites(cleanResults, favorites);
			setSearchResults(markedFavorites);
			setSearchWallpapers(await getSearchWallpapers(cleanResults));
		}
	};

	markFavorites = (movies, favorites) => {
		return movies.map(movie => {
			return favorites.find(
				favorite => favorite.movie_id === movie.movie_id
			)
				? { ...movie, favorite: true }
				: { ...movie, favorite: false };
		});
	};

	render() {
		return (
			<form className='SearchBar'>
				<input
					placeholder='Search movies'
					name='search'
					value={this.state.search}
					onChange={e => this.handleChange(e)}
				/>
				<NavLink exact to='/search'>
					<button className='search-button' onClick={this.handleSubmit}>
						Search
					</button>
				</NavLink>
			</form>
		);
	}
}

const mapStateToProps = ({ favorites }) => ({
	favorites
})

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ setSearchResults, setSearchWallpapers }, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBar);
