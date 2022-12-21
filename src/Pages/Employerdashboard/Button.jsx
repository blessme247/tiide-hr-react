import React from 'react'
import emdash from "./employerdash.module.css"


const Button = () => {
  return (
    <div>
      <button className={emdash.loadBtn} id="save" type="submit">No Data</button>
    </div>

  )
}

export default Button