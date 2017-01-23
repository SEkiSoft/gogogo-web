import { connect } from 'react-redux';

import { emailFieldChange, passFieldChange } from '../actions/loginPageActions';
import LoginForm from '../components/LoginForm';

const mapStateToProps = (state) => {
  return {
    email: state.email,
    password: state.password
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateEmailInput: (e) => {
      dispatch(emailFieldChange(e.target.value));
    },
    updatePasswordInput: (e) => {
      dispatch(passFieldChange(e.target.value));
    }
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default Login;