import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Overview from '../containers/Overview/Overview';

class DashboardRoute extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/dashboard/overview" component={Overview} />
          <Redirect to="/dashboard/overview" />
        </Switch>
      </div>
    );
  }
}

export default DashboardRoute;
