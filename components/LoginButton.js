import React, { Component } from 'react';
import LoginMutation from './mutations/LoginMutation';
import environment from './Environment';

class LoginButton extends Component {
  handleLogin = () => {
    LoginMutation.commit(environment, 'kiwicomtester@gmail.com', 'bflmpsvz');
  };
  render() {
    return <button onClick={this.handleLogin}>Login</button>;
  }
}

export default LoginButton;
