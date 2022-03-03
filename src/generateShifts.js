// Generate shifts
const generateShifts = (start, end, offset) => {
  
    let timesArray = [];

    // LOOP #1, while loop
    // why am i putting a date obj in a new date obj again?
    // because i want shift time as a date obj
    // why can't i just use start
    // for readability
    // start gets pushed into timesArray and then we add offset to it and use it again for the next time
    // having it named start would be confusing in the do while loop
    let shiftTime = new Date(start.getTime());
    do {
      timesArray.push(shiftTime);
      shiftTime = new Date(shiftTime.getTime() + offset);
    } while (shiftTime <= end);
  
    // why new array?
    // timesArray is precise times (not in times ending in 0 or 5) and is an array of date objects
    // shiftArray is the array that will hold formatted shifts as a string (with start and end times for each element)
    // and also shift length

    let shiftArray = [];
    let shiftStart, shiftEnd, shiftLength;
  
    // LOOP #2, for loop
    // loop through timesArray
    // at end of array? if not set shiftEnd time to whatever is next in array
    // then 
    // pretty big for loop, refactor?
    for (let i = 0; i < timesArray.length; i++) {
      shiftStart = timesArray[i];
      if (i === timesArray.length - 1) {
        break;
      } else {
        shiftEnd = timesArray[i + 1];
      }
      
      // converting shiftStart and shiftEnd to a time that ends in 0 or 5 minutes
      // you need a few things to happen here
      // you need time to end in 0 or 5
      // you also need all shifts to be as equal as possible
      // 300000 milliseconds is 5 minutes
      // ...divide time in milliseconds by 5 in milliseconds
      // ...ALL WITHIN Date(...)
      // ...THEN multiply Date object 300000
      // IMPORTANT: live demo based on codebox v6(i think) gives slightly different shifts
      // ...9:30 start 4:00 end 5 staff
      // ...current code
      // ...intervals are 15, 20, 15, 20, 20
      // ...old version
      // ...intervals are 20, 15, 20, 15, 20
      // ...old version uses math.round with minutes
      // ...need to keep testing to see which one is better
      // ...new test 9:30 start 4:30 end 5 staff
      // ...current
      // ...intervals are 20, 25, 25, 25, 25
      // ...old
      // ...intervals are 25, 25, 20, 25, 25
      // ...hmm might need to run many test to see pattern
      // ...might not be much of a pattern, though
      // ...need to understand subtle differences btw code
      // ...old version
      // ...working with minutes (not milliseconds)
      // ...divide minutes by 5, then round that number up (math.round), then multiply by 5
      // ...current version
      // ...working with milliseconds (total milliseconds of date/time)
      // ...divide total date/time by number of milliseconds representing 5 (300000)
      // ...then multiplaying date object (or total date/time?) by number of milliseconds representing 5 (300000)
      shiftStart = new Date(shiftStart.getTime() / 300000) * 300000;
      shiftEnd = new Date(shiftEnd.getTime() / 300000) * 300000;
  
      shiftLength = getShiftLength(shiftStart, shiftEnd);
  
      // converting the miliseconds back into date object and then formating them as 12 hr time strings
      let shiftStartString = new Date(shiftStart)
        .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        .replace(/^0(?:0:0?)?/, "")
        .replace(/(:\d{2}| [AP]M)$/, "");
      let shiftEndString = new Date(shiftEnd)
        .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        .replace(/^0(?:0:0?)?/, "")
        .replace(/(:\d{2}| [AP]M)$/, "");
    
      let shift = shiftStartString + " - " + shiftEndString;
  
      shiftArray.push([shift, shiftLength]);
      shiftStart = shiftEnd;
    }
  
    return shiftArray;
}

// get shift length
const getShiftLength = (dateObjStart, dateObjEnd) => {
    const length = new Date(dateObjEnd - dateObjStart);
    let lengthHrs = Math.floor((length % 86400000) / 3600000); // hours
    let lengthMins = Math.round(((length % 86400000) % 3600000) / 60000); // minutes
    if (lengthMins.toString().length === 1) lengthMins = "0" + lengthMins; // format for leading zero
    const lengthFormatted = lengthHrs + ":" + lengthMins;
    return lengthFormatted;
}

  export default generateShifts;