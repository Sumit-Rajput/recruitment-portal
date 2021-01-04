import React from 'react';
import { Row, Col, Avatar, Card, Input } from 'antd';
import './Home.css';
import { withRouter } from "react-router";

const { Search } = Input;

const { Meta } = Card;

const Home = ({ candidates, history }) => {
  console.log(candidates)
  return (
    <>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        style={{ width: 320, margin: '10px 10px' }}
        onSearch={(text) => console.log(text)}
      />
      <Row gutter={[16, 24]}>
        {
          candidates.map(candidate => (
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
