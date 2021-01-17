import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Ranking from './pages/Ranking';
import Pontuation from './pages/Pontuation';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} exact/>
        <Route path="/ranking" component={Ranking} />
        <Route path="/pontuacao" component={Pontuation} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
