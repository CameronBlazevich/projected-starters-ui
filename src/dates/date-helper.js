import moment from "moment-timezone";


export  const convertTimezone = (timeString, sourceTz, targetTz) => {
    // let timeString = '2:20 PM';
    // let sourceTz = 'America/New_York';
    // let targetTz = 'Asia/Kolkata';
    // let outputTime = convertTimezone(timeString, sourceTz, targetTz);
      // Parse the input time string using moment
      let time = moment.tz(timeString, 'h:mm A', sourceTz);
      
      // Convert the time to the target timezone
      let outputTime = time.clone().tz(targetTz).format('h:mm A');
      
      return outputTime;
    }

    export const convertTo12Hour = (timeString) => {
        // Parse the input time string using the Date constructor
        let date = new Date(`2000-01-01T${timeString}:00`);
        
        // Get the hours and minutes from the parsed date object
        let hours = date.getHours();
        let minutes = date.getMinutes();
        
        // Convert the hours to 12-hour format and determine if it's AM or PM
        let amOrPm = hours < 12 ? 'AM' : 'PM';
        hours = hours % 12 || 12;
        
        // Format the time string and return it
        let formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${amOrPm}`;
        return formattedTime;
      }

    