import { LOGIN } from '../constants/actionTypes';
import loginService from '../services/loginService';

export function loginUserSuccess(userData) {
  return { type: LOGIN, userData };
}

export function loginUser(email, password) {
  return dispatch => {
    loginService.getToken(dispatch, email, password).then((response) => {
      document.cookie = `loginSession=${response.data}`;
      return response;
    }).then((response) => {
      new Promise((resolve, reject) => {
        loginService.loginUser(dispatch, response.data).then((loginResponse) => {
          dispatch(loginUserSuccess(loginResponse.data));
          resolve(loginResponse.data);
        }, (error) => {
          reject(error);
        });
      });
    });
  };
}
