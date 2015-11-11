/* @flow */

import 'whatwg-fetch';

function JSONResponse(response) {
  try {
    return response.json();
  } catch (e) {
    throw new Error(e);
  }
}

export default {

  latestStatus(success, error) {
    fetch('https://pebblecode-wfh.herokuapp.com/workers')
      .then(JSONResponse)
      .then(success)
      .catch(error);
  }

};
