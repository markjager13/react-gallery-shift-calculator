import React, { useEffect, useRef } from 'react'
import ReactPortal from './ReactPortal';
import { CSSTransition } from "react-transition-group";

const Modal = ( {results, children, showModal, handleClose} ) => {
    
    const nodeRef = useRef(null);

    useEffect(() => {
        const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
          document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
      }, [handleClose]);

    // format current date as mm/dd/yyyy
    const getCurrentDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        let yyyy = today.getFullYear();
        today = mm + "/" + dd + "/" + yyyy;
        return today
    }

    const todaysDate = getCurrentDate();

    return (
    <ReactPortal wrapperId="react-portal-modal-container">
        <CSSTransition
        in={showModal}
        timeout={{ entry: 0, exit: 300 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
        >
            <div className="modal" ref={nodeRef}>
                <div className="modal-content">
                    {children}
                <div className="modal-header">
                    <p>Results</p>
                </div>
                <div className="modal-body">
                    <div className="test">
                        <div className="resultsHeader">
                            <h2>Overlook Gallery Schedule</h2>
                            <h4>DATE: {todaysDate}</h4>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Staff</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results?.shiftsArray.map((shift, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{shift[0]}</td>
                                            <td></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={handleClose} className="modal-button-close">Close</button>
                    <button onClick={window.print} className="modal-button-print">Print</button>
                </div>
                </div>
            </div>
        </CSSTransition>
    </ReactPortal>
    );

}

export default Modal