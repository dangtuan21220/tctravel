import { Button, Modal } from 'antd';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="smt" />
      </Helmet>
      <div>
        <h1>Hello</h1>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    </>
  );
}
