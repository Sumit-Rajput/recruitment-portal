import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PATHS from './paths';
import Home from '../Containers/Home';
import CandidateDetails from '../Containers/CandidateDetails';
import Result from '../Containers/Result';

const Routes = ({ candidates, updateCandidateApplicationState }) => (
  <Router>
    <Switch>
      <Route exact path={PATHS.HOME_URL}>
        <Home candidates={candidates}/>
      </Route>
      <Route path={PATHS.CANDIDATES_DETAILS}>
        <CandidateDetails 
          candidates={candidates}
          updateCandidateApplicationState={updateCandidateApplicationState}
        />
      </Route>
      <Route path={PATHS.SHORTLISTED} component={Result} />
      <Route path={PATHS.REJECTED} component={Result} />
      <Redirect from="/*" to={PATHS.HOME_URL} />
    </Switch>
  </Router>
);

export default Routes;
