
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Pagination from "react-js-pagination";

class Products extends React.Component{
  constructor(){
    super();


    //json format
    this.dataObject = [
      {
        id: 1,
        name: 'NodeJS js',
        price : "10.0",
        tag:"UI",
        email:"UI@Setient",
        number:"US-12345"
      },
      {
        id: 2,
        name: 'React js',
        price : "15.0",
        tag:"UI",
        email:"UI@Setient",
        number:"US-12345"
      },
      {
        id: 3,
        name: 'Angular 1.x js' ,
        price : "10.0",
        tag:"UI",
        email:"UI@Setient",
        number:"US-12345"
      },
      {
        id: 4,
        name: 'Backbone js',
        price : "15.0",
        tag:"UI",
        email:"UI@Setient",
        number:"US-12345"
      },
      {
        id: 5,
        name: 'VU Js',
        price : "10.0",
        tag:"UI",
        email:"UI@Setient",
        number:"US-12345"
      },
      {
        id: 7,
        name: 'Extension Js',
        price : "15.0",
        tag:"UI",
        email:"UI@Setient",
        number:"US-12345"
      },
      {
        id: 8,
        name: 'Extension Js',
        price : "15.0",
        tag:"UI",
        email:"UI@Setient",
        number:"US-12345"
      },
      {
        id: 9,
        name: 'Extension Js',
        price : "15.0",
        tag:"UI",
        email:"UI@Setient",
        number:"US-12345"
      },
      {
        id: 10,
        name: 'Extension Js',
        price : "15.0",
        tag:"UI",
        email:"UI@Setient",
        number:"US-12345"
      }
    ]
  }

  render(){
    return (
      <div>

      <BootstrapTable data={ this.dataObject }striped
      hover>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
          <TableHeaderColumn dataField='tag'>Product Tag</TableHeaderColumn>
          <TableHeaderColumn dataField='email'>Product Email</TableHeaderColumn>
          <TableHeaderColumn dataField='number'>Product Number</TableHeaderColumn>
      </BootstrapTable>
      <Pagination
      itemsCountPerPage={10}
      totalItemsCount={20}
      pageRangeDisplayed={5}
      
    />
      </div>
     

      
    );
  }
}
export default Products
