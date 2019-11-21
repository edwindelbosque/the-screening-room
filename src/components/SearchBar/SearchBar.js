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
			search: '',
			placeholders: [
				'The Dark Knight',
				'Across the Universe',
				'Shawshank Redemption',
				'The Godfather',
				'Gravity',
				'2001 Space Odyssey',
				'Fightclub',
				'Avengers: Endgame',
				'Spirited Away',
				'Pulp Fiction'
			][Math.floor(Math.random() * 10)]
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
					placeholder={`ex. ${this.state.placeholders}`}
					name='search'
					value={this.state.search}
					onChange={e => this.handleChange(e)}
					autoComplete="off"
				/>
				<NavLink exact to='/search'>
					<button className='search-button' onClick={this.handleSubmit}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 56.966 56.966">
							<path
								d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
						</svg>
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
