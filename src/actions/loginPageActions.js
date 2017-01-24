import { EMAIL_FIELD_CHANGE, PASS_FIELD_CHANGE, LOGIN } from '../constants/actionTypes';

export const emailFieldChange = email => ({
  type: EMAIL_FIELD_CHANGE,
  email
});

export const passFieldChange = password => ({
  type: PASS_FIELD_CHANGE,
  password
});

export const login = () => ({
  type: LOGIN
});
