import React, {useState} from 'react';
import parseDateTime from './parseDateTime';
import generateShifts from './generateShifts';

const InputForm = () => {

    // initialValues start end times and staffNum should be empty
    // ...fix for now until we can validate inputs and do error handling
    const initialValues = {
        startTime: "09:30 am",
        endTime: "04:00 pm",
        staffNum: "5",
        resultsFormat: "tableBig",
      };

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        // send input values to be converted to 24hr and returned as Date objects
        const startTimeObj = parseDateTime(values.startTime);
        const endTimeObj = parseDateTime(values.endTime);
        
        // get time offset
        const diffInMilliseconds = Math.abs(endTimeObj - startTimeObj);
        const offset = diffInMilliseconds / values.staffNum;      

        // generate shifts
        let shifts = generateShifts(startTimeObj, endTimeObj, offset);
    
        console.log(shifts);
    }



  return (
    <div className="input-container">
        <form className="form-input" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="userInput" 
                value={values.startTime}
                onChange={handleInputChange} 
                name="startTime"
                label="Start Time"
                id="startTime" 
                placeholder="Start Time" 
                list="sTimes" 
            />
            <datalist id="sTimes">
				<option value="9:30 am" />
				<option value="9:45 am" />
				<option value="10:00 am" />
				<option value="10:15 am" />
				<option value="10:30 am" />
			</datalist>

            <input 
                type="text" 
                className="userInput" 
                value={values.endTime}
                onChange={handleInputChange} 
                name="endTime"
                label="End Time"
                id="endTime" 
                placeholder="End Time" 
                list="eTimes" 
            />
            <datalist id="eTimes">
				<option value="3:30 pm" />
				<option value="3:45 pm" />
				<option value="4:00 pm" />
				<option value="4:15 pm" />
				<option value="4:30 pm" />
			</datalist>

			<input 
                type="text" 
                className="userInput" 
                value={values.staffNum}
                onChange={handleInputChange}
                name="staffNum"
                label="Staff Number" 
                id="staffNum"
                placeholder="Number of Staff" 
                list="number" 
            />
            <datalist id="number">
				<option value="5" />
				<option value="6" />
				<option value="7" />
				<option value="8" />
				<option value="9" />
				<option value="10" />
			</datalist>

            <label>Results Format:<br/>
				<label>
					<input 
                        type="radio" 
                        className="radioSelect" 
                        id="tableSelectBig" 
                        onChange={handleInputChange}
                        name="resultsFormat"
                        value="tableBig"
                        defaultChecked={true}
                    />
                    Office Schedule<br/>
				</label>
				<label>
					<input 
                        type="radio" 
                        className="radioSelect" 
                        id="sheetSelect" 
                        onChange={handleInputChange}
                        name="resultsFormat"
                        value="statisticsSheet"
                    />
                    Statistics Form<br/>
				</label>					
				<label>
					<input 
                        type="radio" 
                        className="radioSelect" 
                        id="tableSelect" 
                        onChange={handleInputChange}
                        name="resultsFormat"
                        value="simpleTable"
                    />
                    Table<br/>
				</label>
			</label>

            <button type="submit" className="userButton" id="calculateButton">CALCULATE</button>
			<input type="button" className="userButton" id="resetButton" value="RESET" />
        </form>
    </div>
  )
}

export default InputForm