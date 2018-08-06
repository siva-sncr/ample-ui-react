import deviceRoutes from './devicemanagement/routes';
import dashRoutes from './dashboard/routes';
import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import  HomeComponent  from '../home';

const allRoutes = {
      "deviceRoutes": deviceRoutes,
      "dashRoutes":dashRoutes
}

 
export default allRoutes;