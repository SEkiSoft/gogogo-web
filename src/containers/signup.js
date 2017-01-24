import { connect } from 'react-redux';

import SignupForm from '../components/SignupForm';
import { emailFieldChange, passFieldChange } from '../actions/loginPageActions';
import { userFieldChange, signup } from '../actions/signupPageActions';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  updateEmailInput: (e) => {
    dispatch(emailFieldChange(e.target.value));
  },
  updatePasswordInput: (e) => {
    dispatch(passFieldChange(e.target.value));
  },
  updateUserInput: (e) => {
    dispatch(userFieldChange(e.target.value));
  },
  handleSignup: (e) => {
    e.preventDefault();
    dispatch(signup());
  }
});

const Signup = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);

export default Signup;

