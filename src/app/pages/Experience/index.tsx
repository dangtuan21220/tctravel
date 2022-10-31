import React from 'react';
import Header from 'app/components/Header/Header';
import Styled from './styled';
import { Breadcrumb, Card, Col, Row } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const { Meta } = Card;

function Experience() {
  return (
    <Styled.Container>
      <Header />
      <Row justify="center">
        <Col span={19}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Kinh nghiệm</Breadcrumb.Item>
          </Breadcrumb>
          <div className="title">
            <h4>Top địa điểm trong nước</h4>
          </div>
          <Row gutter={[16, 16]} className="first">
            <Col span={8}>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/10/canh-dep-sapa.jpg"
                  />
                }
              >
                <Meta
                  title="[Update 2022] Kinh nghiệm du lịch Sapa từ dân thổ địa"
                  description={
                    <div className="author">
                      BY <span className="author-name">KIM OANH</span>
                    </div>
                  }
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://baoquocte.vn/stores/news_dataimages/tranlieu/092021/24/10/1646_phu-quoc_optimized.jpg?rt=20210924101647"
                  />
                }
              >
                <Meta
                  title="Kinh nghiệm du lịch Phú Quốc lặn biển ngắm san hô, ăn hải sản no nê"
                  description={
                    <div className="author">
                      BY <span className="author-name">MAI CHI</span>
                    </div>
                  }
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://dulich9.com/wp-content/uploads/2019/05/Kinh-nghiem-du-lich-Ha-Noi-tu-tuc-1-768x526.jpg"
                  />
                }
              >
                <Meta
                  title="Kinh nghiệm du lịch Hà Nội đi đâu chơi, ăn đặc sản gì ngon?"
                  description={
                    <div className="author">
                      BY <span className="author-name">NGA NGUYỄN</span>
                    </div>
                  }
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]} className="second">
            <Col span={6}>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://dulich9.com/wp-content/uploads/2019/05/kinh-nghiem-du-lich-hue-1-300x225.webp"
                  />
                }
              >
                <Meta
                  title="Tổng hợp kinh nghiệm du lịch Huế tự túc 2022 vui, trải nghiệm"
                  description={
                    <div className="author">
                      BY <span className="author-name">NGA NGUYỄN</span>
                    </div>
                  }
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://dulich9.com/wp-content/uploads/2019/02/kinh-nghiem-du-lich-tam-dao-1-300x288.webp"
                  />
                }
              >
                <Meta
                  title="Kinh nghiệm du lịch Tam Đảo vui chơi thả ga, không lo về giá"
                  description={
                    <div className="author">
                      BY <span className="author-name">MAI CHI</span>
                    </div>
                  }
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://dulich9.com/wp-content/uploads/2019/02/kinh-nghiem-du-lich-ha-long-9-300x225.webp"
                  />
                }
              >
                <Meta
                  title="Kinh nghiệm du lịch Hạ Long 2022 tự túc mới nhất, chi tiết nhất"
                  description={
                    <div className="author">
                      BY <span className="author-name">MAI CHI</span>
                    </div>
                  }
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://dulich9.com/wp-content/uploads/2019/05/kinh-nghiem-du-lich-sai-gon-2-300x195.webp"
                  />
                }
              >
                <Meta
                  title="Kinh nghiệm du lịch Sài Gòn 2022 đi thế nào, ở đâu, ăn chơi gì?"
                  description={
                    <div className="author">
                      BY <span className="author-name">MAI CHI</span>
                    </div>
                  }
                />
              </Card>
            </Col>

            <Col span={6}>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://dulich9.com/wp-content/uploads/2019/05/kinh-nghiem-du-lich-hoi-an-2-300x278.webp"
                  />
                }
              >
                <Meta
                  title="Kinh nghiệm du lịch Hội An tự túc 2022 đầy đủ không thiếu gì"
                  description={
                    <div className="author">
                      BY <span className="author-name">NGA NGUYỄN</span>
                    </div>
                  }
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://dulich9.com/wp-content/uploads/2019/02/Kinh-nghiem-du-lich-Da-Lat-tu-tuc-Da-Lat-thang-2-co-gi-e1609724079401.jpg"
                  />
                }
              >
                <Meta
                  title="Kinh nghiệm du lịch Đà Lạt lần đầu 2022 chi tiết như dân bản địa"
                  description={
                    <div className="author">
                      BY <span className="author-name">MAI CHI</span>
                    </div>
                  }
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://dulich9.com/wp-content/uploads/2019/05/kinh-nghiem-du-lich-ha-giang-2-300x225.webp"
                  />
                }
              >
                <Meta
                  title="Kinh nghiệm du lịch Hà Giang đi phố cổ, chợ phiên và ăn đặc sản"
                  description={
                    <div className="author">
                      BY <span className="author-name">MAI CHI</span>
                    </div>
                  }
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src="https://dulich9.com/wp-content/uploads/2019/02/kinh-nghiem-du-loch-da-nang-0.webp"
                  />
                }
              >
                <Meta
                  title="Kinh nghiệm du lịch Đà Nẵng tự túc 2022 không thể chi tiết hơn"
                  description={
                    <div className="author">
                      BY <span className="author-name">MAI CHI</span>
                    </div>
                  }
                />
              </Card>
            </Col>
          </Row>
          <div className="title">
            <h4>Top địa điểm du lịch nước ngoài</h4>
            <Row gutter={[40, 16]} className="third">
              <Col span={8}>
                <Card
                  hoverable
                  style={{ width: '100%' }}
                  cover={
                    <img
                      alt="example"
                      src="https://dulich9.com/wp-content/uploads/2019/02/kinh-nghiem-du-lich-bangkok-5.webp"
                    />
                  }
                >
                  <Meta
                    title="Kinh nghiệm du lịch Bangkok tự túc 2022 kèm lịch trình 3N3Đ"
                    description={
                      <div className="author">
                        BY <span className="author-name">KIM OANH</span>
                      </div>
                    }
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  hoverable
                  style={{ width: '100%' }}
                  cover={
                    <img
                      alt="example"
                      src="https://dulich9.com/wp-content/uploads/2019/05/kinh-nghiem-du-lich-malaysia-21-1.webp"
                    />
                  }
                >
                  <Meta
                    title="Kinh nghiệm du lịch Malaysia tự túc 2022 đi lại, ăn chơi gì?"
                    description={
                      <div className="author">
                        BY <span className="author-name">MAI CHI</span>
                      </div>
                    }
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  hoverable
                  style={{ width: '100%' }}
                  cover={
                    <img
                      alt="example"
                      src="https://dulich9.com/wp-content/uploads/2019/05/kinh-nghiem-du-lich-thai-lan-15-300x300.webp"
                    />
                  }
                >
                  <Meta
                    title="Kinh nghiệm du lịch Thái Lan tự túc: Ăn gì, chơi đâu, lịch trình v.v"
                    description={
                      <div className="author">
                        BY <span className="author-name">NGA NGUYỄN</span>
                      </div>
                    }
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Styled.Container>
  );
}

export default Experience;
