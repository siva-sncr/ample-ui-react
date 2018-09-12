import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import * as actionBuilder from "../actions";
import FormComponent from '../components/loginFormComponent';
import { getURL } from '../../providers/configProvider';

class LoginView extends Component {

  state = {
    username: '',
    password: '',
    loginURL: getURL('login', 'checkSession', [], true)
  };

  render() {
    return (
      <div className="login-view">
        <div className="login-content">
          <div className="login-wrap">
            <FormComponent
              loginURL={this.state.loginURL}
              username={this.state.username}
              password={this.state.password}
              changeUsername={(evt) => this.setState({ username: evt.target.value })}
              changePassword={(evt) => this.setState({ password: evt.target.value })}
              clicked={(evt) => evt.preventDefault & this.props.onLogIn(this.state)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loginData.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogIn: (state) => dispatch(actionBuilder.logIn(state))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginView));