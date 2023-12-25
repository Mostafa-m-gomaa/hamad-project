import "./modal.css";
const Modal = ({ children, onClose, isOpen }) => {
  return isOpen ? (
    <div
      className="modal"
      onClick={(e) => {
        if (e.target.classList.contains("modal")) {
          onClose();
        }
      }}
    >
      <div className="modal-body">
        <button onClick={onClose} className="close" type="button">
          <span>&times;</span>
        </button>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
