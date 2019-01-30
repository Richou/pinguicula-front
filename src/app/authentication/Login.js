import React from 'react';
import './Login.scss';
import Button from "@material-ui/core/es/Button/Button";
import isEmail from 'validator/lib/isEmail';
import {InputField} from "../../components/forms/input-field/InputField";
import {doLogin} from './AuthenticationService';
import {setToken} from '../../utils/SessionUtils';
import {withRouter} from "react-router";
import {HOME_ROUTE} from "../PinguiculaRoutes";
import {toast, ToastContainer} from "react-toastify";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: null,
      passwordError: null
    }
  }

  changedHandler = (event, hasError) => {
    this.setState({
      [event.target.name]: event.target.value,
      [`${event.target.name}Error`]: hasError
    });
  };

  onSubmitForm = async event => {
    event.preventDefault();
    try {
      const {token} = await doLogin({email: this.state.email, password: this.state.password});
      setToken(token);
      this.props.history.push(HOME_ROUTE.url);
    } catch (error) {
      toast.error("Bad Credentials !");
    }

  };

  render() {
    return (
      <div className="login-container">
        <h1>Connection</h1>
        <form name="loginForm" onSubmit={this.onSubmitForm}>
          <InputField label="Email" type="email" name="email" isValid={isEmail} error={this.state.emailError} onChange={this.changedHandler}/>
          <InputField label="Password" type="password" name="password" isValid={text => text !== ''} error={this.state.passwordError} onChange={this.changedHandler}/>
          <Button className="login-action" type="submit" variant="contained" disabled={this.state.emailError === null || this.state.emailError || this.state.passwordError === null || this.state.passwordError} color="primary">Se connecter</Button>
        </form>
        <ToastContainer/>
      </div>
    );
  }
}

export default withRouter(Login);
