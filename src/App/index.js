import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './App.css';
import { getCandidatesData } from '../Api';
import Routes from '../Routes';

const { Header, Content } = Layout;

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
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            <Link to="/">Recruitment</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', height: 'calc(100vh - 60px)' }}>
        <Routes
          candidates={candidates}
          updateCandidateApplicationState={updateCandidateApplicationState}
        />
      </Content>
    </Layout>
  );
}

export default App;
