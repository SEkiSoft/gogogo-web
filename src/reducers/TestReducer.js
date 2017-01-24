import { EMAIL_FIELD_CHANGE, PASS_FIELD_CHANGE, LOGIN, USER_FIELD_CHANGE, SIGNUP } from '../constants/actionTypes';

const initialState = {
  email: "",
  password: "",
  username: ""
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

  case USER_FIELD_CHANGE:
    return Object.assign({}, state, {
      username: action.username
    });

  case LOGIN:
    // Make server call for authentication
    // console.log(state.email, state.password);
    return state;

  case SIGNUP:
    // Make server call for signing up
    return state;

  default:
    return state;
  }
}
