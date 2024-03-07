import React from "react";

type Props = {
    isOpen: boolean,
    onClose: (e: any) => void,
    content: React.ReactNode // Allow JSX elements
  }
  

function Modal({ isOpen, onClose, content }:Props) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        {content}
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
