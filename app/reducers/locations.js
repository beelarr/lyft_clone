import {
  GET_USERS_INITIAL_LOCATION,
  GET_USERS_CUSTOM_LOCATION,
  BOOK_SERVICES,
  GET_NEARBY_NURSES,
} from '../actions/locations';

const initialState = {
  user: {
    userName: 'beelarr',
    firstName: 'Bryon',
    lastName: 'Larrance',
    coordinate: {
      longitude: -86.756382,
      latitude: 36.175236,
    },
  },
  nearbyNurses: [],
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
      };
    case BOOK_SERVICES:
      return {
        ...state,
        user: action.payload,
      };
    case GET_NEARBY_NURSES:
      return {
        ...state,
        nearbyNurses: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
