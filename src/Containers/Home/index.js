import React, { useState, useEffect } from 'react';
import { Avatar, Card, Input, Button, List } from 'antd';
import { withRouter } from 'react-router';
import './Home.css';
import PATHS from '../../Routes/paths'

const { Search } = Input;
const { Meta } = Card;

const Home = ({ candidates, history }) => {
  const [searchedText, updateSearchedText] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const list = candidates.filter(
      candidate => candidate.name.toLowerCase().includes(searchedText.toLowerCase())
    );
    setFilteredList(list)
  }, [candidates, searchedText])

  return (
    <>
      <Search
        placeholder="Enter Candidate Name"
        allowClear
        enterButton="Search"
        size="large"
        style={{ width: 320, margin: '10px 10px' }}
        onSearch={(text) => updateSearchedText(text)}
      />

      <Button 
        type="primary"
        style={{ height: 40, margin: '10px 10px' }}
        onClick={() => history.push(PATHS.SHORTLISTED)}
      >
        Shortlisted Candidates
      </Button>
      <Button 
        type="primary"
        style={{ height: 40, margin: '10px 10px' }}
        onClick={() => history.push(PATHS.REJECTED)}
      >
        Rejected Candidates
      </Button>

      <List 
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }}
        dataSource={filteredList}
        renderItem={candidate => (
          <List.Item>
            <Card onClick={() => history.push(`/${candidate.id}`)} style={{ width: 230, marginTop: 16 }} hoverable>
              <Meta
                avatar={
                  <Avatar src={candidate.Image} />
                }
                title={candidate.name}
              />
            </Card>
          </List.Item>
        )}
      />
    </>
  );
}

export default withRouter(Home);
