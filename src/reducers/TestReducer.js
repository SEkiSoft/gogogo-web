import { EMAIL_FIELD_CHANGE, PASS_FIELD_CHANGE, LOGIN } from '../constants/actionTypes';

const initialState = {
  email: "",
  password: ""
};

export default function AppState(state = initialState, action) {
  switch (action.type) {
    case EMAIL_FIELD_CHANGE:
      console.log(action.email);
      return state;

    case PASS_FIELD_CHANGE:
      console.log(action.password);
      return state;


    case LOGIN:

    default:
      return state;
    }
}
