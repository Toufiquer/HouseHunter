import React from "react";

// eslint-disable-next-line react/prop-types
const Modal = ({ title, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen((pre) => !pre);
  };
  return (
    <div>
      {/* Open the modal using ID.showModal() method */}
      <button className="btn" onClick={toggle}>
        {title || "open modal"}
      </button>
      <div className="fixed w-full h-screen md:top-[5%] md:left-[5%] top-0 left-0">
        {isOpen && (
          <div className="modal-box z-50">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="py-4">{content}</p>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={toggle}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
