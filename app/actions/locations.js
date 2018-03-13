export const GET_USERS_CURRENT_LOCATION = 'GET CURRENT LOCATION';

export const getUsersCurrentLocation = coordinate => ({
  type: GET_USERS_CURRENT_LOCATION,
  coordinate: coordinate,
});
