import { TEST_ACTION } from '../constants/ActionTypes.js';

const initialState = {
  thisWorks: false
};

export default function AppState(state = initialState, action) {
  let newState = state;
  switch (action.type) {

  case TEST_ACTION:
    newState = {
      thisWorks: true
    };
    return newState;

  default:
    return state;
  }
}
