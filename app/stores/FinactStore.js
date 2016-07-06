import AppDispatcher from '../dispatcher/AppDispatcher.js';
import { EventEmitter } from 'events';
import FinactConstants from '../constants/FinactConstants.js';

const CHANGE_EVENT = 'change';

let comments = [{
  author: 'Kinuthia',
  comment: 'A commnet',
}, {
  author: 'Kinuthia',
  comment: 'A commnet',
}];

const FinactStore = Object.assign({}, EventEmitter.prototype, {
  getAll() {
    return comments;
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
  switch (action.actionTYpe) {
    case FinactConstants.FINACT_GET_COMMENTS:
      console.log('Dispatcher called');
      FinactStore.emitChange();
      break;
    default:
      console.log('Got to the end of switch');
  }
});

export default FinactStore;

