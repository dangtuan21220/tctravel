import { StarFilled } from '@ant-design/icons';
import {
  InputNumber,
  Modal,
  Row,
  Col,
  Select,
  Form,
  Button,
  notification,
} from 'antd';
import { useState } from 'react';
import { recommendService } from 'services/recommendService';

const optionTime = [
  {
    value: 'weekday',
    label: 'Ngày trong tuần',
  },
  {
    value: 'weekend',
    label: 'Ngày cuối tuần',
  },
  {
    value: 'holiday',
    label: 'Ngày lễ',
  },
];

const optionWeather = [
  {
    value: 'sunny',
    label: 'Nhiều nắng',
  },
  {
    value: 'nice',
    label: 'Trời đẹp',
  },
  {
    value: 'cloudy',
    label: 'Nhiều mây',
  },
  {
    value: 'rainy',
    label: 'Nhiều mưa',
  },
];
const optionCompanion = [
  {
    value: 'family',
    label: 'Gia đình',
  },
  {
    value: 'friend',
    label: 'Bạn bè',
  },
  {
    value: 'lover',
    label: 'Người yêu',
  },
  {
    value: 'alone',
    label: 'Một mình',
  },
];

function Rating({
  isOpenModal,
  onClose,
  timeProps,
  weatherProps,
  companionProps,
  myRating,
  addrId,
}) {
  const [form] = Form.useForm();

  const onCloseModal = () => {
    onClose();
    form.resetFields();
  };
  const handleSubmit = async () => {
    if (parseInt(form.getFieldValue('point')) === 0) {
      notification.error({
        message: 'Thất bại',
        description: 'Điểm đánh giá phải lớn hơn 0',
      });
    } else {
      const dataBody = {
        weather: form.getFieldValue('weather'),
        time: form.getFieldValue('time'),
        partner: form.getFieldValue('partner'),
        point: parseInt(form.getFieldValue('point')),
        addrId,
        userId: parseInt(localStorage.getItem('user-id') || ''),
      };
      const response = await recommendService.addEditRating(dataBody);
      if (response.data.code === 0) {
        onCloseModal();
        notification.success({
          message: 'Đánh giá thành công',
        });
      } else {
        notification.error({
          message: 'Đánh giá thất bại',
        });
      }
    }
  };

  return (
    <Modal
      title="Đánh giá"
      onCancel={onCloseModal}
      visible={isOpenModal}
      footer={null}
    >
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        autoComplete="off"
        labelAlign={'left'}
      >
        <Form.Item label="Điểm đánh giá:" name="point" initialValue={myRating}>
          <InputNumber<string> min="0" max="5" step="1" stringMode />
        </Form.Item>
        <Form.Item label="Thời gian:" name="time" initialValue={timeProps}>
          <Select size="large" style={{ width: '100%' }} options={optionTime} />
        </Form.Item>
        <Form.Item
          label="Thời tiết:"
          name="weather"
          initialValue={weatherProps}
        >
          <Select
            size="large"
            style={{ width: '100%' }}
            options={optionWeather}
          />
        </Form.Item>
        <Form.Item
          label="Người đồng hành:"
          name="partner"
          initialValue={companionProps}
        >
          <Select
            size="large"
            style={{ width: '100%' }}
            options={optionCompanion}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 14, span: 10 }}>
          <div style={{ display: 'flex' }}>
            <Button
              htmlType="submit"
              size="large"
              style={{ marginRight: '10px' }}
              block
              onClick={onCloseModal}
            >
              Hủy
            </Button>
            <Button type="primary" block htmlType="submit" size="large">
              Lưu
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default Rating;
