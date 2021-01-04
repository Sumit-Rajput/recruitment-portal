import React, { useMemo } from 'react';
import { withRouter } from 'react-router';
import { Image, Typography, Button } from 'antd';
import { APPLICATION_STATE } from '../../constants'; 

const { Text } = Typography;

const CandidateDetails = ({ 
  candidates,
  updateCandidateApplicationState,
  match,
  history,
}) => {
  const {id} = match.params;

  const matchedCandidate = useMemo(
    () => candidates.find(candidate => candidate.id === id), [candidates, id]
  );

  const goBack = () => {
    history.push('/')
  }

  const selected = () => {
    updateCandidateApplicationState(matchedCandidate.id, APPLICATION_STATE.SELECTED);
    goBack();
  }

  const rejected = () => {
    updateCandidateApplicationState(matchedCandidate.id, APPLICATION_STATE.REJECTED);
    goBack();
  }

  const isSelected = matchedCandidate && matchedCandidate.state !== APPLICATION_STATE.SELECTED;
  const isRejected = matchedCandidate && matchedCandidate.state !== APPLICATION_STATE.REJECTED;

  return (
    <div>
      {
        matchedCandidate ? 
        (
          <>
            <Image width={200} src={matchedCandidate.Image}/>
            <Text strong>{matchedCandidate.name}</Text>
            {isSelected && <Button type="primary" onClick={selected}>Selected</Button>}
            {isRejected && <Button danger type="primary" onClick={rejected}>Rejected</Button>}
          </>
        ) :
        <Text strong>No User Found!</Text>
      }
      <Button onClick={goBack}>Go Back</Button>
    </div>
  );
}

export default withRouter(CandidateDetails);
