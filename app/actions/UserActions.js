/* @flow */

import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';
import WebAPI from '../util/WebAPI';

export default {

  getLatestStatuses() {

    let successHandler = (statuses) => {
      AppDispatcher.dispatch({
        type: Constants.LOAD_USERS_SUCCESS,
        data: statuses,
      });
    };

    let failHandler = (statuses) => {
      AppDispatcher.dispatch({
        type: Constants.LOAD_USERS_FAIL,
      });
    };

    AppDispatcher.dispatch({
      type: Constants.LOAD_USERS
    });

    WebAPI.latestStatus(successHandler, failHandler);
  }

};
