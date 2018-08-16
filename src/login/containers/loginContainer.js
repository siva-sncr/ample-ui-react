import React, { Component } from "react";
import { connect } from 'react-redux';

import "../css/login.css";
import * as actionBuilder from "../actions/loginActionsBuilder";
import FormComponent from '../components/loginFormComponent';

class LoginView extends Component {

  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <div className="login-view">
        <div className="login-content">
          <div className="login-wrap">
            <FormComponent
              username={this.state.username}
              password={this.state.password}
              changeUsername={(evt) => this.setState({ username: evt.target.value })}
              changePassword={(evt) => this.setState({ password: evt.target.value })}
              clicked={(evt) => evt.preventDefault & this.props.logIn(this.state)}
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
    logIn: (state) => dispatch(actionBuilder.logIn(state))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);