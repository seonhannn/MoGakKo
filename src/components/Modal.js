import Modal from './Modal';
import React from 'react';
import { useState } from 'react';

const ModalView = () => {
  const [isOpen, setOpen] = useState(false);

  const onClick = () => {
    setOpen(true);
  };

  return (
    <div className="ModalView">
      <button onClick={onClick}>open Modal</button>
      <Modal isOpen={isOpen} />
    </div>
  );
};

export default ModalView;