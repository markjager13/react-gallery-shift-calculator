import React from 'react'

const Modal = (props) => {
    
/*     if (!props.showModal){
        return null;
    } */

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
    </div>
  )
}

export default Modal