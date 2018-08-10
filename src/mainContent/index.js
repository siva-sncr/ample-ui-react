import React, { Component } from 'react';

import Aux from '../hoc/aux';
import SampleFilter from './containers/sampleFilters';
import SampleService from './containers/sampleService';

class MainContent extends Component{
    render(){
        return(
            // Auxillary higher order component help us to avoid creating uncessary html element. 
            <Aux>
                <h2>Main Content</h2>
                <SampleFilter />
                <SampleService />
            </Aux>
        );
    }
}

export default MainContent;