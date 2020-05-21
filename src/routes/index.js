import React from 'react';
import { Switch } from 'react-router-dom';
import Route from '~/routes/Route';
import SignIn from '~/pages/SignIn';
import Military from '~/pages/Military';
import Users from '~/pages/Users';
import Reports from '~/pages/Reports';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/militaries" component={Military} isPrivate />
      <Route path="/users" component={Users} isPrivate />
      <Route path="/reports" component={Reports} isPrivate />
    </Switch>
  );
}
