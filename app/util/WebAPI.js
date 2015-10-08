/* @flow */

import 'whatwg-fetch';

function JSONResponse(response) {
  try {
    return response.json();
  } catch(e) {
    console.log('error decoding json');
    throw new Error(e);
  }
}

export default {

  latestStatus(success, error) {
    fetch('http://wfh2.pebblecode.net/workers')
      .then(JSONResponse)
      .then(success)
      .catch(error);
  }

};
