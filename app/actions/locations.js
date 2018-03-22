export const GET_USERS_INITIAL_LOCATION = 'GET USERS INITIAL LOCATION';
export const GET_USERS_CUSTOM_LOCATION = 'GET USERS CUSTOM LOCATION';
export const BOOK_SERVICES = 'BOOK SERVICES';
export const GET_NEARBY_NURSES = 'GET_NEARBY_NURSES';

export const getUsersInitialLocation = position => ({
  type: GET_USERS_INITIAL_LOCATION,
  coordinate: {
    longitude: position.coords.longitude,
    latitude: position.coords.latitude,
  },
});

export const getUsersCustomLocation = position => ({
  type: GET_USERS_CUSTOM_LOCATION,
  coordinate: {
    longitude: position.longitude,
    latitude: position.latitude,
  },
});

export const bookServices = user => ({
  type: BOOK_SERVICES,
  payload: {
    userName: user.userName,
    firstName: user.firstName,
    lastName: user.lastName,
    coordinate: {
      longitude: user.coordinate.longitude,
      latitude: user.coordinate.latitude,
    },
  },
});

export const getNearbyNurses = nurses => ({
  type: GET_NEARBY_NURSES,
  payload: nurses,
});
