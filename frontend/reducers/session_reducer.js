import {RECEIVE_CURRENT_USER, RECEIVE_LOGOUT_SUCCESS, RECEIVE_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      const errors = []
      return merge({}, {currentUser, errors});
    default:
      return state;
  }
};

export default sessionReducer;
