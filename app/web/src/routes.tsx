// import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Tool from './pages/Tool';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/tool' component={Tool} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
