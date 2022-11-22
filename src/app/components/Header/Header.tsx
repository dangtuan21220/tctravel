import { UserOutlined } from '@ant-design/icons';
import { Button, Col, Menu, Row, Dropdown } from 'antd';
import Login from 'app/pages/Auth/Login/index';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Styled from './styled';

function Header() {
  const [loading, setLoading] = useState(false);
  const [isModalLogin, setIsModalLogin] = useState(false);
  const accessToken = localStorage.getItem('access_token');
  const fullName = localStorage.getItem('full-name');

  const [current, setCurrent] = useState(() => {
    return localStorage.getItem('current')
      ? `${localStorage.getItem('current')}`
      : 'home';
  });

  const logout = () => {
    setLoading(true);
    localStorage.removeItem('access_token');
    localStorage.removeItem('email');
    localStorage.removeItem('full-name');
    localStorage.removeItem('user-id');
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="1">Thông tin cá nhân</Menu.Item>
      <Menu.Item key="2">Đổi mật khẩu</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={logout}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

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
          <Col className="logo logo-text" span={2}>
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
                <Link to={'/recommend'}>GỢI Ý</Link>
              </Menu.Item>
              <Menu.Item key="experience">
                <Link to={'/experience'}>KINH NGHIỆM</Link>
              </Menu.Item>
              <Menu.Item key="collection">
                <Link to={'/collection'}>BỘ SƯU TẬP</Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={3} className="login logo">
            {!accessToken ? (
              <Button onClick={() => setIsModalLogin(true)} type="link">
                ĐĂNG NHẬP
              </Button>
            ) : (
              <Dropdown overlay={userMenu} trigger={['click']}>
                <a className="user" onClick={e => e.preventDefault()}>
                  <UserOutlined />
                  <h4>{fullName}</h4>
                </a>
              </Dropdown>
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
