import React, { useState, useEffect } from 'react';
import { getCandidatesData } from '../Api';

import './App.css';
import Routes from '../Routes';

const App = () => {
  const [ candidates, setCandidates ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCandidatesData();
      setCandidates(data);
    }

    fetchData();
  }, [])

  return <Routes candidates={candidates} />;
}

export default App;
