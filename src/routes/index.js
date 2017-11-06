import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import Logout from "./Logout";

export default function getRoutes() {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/projects' component={Projects}/>
      <Route path='/logout' component={Logout} />
    </Switch>
  );
}
