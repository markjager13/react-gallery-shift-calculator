// converts time to 24hr and sets as date obj
const parseDateTime = (time) => {
    
    let date = new Date();

    let [hours, minutes] = time.substr(0, time.length  -2).split(":").map(Number);
    if (time.includes("pm") && hours !== 12) hours += 12;

    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds("00");

    return date;
    
};
  
  export default parseDateTime;