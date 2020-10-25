import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar /> 
        <Switch>
           <Route path="/" exact component={Dashboard}/>
           <Route path="/project/:id" exact component={ProjectDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
