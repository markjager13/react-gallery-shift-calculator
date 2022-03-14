// gets length of shift when passed rounded times
const getShiftLength = (dateObjStart, dateObjEnd) => {
    
    const length = new Date(dateObjEnd - dateObjStart);
    let lengthHrs = Math.floor((length % 86400000) / 3600000); // hours
    let lengthMins = Math.round(((length % 86400000) % 3600000) / 60000); // minutes
    if (lengthMins.toString().length === 1) lengthMins = "0" + lengthMins; // format for leading zero
    const lengthFormatted = lengthHrs + ":" + lengthMins;
    
    return lengthFormatted;
}
  
  export default getShiftLength;