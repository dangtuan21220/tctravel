import { LockOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal } from 'antd';
import { useState } from 'react';
import Register from '../Register';
import Styled from './styled';
import { authService } from 'services/authService';

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
}

function Login({ isOpen, onClose, onOpenLogin }: LoginProps) {
  const [isShowRegister, setIsShowRegister] = useState(false);
  const onFinish = async (values: any) => {
    const response = await authService.login(values);
    if (response.data.errCode === 0) {
      onClose();
      authService.setAccessToken(response.data.token);
      const fullName =
        response.data.data.lastName + ' ' + response.data.data.firstName;
      localStorage.setItem('email', response.data.data.email);
      localStorage.setItem('full-name', fullName);
    }
  };

  const handleShowRegister = () => {
    setIsShowRegister(true);
    onClose();
  };

  return (
    <>
      <Modal visible={isOpen} footer={null} onCancel={onClose} centered>
        <Styled.Login>
          <Form
            name="basic"
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <div className="title">
              <div className="title-logo">
                <LockOutlined />
              </div>
              <h3>Đăng nhập</h3>
            </div>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input placeholder="Email" size="large" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password placeholder="Password" size="large" />
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit" size="large">
                ĐĂNG NHẬP
              </Button>
            </Form.Item>
            <div className="forgot">
              <div>Quên mật khẩu?</div>
              <div>
                Bạn chưa có tài khoản?{' '}
                <span onClick={handleShowRegister}>Đăng ký ngay</span>
              </div>
            </div>
          </Form>
        </Styled.Login>
      </Modal>
      <Register
        isOpen={isShowRegister}
        onClose={() => {
          setIsShowRegister(false);
        }}
        onOpenLogin={onOpenLogin}
      />
    </>
  );
}

export default Login;
