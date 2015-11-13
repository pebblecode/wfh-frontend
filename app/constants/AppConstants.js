import pkg from '../../package';

export const DEBUG = (process.env.NODE_ENV !== 'production');
export const APP_TITLE = pkg.name;
export const NAVIGATION_UPDATED = 'NAVIGATION_UPDATED';

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const LOAD_USERS_FAIL = 'LOAD_USERS_FAIL';
export const REQUEST_LOAD_USERS = 'REQUEST_LOAD_USERS';
