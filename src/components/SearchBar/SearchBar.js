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
			isComplete: false
		};
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = async () => {
		const results = await getSearch(this.state.search);
		const cleanResults = cleanSearch(results);
		this.props.setSearchResults(cleanResults);
		this.props.setSearchWallpapers(await getSearchWallpapers(cleanResults));
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

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ setSearchResults, setSearchWallpapers }, dispatch);
};

export default connect(
	null,
	mapDispatchToProps
)(SearchBar);
