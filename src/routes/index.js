import React from 'react';
import { Switch } from 'react-router-dom';
import Route from '~/routes/Route';
import SignIn from '~/pages/SignIn';
import Profile from '~/pages/Profile';
import Military from '~/pages/Military';
import AddMilitary from '~/pages/Military/Add';
import Treatment from '~/pages/Treatment';
import AddTreatment from '~/pages/Treatment/Add';
import EditMilitary from '~/pages/Military/Edit';
import Users from '~/pages/Users';
import AddUser from '~/pages/Users/Add';
import EditUser from '~/pages/Users/Edit';
import Reports from '~/pages/Reports';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/militaries" component={Military} isPrivate />
      <Route path="/treatment/:id" component={Treatment} isPrivate />
      <Route path="/add_treatment/:id" component={AddTreatment} isPrivate />
      <Route path="/add_militaries" component={AddMilitary} isPrivate />
      <Route path="/edit_militaries/:id" component={EditMilitary} isPrivate />
      <Route path="/users" component={Users} isPrivate />
      <Route path="/add_users" component={AddUser} isPrivate />
      <Route path="/edit_users/:id" component={EditUser} isPrivate />
      <Route path="/reports" component={Reports} isPrivate />
    </Switch>
  );
}
