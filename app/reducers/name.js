import { SET_NAME, setName } from "../actions/inital";

const initialState = {
	name: "Bryon"
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_NAME:
			return {
				...state,
				name: action.name
			};
		default:
			return state;
	}
};
console.log("initial state", initialState);
console.log("SET_NAME", reducer(initialState, setName()));


export default reducer;
