import React, { Component } from 'react';

import Aux from './hoc/aux';
import SampleFilter from './containers/sampleFilters';

class MainContent extends Component{
    render(){
        return(
            // Auxillary higher order component help us to create uncessary html element. 
            <Aux>
                <h2>Main Content</h2>
                <SampleFilter />
            </Aux>
        );
    }
}

export default MainContent;