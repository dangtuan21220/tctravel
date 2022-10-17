import { Button, Modal } from 'antd';
import { useState } from 'react';

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
}

function Login({ isOpen, onClose }: LoginProps) {
  const handleOk = () => {
    console.log(123);
  };

  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={isOpen}
        onOk={handleOk}
        onCancel={onClose}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default Login;
