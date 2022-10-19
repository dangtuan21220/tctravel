import { UserOutlined } from '@ant-design/icons';
import { Button, Col, Menu, Row } from 'antd';
import Login from 'app/pages/Auth/Login/index';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Styled from './styled';

function Header() {
  const [isModalLogin, setIsModalLogin] = useState(false);
  const token = localStorage.getItem('access_token');
  const fullName = localStorage.getItem('full-name');

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

  return (
    <>
      <Styled.Header>
        <Row justify="center" className="header">
          <Col className="logo" span={2}>
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
          <Col span={14}>
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
          <Col span={4} className="login logo">
            {!token ? (
              <Button onClick={() => setIsModalLogin(true)} type="link">
                ĐĂNG NHẬP
              </Button>
            ) : (
              <div className='user'>
                <UserOutlined />
                <h4>{fullName}</h4>
              </div>
            )}
          </Col>
        </Row>
      </Styled.Header>
      <Login
        isOpen={isModalLogin}
        onClose={() => setIsModalLogin(false)}
        onOpenLogin={() => setIsModalLogin(true)}
      />
    </>
  );
}

export default Header;
