import React, { useEffect, useRef } from 'react'
import styles from './Modal.module.css';
import { CSSTransition } from "react-transition-group";
import copyTable from "./utils/copyTable";

// Components
import ReactPortal from './ReactPortal';

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

    let isStatisticsSheet, isSimpleTable = false;

    if (results) {
        if (results.radioSelection === "statisticsSheet") {
            isStatisticsSheet = true;
        }
        if (results.radioSelection === "simpleTable") {
            isSimpleTable = true;
        }
    }

    
    return (
    <ReactPortal wrapperId="react-portal-modal-container">
        <CSSTransition
        in={showModal}
        timeout={{ entry: 0, exit: 300 }}
        unmountOnExit
        nodeRef={nodeRef}
        classNames={{...styles}}
        >
            <div className={styles.modal} ref={nodeRef}>
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <p>Results</p>
                    </div>
                    <div className={styles.modalBody}>
                        <div className={results ? styles[results.radioSelection]: ""}>
                            <div>
                                <h2>Overlook Gallery Schedule</h2>
                                <h4>DATE: {todaysDate}</h4>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Time</th>
                                        {isStatisticsSheet? <th>Notes</th> : <th>Staff</th>}
                                        {isStatisticsSheet ? <th>Total</th> : null}
                                    </tr>
                                </thead>
                                <tbody>
                                    {results?.shiftsArray.map((shift, index) => {
                                        return(
                                            <tr key={index}>
                                                <td>{shift[0]}</td>
                                                {isStatisticsSheet ? <td></td> : null}    
                                                <td></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={styles.modalFooter}>
                        <button onClick={handleClose} className={styles.modalBtnClose}>Close</button>
                        {isSimpleTable ? <button onClick={copyTable} className={styles.modalBtnCopy}>Copy</button> : <button onClick={window.print} className={styles.modalBtnPrint}>Print</button>}
                    </div>
                </div>
            </div>
        </CSSTransition>
    </ReactPortal>
    );

}

export default Modal