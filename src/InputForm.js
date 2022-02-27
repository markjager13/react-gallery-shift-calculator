import React from 'react'

const InputForm = () => {
  return (
    <div className="input-container">
        <form className="form-input">
            <input type="text" className="userInput" id="startTime" placeholder="Start Time" list="sTimes" />
            <datalist id="sTimes">
				<option value="9:30 am" />
				<option value="9:45 am" />
				<option value="10:00 am" />
				<option value="10:15 am" />
				<option value="10:30 am" />
			</datalist>

            <input type="text" className="userInput" id="endTime" placeholder="End Time" list="eTimes" />
            <datalist id="eTimes">
				<option value="3:30 pm" />
				<option value="3:45 pm" />
				<option value="4:00 pm" />
				<option value="4:15 pm" />
				<option value="4:30 pm" />
			</datalist>

			<input type="text" className="userInput" id="staffNum"placeholder="Number of Staff" list="number" />
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
					<input type="radio" className="radioSelect" id="tableSelectBig" name="tableType" value="TableBig" checked/>Office Schedule<br/>
				</label>
				<label>
					<input type="radio" className="radioSelect" id="sheetSelect" name="tableType" value="Statistics Sheet" />Statistics Form<br/>
				</label>					
				<label>
					<input type="radio" className="radioSelect" id="tableSelect" name="tableType" value="Table" />Table<br/>
				</label>
			</label>

            <button type="submit" className="userButton" id="calculateButton">CALCULATE</button>
			<input type="button" className="userButton" id="resetButton" value="RESET" />
        </form>
    </div>
  )
}

export default InputForm