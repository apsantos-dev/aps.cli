// import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Tools from './pages/Tools';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/tools' component={Tools} />
        <Route path='/tools/:id' component={Tools} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
