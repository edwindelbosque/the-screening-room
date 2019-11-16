export const searchResults = (state = [], action) => {
	switch (action.type) {
		case 'SET_SEARCH_RESULTS':
			return action.results;
		case 'TOGGLE_FAVORITE':
			return state.map(movie =>
				movie.title === action.title
					? { ...movie, favorite: !movie.favorite }
					: movie
			);
		case 'RESET_MOVIES_FAVORITES':
			return state.map(movie => ({
				...movie, favorite: false
			}))
		default:
			return state;
	}
};
