import {REQUEST_LOAD_USERS, RECEIVE_USERS, REQUEST_INTERVAL_START} from '../actions';

export default function usersReducer(state = {
  isFetching: false,
  didInvalidate: false,
  users: [],
  intervalRef: null
}, action) {

  switch (action.type) {
    case REQUEST_INTERVAL_START:

      return Object.assign({}, state, {
        intervalRef: action.intervalRef
      });

    case REQUEST_LOAD_USERS:

      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });

    case RECEIVE_USERS:

      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        users: action.users
      });

    default:
      return state;

  }

}
