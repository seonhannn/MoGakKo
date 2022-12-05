import React, { useState } from 'react';
import Modal from './ModalView';

function ShowModal(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>{props.title}</button>
      <Modal open={modalOpen} close={closeModal}>
        {props.content}
      </Modal>
    </div>
  );
}

export default ShowModal;