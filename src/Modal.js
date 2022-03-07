import React from 'react'

const Modal = (props) => {

    if (!props.showModal) {
        return null;
    }

    // propbably a quicker way to write this
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
    <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <h2 className="modal-title">Overlook Gallery Schedule</h2>
                <h3>DATE: {todaysDate}</h3>
            </div>
            <div className="modal-body">
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
            <div className="modal-footer">
                <button onClick={props.onClose} className="modal-button">Close</button>
            </div>
        </div>
    </div>
  )
}

export default Modal