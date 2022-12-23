import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ModalCus = ({
    titleButton,
    titleModal,
    isModalOpen,
    setIsModalOpen,
    isCancelButtonHidden,
    desctiptions,
}) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

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
      <Button type="primary" onClick={showModal}>
        {titleButton}
      </Button>
      <Modal 
        title={titleModal}
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}
        cancelButtonProps={{
            style: {display: isCancelButtonHidden ? 'none' : ''}
        }}

        okButtonProps={{
            style: {display: isCancelButtonHidden ? 'none' : ''}
        }}
      >
        <p>{desctiptions}</p>
      </Modal>
    </>
  );
};

export default ModalCus;