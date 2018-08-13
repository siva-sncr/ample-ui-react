import React, { Component } from 'react';

import Navigations from './navigation/navigations';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <Navigations />
                </nav>
            </header>
        );
    }
}

export default Header;