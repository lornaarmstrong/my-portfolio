import React from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // If the modal is not open, don't render it.

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>More Information</h2>
        <p>This is the popup modal content. Add any text or components here.</p>
        <button onClick={onClose} className="modal-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
