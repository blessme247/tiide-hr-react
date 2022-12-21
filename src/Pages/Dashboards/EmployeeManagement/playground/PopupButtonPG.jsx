import React from 'react'

// the button recieves the clickfunction from the main container as a prop and is destructured here
function PopupButtonPG({ clickFunction }) {

  return (
    <button
      className="primary-button"
      // the onclick function is called here
      onClick={clickFunction}>
      Popup
    </button>
  )
}

export default PopupButtonPG