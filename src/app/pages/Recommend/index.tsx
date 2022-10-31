import React from 'react';
import Header from 'app/components/Header/Header';
import Styled from './styled';
import { Breadcrumb, Col, Row } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

function Recommend() {
  return (
    <Styled.Container>
      <Header />
      <Row justify="center">
        <Col span={19}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Gợi ý</Breadcrumb.Item>
          </Breadcrumb>

          <div className="title">
            <h3>Gợi ý địa điểm du lịch</h3>
          </div>
        </Col>
      </Row>
    </Styled.Container>
  );
}

export default Recommend;
