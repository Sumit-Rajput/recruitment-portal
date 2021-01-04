import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PATHS from './paths';
import Home from '../Containers/Home';
import CandidateDetails from '../Containers/CandidateDetails';
import Result from '../Containers/Result';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={PATHS.HOME_URL} component={Home} />
      <Route path={PATHS.CANDIDATES_DETAILS} component={CandidateDetails} />
      <Route path={PATHS.SHORTLISTED} component={Result} />
      <Route path={PATHS.REJECTED} component={Result} />
      <Redirect from="/*" to={PATHS.HOME_URL} />
    </Switch>
  </Router>
);

export default Routes;
