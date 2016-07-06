import AppDispatcher from '../dispatcher/AppDispatcher.js';
import { EventEmitter } from 'events';
import FinactConstants from '../constants/FinactConstants.js';

const CHANGE_EVENT = 'change';

let comments = [{
  author: 'Kinuthia',
  text: 'A commnet',
}, {
  author: 'Kinuthia',
  text: 'A commnet',
}];

const FinactStore = Object.assign({}, EventEmitter.prototype, {
  getAll() {
    return comments;
  },

  updateComments(data) {
    comments = data;
    this.emitChange();
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
});

AppDispatcher.register((action) => {
  switch (action.actionType) {
    case FinactConstants.FINACT_FETCH_COMMENTS:
      FinactStore.updateComments(action.data);
      break;
    default:
      console.log('Got to the end of switch');
  }
});

export default FinactStore;

