import { StarFilled } from '@ant-design/icons';
import { InputNumber, Modal, Row, Col, Select } from 'antd';
import { useState } from 'react';

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

function Rating({ isOpenModal, onClose }) {
  const [point, setPoint] = useState<string>('5');
  const [time, setTime] = useState('weekday');
  const [weather, setWeather] = useState('sunny');
  const [companion, setCompanion] = useState('family');
  const onChange = (value: any) => {
    console.log('changed', value);
    // setPoint(value);
  };

  return (
    <Modal title="Đánh giá" visible={isOpenModal} onCancel={onClose}>
      <Row gutter={8} className="filter-item" style={{ marginBottom: '10px' }}>
        <Col className="gutter-row" span={9}>
          <div className="lable">Điểm đánh giá:</div>
        </Col>
        <Col className="gutter-row" span={15}>
          <InputNumber<string>
            defaultValue={point}
            min="1"
            max="5"
            step="1"
            onChange={onChange}
            stringMode
          />
          <StarFilled
            style={{
              fontSize: '25px',
              color: '#f8e009',
              marginLeft: '0.5rem',
            }}
          />
        </Col>
      </Row>

      <Row gutter={8} className="filter-item" style={{ marginBottom: '10px' }}>
        <Col className="gutter-row" span={9}>
          <div className="lable">Thời gian:</div>
        </Col>
        <Col className="gutter-row" span={15}>
          <Select
            defaultValue={time}
            size="large"
            style={{ width: '100%' }}
            options={optionTime}
          />
        </Col>
      </Row>
      <Row gutter={8} className="filter-item" style={{ marginBottom: '10px' }}>
        <Col className="gutter-row" span={9}>
          <div className="lable">Thời tiết:</div>
        </Col>
        <Col className="gutter-row" span={15}>
          <Select
            defaultValue={weather}
            size="large"
            style={{ width: '100%' }}
            options={optionWeather}
          />
        </Col>
      </Row>
      <Row gutter={8} className="filter-item" style={{ marginBottom: '10px' }}>
        <Col className="gutter-row" span={9}>
          <div className="lable">Người đồng hành:</div>
        </Col>
        <Col className="gutter-row" span={15}>
          <Select
            defaultValue={companion}
            size="large"
            style={{ width: '100%' }}
            options={optionCompanion}
          />
        </Col>
      </Row>
    </Modal>
  );
}

export default Rating;
