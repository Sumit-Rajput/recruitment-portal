import React, { useState, useEffect } from 'react';
import { Row, Col, Avatar, Card, Input } from 'antd';
import { withRouter } from 'react-router';
import './Home.css';

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
      <Row gutter={[16, 24]}>
        {
          filteredList.map(candidate => (
            <Col key={candidate.id} className="gutter-row" span={6}>
              <Card onClick={() => history.push(`/${candidate.id}`)} style={{ width: 250, marginTop: 16 }} hoverable>
                <Meta
                  avatar={
                    <Avatar src={candidate.Image} />
                  }
                  title={candidate.name}
                />
              </Card>
            </Col>
          ))
        }
        </Row>
      </>
  );
}

export default withRouter(Home);
