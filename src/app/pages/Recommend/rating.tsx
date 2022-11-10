import { StarFilled } from '@ant-design/icons';
import { InputNumber, Modal } from 'antd';
import { useState } from 'react';

function Rating({ isOpenModal, onClose }) {
  const [point, setPoint] = useState<string>('5');

  const onChange = (value: any) => {
    console.log('changed', value);
    // setPoint(value);
  };

  return (
    <Modal title="Đánh giá" visible={isOpenModal} onCancel={onClose}>
      <p>Điểm đánh giá</p>
      <InputNumber<string>
        defaultValue={point}
        min="1"
        max="5"
        step="0.1"
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
    </Modal>
  );
}

export default Rating;
