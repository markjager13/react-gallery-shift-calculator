import { useForm } from 'react-hook-form';
import styles from './InputForm.module.css';
// utils
import parseDateTime from './utils/parseDateTime';
import generateResults from './utils/generateResults';

const InputForm = (props) => {

    // react-hook-form to manage form data, validation, error messages
    const {register, handleSubmit, formState: {errors}, reset } = useForm();
    // function to manage error messages
    const handleErrors = (errors) => {};

    // input validation options and related error messages
    const inputOptions = {
        startTime: {
            required: "Start time is required",
            pattern: {
                value: /^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/,
                message: "Pleae enter time in 12-hour am/pm format, e.g. 9:30 am"
            }
        },
        endTime: {
            required: "End time is required",
            pattern: {
                value: /^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/,
                message: "Pleae enter time in 12-hour am/pm format, e.g. 4:00 pm"
            }        
        },
        staffNum: { 
            required: "Number of staff is required",
            pattern: {
                value: /^[1-9]+[0-9]*$/,
                message: "Pleae enter a number"
            }  
        }  
    }

    // submit input data to be calculated
    const handleCalculation = (inputData) => {

        // send input values to be converted to 24hr and returned as Date objects
        const startTimeObj = parseDateTime(inputData.startTime);
        const endTimeObj = parseDateTime(inputData.endTime);

        // get time offset
        const diffInMilliseconds = Math.abs(endTimeObj - startTimeObj);
        const offset = diffInMilliseconds / inputData.staffNum;      

        // get radio button selection
        const radioSelection = inputData.radio;

        // generate results
        const results = generateResults(startTimeObj, endTimeObj, offset, radioSelection);
        
        // pass results to getResults to lift state up to main App component
        props.getResults(results);

        // reset input fields upon submission
        reset()
    }

  return (
    <div className={styles.inputContainer}>
        <form onSubmit={handleSubmit(handleCalculation, handleErrors)}>
            <div>
                <input 
                    type="text" 
                    className={styles.textInput} 
                    name="startTime"
                    placeholder="Start Time" 
                    list="sTimes"
                    {...register("startTime", inputOptions.startTime)}
                />
                <p className={styles.textDanger}>
                    {errors?.startTime && errors.startTime.message}
                </p>
                <datalist id="sTimes">
                    <option value="9:30 am" />
                    <option value="9:45 am" />
                    <option value="10:00 am" />
                    <option value="10:15 am" />
                    <option value="10:30 am" />
                </datalist>

                <input 
                    type="text" 
                    className={styles.textInput} 
                    name="endTime"
                    placeholder="End Time" 
                    list="eTimes" 
                    {...register("endTime", inputOptions.endTime)}
                />
                <p className={styles.textDanger}>
                    {errors?.endTime && errors.endTime.message}
                </p>
                <datalist id="eTimes">
                    <option value="3:30 pm" />
                    <option value="3:45 pm" />
                    <option value="4:00 pm" />
                    <option value="4:15 pm" />
                    <option value="4:30 pm" />
                </datalist>

                <input 
                    type="text" 
                    className={styles.textInput} 
                    name="staffNum"
                    placeholder="Number of Staff" 
                    list="number" 
                    {...register("staffNum", inputOptions.staffNum)}
                />
                <p className={styles.textDanger}>
                    {errors?.staffNum && errors.staffNum.message}
                </p>
                <datalist id="number">
                    <option value="5" />
                    <option value="6" />
                    <option value="7" />
                    <option value="8" />
                    <option value="9" />
                    <option value="10" />
                </datalist>
            </div>

            <div className={styles.radioInputContainer}>
                <label>Results Format:</label>
                <div className={styles.radioInputGroup}>
                    <label htmlFor="tableSelectBig">Office Schedule</label>
                    <input 
                        type="radio" 
                        className="radioSelect" 
                        id="tableSelectBig" 
                        name="resultsFormat"
                        value="tableBig"
                        defaultChecked={true}
                        {...register("radio")}
                    />
                </div>
                <div className={styles.radioInputGroup}>
                    <label htmlFor="sheetSelect">Statistics Form</label>
                    <input 
                        type="radio" 
                        className="radioSelect" 
                        id="sheetSelect" 
                        name="resultsFormat"
                        value="statisticsSheet"
                        {...register("radio")}
                    />
                </div>
                <div className={styles.radioInputGroup}>
                    <label htmlFor="tableSelect">Table</label>
                    <input 
                        type="radio" 
                        className="radioSelect" 
                        id="tableSelect" 
                        name="resultsFormat"
                        value="simpleTable"
                        {...register("radio")}
                    />
                </div>
            </div>
            <div>
                <button type="submit" className={`${styles.inputBtn} ${styles.calculateBtn}`}>CALCULATE</button>
                <input type="button" onClick={() => reset()} className={`${styles.inputBtn} ${styles.resetBtn}`} value="RESET" />
            </div>

        </form>

    </div>
  )
}

export default InputForm