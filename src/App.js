import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

import CreateProject from './components/projects/CreateProject'
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
           <Route path="/signin" exact component={SignIn} />
           <Route path="/signup" exact component={SignUp} />
           <Route path="/create" exact component={CreateProject} />
           
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
