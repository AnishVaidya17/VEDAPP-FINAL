//CALCULATING TIME for time field in Casepaper

const timeCalculate = () => {
    const time = new Date().toLocaleTimeString()
    const timeParts = time.split(':')
    const hours = timeParts[0];
    const minutes = timeParts[1];
    const amPm = timeParts[2].split(" ")[1]; // Extract AM/PM
    const formattedTime = `${hours}:${minutes} ${amPm}`;
    return formattedTime
}

export default timeCalculate