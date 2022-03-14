// formats shift times as 12 hr strings and returns string with start and end time
const formatShift = (startTime, endTime) => {

    // format shift start and end times as 12 hr time strings
    const shiftStartString = new Date(startTime)
    .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    .replace(/^0(?:0:0?)?/, "")
    .replace(/(:\d{2}| [AP]M)$/, "");
    const shiftEndString = new Date(endTime)
    .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    .replace(/^0(?:0:0?)?/, "")
    .replace(/(:\d{2}| [AP]M)$/, "");

    // format the start and end of shift
    const shift = shiftStartString + " - " + shiftEndString;

    return shift;
}

export default formatShift;
