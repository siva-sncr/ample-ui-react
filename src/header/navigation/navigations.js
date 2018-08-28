import React, { Component } from 'react';

import NavigationItem from './navigationItem';
import Aux from '../../hoc/aux';
import Menus from '../../config/menus.json';

class NavigationItems extends Component {

    render() {
        let menus = Menus.map(menu => { 
            return <NavigationItem link={`/${menu.link}`} exact>{menu.value}</NavigationItem> 
        })
        
        return (
            <Aux>
                {menus}
            </Aux >
        )
    }
}

export default NavigationItems;