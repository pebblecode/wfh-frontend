// import {List, Map} from 'immutable';
import {REQUEST_LOAD_USERS, RECEIVE_USERS} from '../actions';

export default function usersReducer(state = {
  isFetching: false,
  didInvalidate: false,
  users: []
}, action) {

  switch (action.type) {
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
