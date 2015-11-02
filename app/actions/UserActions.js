/* @flow */

import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';
import WebAPI from '../util/WebAPI';

function groupStatus(statuses,statusType) {
  var s = statuses.filter(worker => {
    return worker.status.statusType === statusType;
  });

  return s;
}

export default {

  getLatestStatuses(){

    let successHandler = (statuses)=>{

      let statusesGrouped = [];

      groupStatus(statuses, 'InOffice').forEach(w => statusesGrouped.push(w));
      groupStatus(statuses, 'OutOfOffice').forEach(w => statusesGrouped.push(w));
      groupStatus(statuses, 'Holiday').forEach(w => statusesGrouped.push(w));
      groupStatus(statuses, 'Sick').forEach(w => statusesGrouped.push(w));

      AppDispatcher.dispatch({
        type: Constants.LOAD_USERS_SUCCESS,
        data: statusesGrouped
      });
    };

    let failHandler = () => {
      AppDispatcher.dispatch({
        type: Constants.LOAD_USERS_FAIL
      });
    };

    AppDispatcher.dispatch({
      type: Constants.LOAD_USERS
    });

    WebAPI.latestStatus(successHandler, failHandler);
  }

};
