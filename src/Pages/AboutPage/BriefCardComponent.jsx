import React from 'react'

function BriefCardComponent({ heading, paragraph }) {
  return (
    <div className='brief-card '>
      <h4>{heading}</h4>
      <p>
        {paragraph}
      </p>
    </div>
  )
}

export default BriefCardComponent