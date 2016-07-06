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
};

export default FinactActions;

