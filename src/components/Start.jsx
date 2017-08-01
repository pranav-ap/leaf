import React from 'react';
import { connect } from 'react-redux';

import { startSignup, startLogin } from 'authActions';

export class Start extends React.Component {
  onLogin(e) {
    e.preventDefault();
    const { dispatch } = this.props;

    const email = this.refs.email.value;
    const password = this.refs.password.value;

    dispatch(startLogin(email, password));
  }

  onSignup(e) {
    e.preventDefault();
    const { dispatch } = this.props;

    const email = this.refs.email.value;
    const password = this.refs.password.value;

    dispatch(startSignup(email, password));
  }

  render() {
    return (
      <div id='start'>
        <div id='header'>
          <p><i className="fa fa-leaf" aria-hidden="true" />&nbsp;&nbsp;Kraken</p>
        </div>
        <div id='form'>
          <input type="email" ref="email" placeholder="Enter email address" autoFocus />
          <input type="password" ref="password" placeholder="Password" />
          <div id='button-group'>
            <button id='login' onClick={this.onLogin.bind(this)}>Login</button>
            <button id='signup' onClick={this.onSignup.bind(this)}>Signup</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Start);
