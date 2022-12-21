import React, { useEffect, useState } from 'react'

// css import
import topbarstyling from './topbar.module.css'

const TopBarTime = () => {

  // let date = new Date();

  // let hour = date.getHours()
  // let minute = date.getMinutes()
  // let seconds = date.getSeconds()
  // console.log(hour, minute)

  // const timer = () => {
  //   setTimeout(() => {
  //     let seconds = date.getSeconds()
  //   }, 1000);
  // }

  const [date, setDate] = useState(new Date())

  useEffect(()=>{
    let timer = setInterval(() => setDate(new Date()), 1000)

    return function cleanup() {
      clearInterval(timer)
    }
  })


  return (
    <div className={topbarstyling.settime}>
      <p>
        {/* <span className="hour">{hour > 12 ? hour - 12 : hour}</span>:
        <span className="minutes" onChange={timer}>{minute} </span>
        <span className="am-pm"> {hour < 12 ? " am" : " pm"}</span> */}
        <span>{date.toLocaleTimeString()}</span>
      </p>
    </div>
  )
}

export default TopBarTime