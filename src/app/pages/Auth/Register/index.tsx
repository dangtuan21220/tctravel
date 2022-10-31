import { UserOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Radio,
  Row,
  notification,
} from 'antd';
import Styled from './styled';
import { authService } from 'services/authService';

interface RegisterProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
}

function Register({ isOpen, onClose, onOpenLogin }: RegisterProps) {
  const [form] = Form.useForm();

  const handleCancel = () => {
    onClose();
    form.resetFields();
  };

  const handleOpenLogin = () => {
    handleCancel();
    onOpenLogin();
  };

  const onFinish = async (values: any) => {
    const data = {
      ...values,
      gender: values.gender || 1,
    };
    const response = await authService.register(data);
    if (response.data.errCode === 0) {
      notification.success({
        message: 'Đăng ký thành công',
      });
    }
    handleOpenLogin();
  };

  return (
    <>
      <Modal
        centered
        visible={isOpen}
        footer={null}
        onCancel={handleCancel}
        width={800}
      >
        <Styled.Register>
          <Form
            name="basic"
            form={form}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <div className="title">
              <div className="title-logo">
                <UserOutlined />
              </div>
              <h3>Đăng ký</h3>
            </div>
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                  ]}
                >
                  <Input placeholder="Email" size="large" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={12}>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                  ]}
                >
                  <Input.Password placeholder="Password" size="large" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <Form.Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your first name!',
                    },
                  ]}
                >
                  <Input placeholder="First name" size="large" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={12}>
                <Form.Item
                  name="lastName"
                  rules={[
                    { required: true, message: 'Please input your last name!' },
                  ]}
                >
                  <Input placeholder="Last name" size="large" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={24}>
                <Form.Item
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your address!',
                    },
                  ]}
                >
                  <Input placeholder="Address" size="large" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your phone!',
                    },
                  ]}
                >
                  <Input placeholder="Number phone" size="large" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={8} offset={3}>
                <Form.Item name="gender">
                  <Radio.Group defaultValue="1">
                    <Radio value="1">Nam</Radio>
                    <Radio value="0">Nữ</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row justify="center">
              <Col span={8}>
                <Form.Item>
                  <Button block type="primary" htmlType="submit" size="large">
                    ĐĂNG KÝ
                  </Button>
                </Form.Item>
              </Col>
            </Row>

            <div className="forgot">
              <div>
                Bạn đã có tài khoản?{' '}
                <span onClick={handleOpenLogin}>Đăng nhập ngay</span>
              </div>
            </div>
          </Form>
        </Styled.Register>
      </Modal>
    </>
  );
}

export default Register;
