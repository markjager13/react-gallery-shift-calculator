import React from 'react'

const InputForm = () => {
  return (
    <div className="input-container">
        <form className="form-input">
            <input type="text" className="userInput" id="startTime" placeholder="Start Time" list="sTimes" />
            <input type="text" className="userInput" id="endTime" placeholder="End Time" list="eTimes" />
			<input type="text" className="userInput" id="staffNum"placeholder="Number of Staff" list="number" />

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