import { connect } from 'react-redux';

import { emailFieldChange, passFieldChange, login } from '../actions/loginPageActions';
import LoginForm from '../components/LoginForm';

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
  handleLogin: (e) => {
    e.preventDefault();
    dispatch(login());
  }
});

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default Login;
