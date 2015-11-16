/* @flow */
import WebAPI from '../util/WebAPI';

function groupStatus(statuses, statusType) {
  return statuses.filter(worker => worker.status.statusType === statusType);
}

const INTERVAL = 10 * 1000;

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const LOAD_USERS_FAIL = 'LOAD_USERS_FAIL';
export const REQUEST_LOAD_USERS = 'REQUEST_LOAD_USERS';
export const REQUEST_INTERVAL_START = 'REQUEST_INTERVAL_START';

export function getLatestStatuses(dispatch) {

  dispatch({
    type: REQUEST_LOAD_USERS
  });

  return WebAPI.latestStatus()
    .then((statuses) => {

      const statusesGrouped = [];

      groupStatus(statuses, 'InOffice').forEach(w => statusesGrouped.push(w));
      groupStatus(statuses, 'OutOfOffice').forEach(w => statusesGrouped.push(w));
      groupStatus(statuses, 'Holiday').forEach(w => statusesGrouped.push(w));
      groupStatus(statuses, 'Sick').forEach(w => statusesGrouped.push(w));

      dispatch({
        type: RECEIVE_USERS,
        users: statusesGrouped
      });

    })
    .catch((err) => {
      dispatch({
        type: LOAD_USERS_FAIL,
        error: err
      });
    });
}

export function fetchStatusesOnInterval(dispatch) {

  const ref = setInterval(() => {
    getLatestStatuses(dispatch);
  }, INTERVAL);

  dispatch({
    type: REQUEST_INTERVAL_START,
    intervalRef: ref
  });

  return getLatestStatuses(dispatch);
}
