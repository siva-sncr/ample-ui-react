import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
class WatchlistComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let list = this.props.data;
        const tifOptionsES6 = Object.keys(list);
        return(
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                       {tifOptionsES6}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    </tr>
                </tbody>
                </Table>
        );
    }
}

export default WatchlistComponent;