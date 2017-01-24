import { EMAIL_FIELD_CHANGE, PASS_FIELD_CHANGE, LOGIN } from '../constants/actionTypes';

const initialState = {
  email: '',
  password: ''
};

export default function AppState(state = initialState, action) {
  switch (action.type) {
  case EMAIL_FIELD_CHANGE:
    return Object.assign({}, state, {
      email: action.email
    });

  case PASS_FIELD_CHANGE:
    return Object.assign({}, state, {
      password: action.password
    });

  case LOGIN:
    // Make server call for authentication
    // console.log(state.email, state.password);
    return state;

  default:
    return state;
  }
}
