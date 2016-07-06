import AppDispatcher from '../dispatcher/AppDispatcher.js';
import FinactConstants from '../constants/FinactConstants.js';
import request from 'superagent';

const FinactActions = {
  fetch(url) {
    request
      .get(url)
      .end((error, result) => {
        AppDispatcher.dispatch({
          actionType: FinactConstants.FINACT_FETCH_COMMENTS,
          data: result.body,
        });
      });
  },

  post(url, data) {
    console.log(data);
    console.log(url);
    request
      .post(url)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .type('json')
      .send(data)
      .end((error, result) => {
        console.log(result);
      });
  },
};

export default FinactActions;

