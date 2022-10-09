import formatShift from "./formatShift";
import getShiftLength from "./getShiftLength";

// Generates shifts and shift lenghts from user inputs
const generateResults = (start, end, offset, radioSelection) => {

    // timesArray will contain unrounded times (as Date instance) of when each shift should start 
    const timesArray = [];
    let shiftTime = new Date(start.getTime());
    do {
      timesArray.push(shiftTime);
      shiftTime = new Date(shiftTime.getTime() + offset);
    } while (shiftTime <= end);
  
    // shiftArray will contain shift (when shift begins and ends) and length of each shift
    const shiftsArray = [];
    let shiftStart, shiftEnd;
    for (let i = 0; i < timesArray.length - 1; i++) {
      shiftStart = timesArray[i];
      shiftEnd = timesArray[i + 1];
      
      // round shiftStart and shiftEnd to a time that ends in 0 or 5 minutes 
      const fiveMinAsMilliseconds = 1000 * 60 * 5;
      shiftStart = new Date(Math.round(shiftStart.getTime() / fiveMinAsMilliseconds) * fiveMinAsMilliseconds); 
      shiftEnd = new Date(Math.round(shiftEnd.getTime() / fiveMinAsMilliseconds) * fiveMinAsMilliseconds);
  
      // get the length of each shift (now with rounded times)
      const shiftLength = getShiftLength(shiftStart, shiftEnd);
  
      // get formatted shift
      const shift = formatShift(shiftStart, shiftEnd);
  
      // push formatted shift and shift length to (multidimensional) array
      shiftsArray.push([shift, shiftLength]);
    }
  
    const results = {shiftsArray, radioSelection};
    return results;
}

  export default generateResults;