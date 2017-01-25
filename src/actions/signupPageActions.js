import { USER_FIELD_CHANGE, SIGNUP } from '../constants/actionTypes';

export const userFieldChange = username => ({
  type: USER_FIELD_CHANGE,
  username
});

export const signup = () => ({
  type: SIGNUP
});
