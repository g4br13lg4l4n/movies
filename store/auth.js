export const getters = {
	authenticated(state) {
		return state.loggedIn;
	},
	users(state) {
		return state.user;
	}
}