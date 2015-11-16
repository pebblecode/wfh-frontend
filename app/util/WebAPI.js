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

  latestStatus() {
    return fetch(`${API_URL}/workers`)
      .then(JSONResponse);
  }

};
