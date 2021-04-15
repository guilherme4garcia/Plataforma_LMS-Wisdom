import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import LandingPage from '../pages/LandingPage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import StudentDashboard from '../pages/StudentDashboard';
import TeacherDashboard from '../pages/TeacherDashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />

      <Route
        path="/student/dashboard"
        component={StudentDashboard} /* isPrivate */
      />
      <Route
        path="/teacher/dashboard"
        component={TeacherDashboard} /* isPrivate */
      />
    </Switch>
  );
}
