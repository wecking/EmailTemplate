import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import asyncComponent from '../hoc/asyncComponent';

const AsyncOverview = asyncComponent(() => {
  return import('../containers/Overview/Overview');
});

class DashboardRoute extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/dashboard/overview" component={AsyncOverview} />
          <Redirect to="/dashboard/overview" />
        </Switch>
      </div>
    );
  }
}

export default DashboardRoute;
