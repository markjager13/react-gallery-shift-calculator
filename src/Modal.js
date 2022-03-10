import React, { useEffect } from 'react'
import ReactPortal from './ReactPortal';

//import ReactDOM from 'react-dom'

const Modal = ( {results, children, showModal, handleClose} ) => {
    
/*     if (!props.showModal){
        return null;
    } */

    useEffect(() => {
        const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
          document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
      }, [handleClose]);

      if (!showModal) return null;

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

    /*
    const closeOnEscKeydown = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose();
        }
    }
     useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscKeydown);
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscKeydown);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    useEffect(() => {
        function keyListener(e) {
            const listener = keyListenersMap.get(e.keyCode);
            return listener && listener(e);
        }
        document.body.addEventListener('keydown', keyListener);
    })

    const handleTabKey = e => {
        const focusableModalElements = document.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstElement = focusableModalElements[0];
        const lastElement =
          focusableModalElements[focusableModalElements.length - 1];
    
        if (!e.shiftKey && document.activeElement !== firstElement) {
          firstElement.focus();
          return e.preventDefault();
        }
    
        if (e.shiftKey && document.activeElement !== lastElement) {
          lastElement.focus();
          e.preventDefault();
        }
      };
    
      const keyListenersMap = new Map([[27, props.onClose], [9, handleTabKey]]);
    
*/
      return (
        <ReactPortal wrapperId="react-portal-modal-container">
        <div className={`modal ${showModal ? "show" : ""}`}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
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
        </ReactPortal>

      );

/*
      return ReactDOM.createPortal (
    <div className={`modal ${props.showModal ? "show" : ""}`} onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
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
                            {props.results?.shiftsArray.map((shift, index) => {
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
                <button onClick={props.onClose} className="modal-button-close">Close</button>
                <button onClick={window.print} className="modal-button-print">Print</button>
            </div>
        </div>
    </div>,
    document.getElementById('root')
  ) */
}

export default Modal