/* @flow */

import Immutable from 'immutable';
import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';
import BaseStore from './BaseStore';

type Status = {
  statusDetails: string;
  statusType: string;
};

type UserStatus = {
  email: string;
  name: string;
  status: Status;
};

class UserStore extends BaseStore {

  data: Array<UserStatus>;

  getData() {
    return this.data;
  }

}

const userStoreInstance = new UserStore();

userStoreInstance.dispatchToken = AppDispatcher.register((action) => {

  switch (action.type) {
    case Constants.LOAD_USERS_SUCCESS:
      /* eslint new-cap: 0 */
      userStoreInstance.data = Immutable.List(action.data);
      userStoreInstance.emitChange();
      break;
    default:
      break;
  }

});

export default userStoreInstance;
