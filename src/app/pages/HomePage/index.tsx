import IMAGEHANOI from 'app/assets/images/ha-noi.jpg';
import IMAGEHCM from 'app/assets/images/hcm.jpg';
import IMAGEVHL from 'app/assets/images/Hinh-anh-Ha-Long.jpg';
import { Helmet } from 'react-helmet-async';
import Header from 'app/components/Header/Header';

import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Styled from './styled';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/experience');
    localStorage.setItem('current', 'experience');
  };
  return (
    <>
      <Styled.Container>
        <Header />
        <div className="image">
          <img src={IMAGEHANOI} alt="img" />
          <div className="btn-discover">
            <Button
              type="primary"
              size="large"
              shape="round"
              onClick={handleClick}
            >
              Khám phá ngay <ArrowRightOutlined />
            </Button>
          </div>
        </div>
        <div className="image">
          <img src={IMAGEVHL} alt="img" />
          <div className="btn-discover">
            <Button
              type="primary"
              size="large"
              shape="round"
              onClick={handleClick}
            >
              Khám phá ngay <ArrowRightOutlined />
            </Button>
          </div>
        </div>
        <div className="image">
          <img src={IMAGEHCM} alt="img" />
          <div className="btn-discover">
            <Button
              type="primary"
              size="large"
              shape="round"
              onClick={handleClick}
            >
              Khám phá ngay <ArrowRightOutlined />
            </Button>
          </div>
        </div>
      </Styled.Container>
    </>
  );
}
