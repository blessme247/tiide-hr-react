import React, { useState } from 'react'
import Createlevelbutton from './Createbutton'
import LevelmanagementTable from './levelManagementTable'
import Leveltabletitle from './levelTableTitle'
import styles from './levelmanagement.module.css'
import PopupForm from './PopupForm'
import LevelPreview from './LevelPreview'



function Levels() {

  const [openPopup, setOpenpopup] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [levelToEdit, setLevelToEdit] = useState({});
  const [idToEdit, setIdToEdit] = useState();

  // const toggleEditMode = () => {
  //   // alert("tog edit")
  //   setEditMode(!editMode)
  // }

  // on click of the poppopup button state the openpopup state to true
  const showModal = () => {
    setOpenpopup(true);
    // setOpenpopup(!openPopup);
  };

  // on click of the cancel button, set the state back to false
  const closeModal = () => {
    setOpenpopup(false);
  };
  return (
    <>
      <div className={styles.mainContent}>

        <Leveltabletitle />

        <LevelmanagementTable setEditMode={setEditMode} setLevelToEdit={setLevelToEdit} setIdToEdit={setIdToEdit} />

        <Createlevelbutton clickFunction={showModal} />

        {openPopup ? <PopupForm closeModal={closeModal} /> : null}


        {editMode ? (<div className={styles.blurContainer}>
          <div className={styles.blur} onClick={() => setEditMode(false)}>          </div>
          <LevelPreview levelToEdit={levelToEdit} setEditMode={setEditMode} idToEdit={idToEdit} />
        </div>)
          : null}

      </div>
    </>
  )
}

export default Levels
