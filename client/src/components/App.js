import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import NavBar from './NavBar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../containers/Dashboard';
import UserList from '../containers/UserList';
import ProductsList from '../containers/ProductsList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/user-list" component={UserList} />
          <Route path="/product-list" component={ProductsList} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
