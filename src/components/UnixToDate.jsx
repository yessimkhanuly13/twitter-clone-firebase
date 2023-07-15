import React from 'react'
import calendar from '../assets/calendar.png'

function UnixToDate({unix}) {
    const date = new Date(unix * 1000);

    // Get the various components of the date
    const monthNum = date.getMonth() + 1; // Months are zero-based, so we add 1
    const day = date.getDate();
    let month = '';
    switch(monthNum){
        case 1:
            month = 'January'
            break;
        case 2:
            month = 'February'
            break;
        case 3:
            month = 'March'
            break;
        case 4:
            month = 'April'
            break;
        case 5:
            month = 'May'
            break;
        case 6:
            month = 'June'
            break;
        case 7:
            month = 'July'
            break;
        case 8:
            month = 'August'
            break;
        case 9:
            month = 'September'
            break;
        case 10:
            month = 'October'
            break;
        case 11:
            month = 'November'
            break;
        case 12:
            month = 'December'
            break;
    }
  
    // Create a formatted date string
    const formattedDate = `Joined ${month} ${day}`;

  return (<div className='flex text-slate-500 mt-4'>
    <img className='h-6' src={calendar} alt="calendar" />
    <li className='ml-2'> {formattedDate} </li>
  </div>)

}

export default UnixToDate
