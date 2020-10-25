import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar /> 
        <Switch>
           <Route path="/" exact component={Dashboard}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
