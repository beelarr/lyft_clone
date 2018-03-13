export const GET_USERS_INITIAL_LOCATION = 'GET USERS INITIAL LOCATION';
export const GET_USERS_CUSTOM_LOCATION = 'GET USERS CUSTOM LOCATION';

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
    latitude: position.latitude
  },
});
