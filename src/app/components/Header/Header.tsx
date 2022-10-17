import { Button, Col, Menu, Row } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Styled from './styled';
import Login from 'app/pages/Auth/Login/index';

function Header() {
  const [isModalLogin, setIsModalLogin] = useState(false);
  const token = localStorage.getItem('access_token');
  const [current, setCurrent] = useState(() => {
    return localStorage.getItem('current')
      ? `${localStorage.getItem('current')}`
      : 'home';
  });

  const handleClick = (e: any) => {
    if (e.key !== 'login') {
      localStorage.setItem('current', e.key);
      setCurrent(e.key);
    } else {
      return;
    }
  };

  const handleOpenModal = () => {
    setIsModalLogin(true);
  };

  return (
    <>
      <Styled.Header>
        <Row justify="center" className="header">
          <Col className="logo" span={3}>
            <Link
              to={'/'}
              onClick={() => {
                localStorage.setItem('current', 'home');
                setCurrent('home');
              }}
            >
              TCTravel
            </Link>
          </Col>
          <Col span={15}>
            <Menu
              mode="horizontal"
              onClick={handleClick}
              selectedKeys={[current]}
            >
              <Menu.Item key="home">
                <Link to={'/'}>TRANG CHỦ</Link>
              </Menu.Item>
              <Menu.Item key="recommend">
                <Link to={'/'}>GỢI Ý</Link>
              </Menu.Item>
              <Menu.Item key="experience">
                <Link to={'/'}>KINH NGHIỆM</Link>
              </Menu.Item>
              <Menu.Item key="document">
                <Link to={'/document'}>BỘ SƯU TẬP</Link>
              </Menu.Item>
              {/* <Menu.Item key={current} className="btn-login">
                <a onClick={handleOpenModal}>ĐĂNG NHẬP</a>
              </Menu.Item> */}
              {/* <Menu.Item className="console" key="login">
              <Button size="large">
                <Link to={`${token ? '/dashboard' : '/login'}`}>Console</Link>
              </Button>
            </Menu.Item> */}
            </Menu>
          </Col>
          <Col span={3} className="login logo">
            <Button onClick={() => setIsModalLogin(true)} type="link">ĐĂNG NHẬP</Button>
          </Col>
        </Row>
      </Styled.Header>
      <Login isOpen={isModalLogin} onClose={() => setIsModalLogin(false)} />
    </>
  );
}

export default Header;
