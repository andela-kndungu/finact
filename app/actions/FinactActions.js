import AppDispatcher from '../dispatcher/AppDispatcher.js';
import FinactConstants from '../actions/FinactActions.js';

const FinactActions = {
  get() {
    AppDispatcher.dispatch({
      actionTYpe: FinactConstants.FINACT_GET_COMMENTS,
    });
  },
};

export default FinactActions;

