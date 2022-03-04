import React from 'react'

const Modal = (props) => {

    if (!props.showModal) {
        return null;
    }

  return (
    <div className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Modal Title</h4>
            </div>
            <div className="modal-body">
                Modal Content
            </div>
            <div className="modal-footer">
                <button onClick={props.onClose} className="modal-button">Close</button>
            </div>
        </div>
    </div>
  )
}

export default Modal