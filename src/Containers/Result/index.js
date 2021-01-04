import React from 'react';
import { List, Avatar, Typography } from 'antd';
import { withRouter } from 'react-router';
import { APPLICATION_STATE } from '../../constants'; 

const { Title } = Typography;

const Result = ({ candidates, location }) => {
  
  const state = location.pathname.replace('/', '');
  const pageTitle = state === APPLICATION_STATE.SHORTLISTED ? 'Shortlisted Candidates' : 'Rejected Candidates';
  const data = candidates.filter(candidate => candidate.state === state)
  
  return (
    <>
      <Title level={2}>{pageTitle}</Title>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={candidate => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={candidate.Image} />}
              title={candidate.name}
            />
          </List.Item>
        )}
      />
    </>
  );
}

export default withRouter(Result);
