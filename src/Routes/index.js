import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PATHS from './paths';
import Home from '../Containers/Home';
import CandidateDetails from '../Containers/CandidateDetails';
import Result from '../Containers/Result';

const Routes = ({ candidates, updateCandidateApplicationState }) => (
  <Switch>
    <Route exact path={PATHS.HOME_URL}>
      <Home candidates={candidates}/>
    </Route>
    <Route exact path={PATHS.SHORTLISTED}>
      <Result candidates={candidates}/>
    </Route>
    <Route exact path={PATHS.REJECTED}>
      <Result candidates={candidates}/>
    </Route>
    <Route exact path={PATHS.CANDIDATES_DETAILS}>
      <CandidateDetails 
        candidates={candidates}
        updateCandidateApplicationState={updateCandidateApplicationState}
      />
    </Route>
    <Redirect from="/*" to={PATHS.HOME_URL} />
  </Switch>
);

export default Routes;
