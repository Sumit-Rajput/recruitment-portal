import React, { useState, useEffect } from 'react';
import { getCandidatesData } from '../Api';

import './App.css';
import Routes from '../Routes';



const App = () => {
  const [ candidates, setCandidates ] = useState([]);

  const updateCandidateApplicationState = (id, newState) => {
    const newList = [ ...candidates ];
    const candidateToBeUpdated = newList.find(candidate => candidate.id === id);
    candidateToBeUpdated.state = newState;

    setCandidates(newList)
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCandidatesData();
      setCandidates(data);
    }
    fetchData();
  }, [])

  return (
    <Routes
      candidates={candidates}
      updateCandidateApplicationState={updateCandidateApplicationState}
    />
  );
}

export default App;
