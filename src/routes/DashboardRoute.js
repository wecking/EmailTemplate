import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import DashboardSidebar from '../common/DashboardSidebar/DashboardSidebar';
import DashboardHeader from '../common/DashboardHeader/DashboardHeader';

import './DashboardRoute.scss';

import asyncComponent from '../hoc/asyncComponent';

const AsyncOverview = asyncComponent(() => {
  return import('../containers/Overview/Overview');
});

const AsyncTemplate = asyncComponent(() => {
  return import('../containers/Template/Template');
});

const AsyncCreateTemplate = asyncComponent(() => {
  return import('../containers/CreactTemplate/CreateTemplate');
});

class DashboardRoute extends Component {
  render() {
    return (
      <div className="dasboard-body">
        <DashboardSidebar />
        <DashboardHeader />
        <section id="content-area">
          <Switch>
            <Route path="/dashboard/overview" component={AsyncOverview} />
            <Route
              exact
              path="/dashboard/template/create"
              component={AsyncCreateTemplate}
            />
            <Route path="/dashboard/template" component={AsyncTemplate} />
            <Redirect to="/dashboard/overview" />
          </Switch>
        </section>
      </div>
    );
  }
}

export default DashboardRoute;
