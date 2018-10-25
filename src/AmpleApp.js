import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './home';
import ampleStore from './store';
import './resources/css/helpers.css';
import './resources/css/overrides.css';
import './resources/css/bootstrap-multiselect.css';

class AmpleApp extends Component {
    render() {
        return (
            <Provider store={ampleStore}>
                <Router>
                    <Home />
                </Router>
            </Provider>
        );
    }
}
export default AmpleApp;

