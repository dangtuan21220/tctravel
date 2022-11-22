import React from 'react';
import Header from 'app/components/Header/Header';
import Styled from './styled';
import { Breadcrumb, Button, Card, Col, Row } from 'antd';
import { ClockCircleOutlined, HomeOutlined } from '@ant-design/icons';
const { Meta } = Card;

function Collection() {
  return (
    <Styled.Container>
      <Header />
      <Row justify="center">
        <Col span={19}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Bộ sưu tập</Breadcrumb.Item>
          </Breadcrumb>
          <Button type="primary" size="large" style={{ marginTop: '20px' }}>
            Thêm mới
          </Button>
          <div className="title">
            <h4>Hà Nội</h4>
          </div>
          <Row gutter={[16, 16]} className="list-collection">
            <Col span={6}>
              <Card
                hoverable
                bordered={false}
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://thuthuatnhanh.com/wp-content/uploads/2021/06/Hinh-anh-Ho-Guom.jpg"
                  />
                }
              >
                <Meta
                  title="Hồ Hoàn Kiếm"
                  description={
                    <div className="time">
                      <ClockCircleOutlined /> 16/09/2022
                    </div>
                  }
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                bordered={false}
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://cuulongreal.com/wp-content/uploads/2021/11/lang-bac-o-dau-hinh-anh-lang-bac-ho-10.jpg"
                  />
                }
              >
                <Meta
                  title="Lăng Bác"
                  description={
                    <div className="time">
                      <ClockCircleOutlined /> 18/09/2022
                    </div>
                  }
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                bordered={false}
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://media.laodong.vn/Storage/NewsPortal/2021/11/29/978882/PHONG-TOA-CONG-VIEN-.jpg"
                  />
                }
              >
                <Meta
                  title="Công viên Thống Nhất"
                  description={
                    <div className="time">
                      <ClockCircleOutlined /> 19/09/2022
                    </div>
                  }
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                bordered={false}
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://hanoi1000.vn/wp-content/uploads/2019/09/ho-tay-ha-noi-thumbnail.jpg"
                  />
                }
              >
                <Meta
                  title="Hồ Tây"
                  description={
                    <div className="time">
                      <ClockCircleOutlined /> 20/09/2022
                    </div>
                  }
                />
              </Card>
            </Col>
          </Row>
          <div className="title">
            <h4>Phú Quốc</h4>
          </div>
          <Row gutter={[16, 16]} className="list-collection">
            <Col span={6}>
              <Card
                hoverable
                bordered={false}
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1638779024/blog/hhp7rkbhupdksxqg6kgq.webp"
                  />
                }
              >
                <Meta
                  title="Grand World Phú Quốc"
                  description={
                    <div className="time">
                      <ClockCircleOutlined /> 30/10/2022
                    </div>
                  }
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                bordered={false}
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1638779043/blog/drbsptcof2mzrqcc0rr5.webp"
                  />
                }
              >
                <Meta
                  title="Công Viên San Hô Namaste Phú Quốc"
                  description={
                    <div className="time">
                      <ClockCircleOutlined /> 30/10/2022
                    </div>
                  }
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                bordered={false}
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1638779058/blog/lolgdtwbvgi9akoybswp.webp"
                  />
                }
              >
                <Meta
                  title="Sunset Sanato Phú Quốc"
                  description={
                    <div className="time">
                      <ClockCircleOutlined /> 31/10/2022
                    </div>
                  }
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                bordered={false}
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1596025051/blog/urx88hwboebwkdp5zabs.webp"
                  />
                }
              >
                <Meta
                  title="VinWonders Phú Quốc"
                  description={
                    <div className="time">
                      <ClockCircleOutlined /> 31/10/2022
                    </div>
                  }
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Styled.Container>
  );
}

export default Collection;
