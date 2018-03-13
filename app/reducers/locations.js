import { GET_USERS_INITIAL_LOCATION, GET_USERS_CUSTOM_LOCATION } from '../actions/locations';

const initialState = {
  coordinate: {
    longitude: -86.756382,
    latitude: 36.175236,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_INITIAL_LOCATION:
      return {
        ...state,
        coordinate: action.coordinate,
      };
    case GET_USERS_CUSTOM_LOCATION:
      return {
        ...state,
        coordinate: action.coordinate,
      }
    default:
      return state;
  }
};

export default reducer;
