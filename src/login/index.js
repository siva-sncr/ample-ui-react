import React, { Component } from "react";
import { Form, Button, FormGroup, FormControl } from "react-bootstrap";
import "./Login.css";
import { connect } from 'react-redux';
import { loginActions } from '../actions';
import { bindActionCreators } from 'redux';

export class LoginComponent extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
      };
    }
    
    handleUsernameChange = (evt) => {
      this.setState({ username: evt.target.value });
    }
    
    handlePasswordChange = (evt) => {
      this.setState({ password: evt.target.value });
    }

    canBeSubmitted() {
      const { username, password } = this.state;
      return (
        username.length > 0 &&
        password.length > 0
      );
    }
  render() {
    const loginURL = 'https://172.18.2.45/ample/j_spring_security_check';
    const isEnabled = this.canBeSubmitted();
    return (
        <div className="login-view">
            <div className="login-content">
                <div className="login-wrap">
                    <Form horizontal action={ loginURL } method="POST">
                        <h3 className="login-title">Grid Analytics System</h3>
                        <FormGroup controlId="formHorizontalEmail">
                            <FormControl 
                            type="input"
                            name="j_username"
                            value={this.state.username}
                            onChange={this.handleUsernameChange}
                            placeholder="Username" />
                        </FormGroup>
                        
                        <FormGroup controlId="formHorizontalPassword">
                            <FormControl 
                            type="password" 
                            name="j_password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            placeholder="Password" />
                        </FormGroup>
                        
                        <FormGroup>
                             <Button 
                              disabled={!isEnabled}
                              type="submit"
                              block 
                              bsStyle="warning">
                              Login
                            </Button>
                        </FormGroup>
                        <Button bsStyle="link">Forgot Password ?</Button>
                    </Form>
                </div>
            </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    loggedinData : state
  }
}

function mapDispatchToPostsProps(dispatch){
	const actions = bindActionCreators(loginActions, dispatch);
	return actions;
}

export default connect(mapStateToProps, mapDispatchToPostsProps)(LoginComponent);