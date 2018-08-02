import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import  LoginComponent  from './login/containers/login';
import  HomeComponent  from './home';

import ampleStore from './store';

class AmpleApp extends Component {
  render() {
    return (
        <Provider store={ampleStore}>
            <div>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/login" component={LoginComponent} />
                            <Route exact  path="/amplemanage" component={HomeComponent} />
                            <Route exact path="/" component={HomeComponent} />
                        </Switch>
                    </div>
                </Router>
            </div>
        </Provider>
    );
  }
}

export default AmpleApp;
