import React, { useMemo } from 'react';
import { withRouter } from 'react-router';
import { Image, Typography, Button, Space } from 'antd';
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

  const shortlisted = () => {
    updateCandidateApplicationState(matchedCandidate.id, APPLICATION_STATE.SHORTLISTED);
    goBack();
  }

  const rejected = () => {
    updateCandidateApplicationState(matchedCandidate.id, APPLICATION_STATE.REJECTED);
    goBack();
  }

  const isShortlisted = matchedCandidate && matchedCandidate.state !== APPLICATION_STATE.SHORTLISTED;
  const isRejected = matchedCandidate && matchedCandidate.state !== APPLICATION_STATE.REJECTED;

  return (
    <div>
      {
        matchedCandidate ? 
        (
          <Space style={{ margin: 10 }}>
            <Image width={200} src={matchedCandidate.Image}/>
            <Space size="large">
              <Text strong>{matchedCandidate.name}</Text>
              {isShortlisted && <Button type="primary" onClick={shortlisted}>Shortlist</Button>}
              {isRejected && <Button danger type="primary" onClick={rejected}>Reject</Button>}
            </Space>
          </Space>
        ) :
        <Text strong>No User Found!</Text>
      }
    </div>
  );
}

export default withRouter(CandidateDetails);
