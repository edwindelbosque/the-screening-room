import React, { Component } from 'react';
import './SearchBar.scss';
import { getSearch } from '../../apiCalls/apiCalls';

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

	handleSubmit = e => {
		e.preventDefault();
		getSearch(this.state.search);
	};

	render() {
		return (
			<form>
				<input
					placeholder='Search movies'
					name='search'
					value={this.state.search}
					onChange={e => this.handleChange(e)}
				/>
				<button className='search-button' onClick={e => this.handleSubmit(e)}>
					Search
				</button>
			</form>
		);
	}
}

export default SearchBar;
