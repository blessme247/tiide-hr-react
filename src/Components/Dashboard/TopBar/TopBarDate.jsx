import React from 'react'
// css import
import topbarstyling from './topbar.module.css'

function TopBarDate() {

  let date = new Date();

  let monthInt = date.getMonth();


  const setMonth = (monthInt) => {
    switch (monthInt) {
      case 0:
        return 'January';
      // break;
      case 1:
        return 'February';
      // break;
      case 2:
        return 'March';
      // break;
      case 3:
        return 'April';
      // break;
      case 4:
        return 'May';
      // break;
      case 5:
        return 'Jun';
      // break;
      case 6:
        return 'Jul';
      // break;
      case 7:
        return 'Aug';
      // break;
      case 8:
        return 'Sep';
      // break;
      case 9:
        return 'Oct';
      // break;
      case 10:
        return 'Nov';
      // break;
      case 11:
        return 'Dec';
      // break;
      default:
        return 'Mon';
    }
  }

  let dayInt = date.getDate()
  let day = dayInt < 10 ? `0${dayInt}` : dayInt;
  const month = setMonth(monthInt)

  return (
    <div className={topbarstyling.setdate}>
      <p>
        <span className="Month">{month} </span>
        <span className="day">{day}</span>
      </p>
    </div>
  )
}

export default TopBarDate
