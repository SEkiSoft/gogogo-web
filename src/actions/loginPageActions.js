import { EMAIL_FIELD_CHANGE, PASS_FIELD_CHANGE } from '../constants/actionTypes';

export const emailFieldChange = (email) => {
	console.log(email);
	return {
		type: EMAIL_FIELD_CHANGE,
		email
	}
}

export const passFieldChange = (password) => {
	console.log(password);
	return {
		type: PASS_FIELD_CHANGE,
		password
	}
}