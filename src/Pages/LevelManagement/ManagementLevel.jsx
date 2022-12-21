import React from 'react'
import SideNav from '../../Components/Dashboard/SideNav/SideNav'
import TopBar from '../../Components/Dashboard/TopBar/TopBar'
import Levels from './levels'
import styles from './levelmanagement.module.css'
import levelServices from '../../_Helper/_Redux/redux/LevelManagement/LevelMgt.services'
import { loadLevels } from '../../_Helper/_Redux/redux/LevelManagement/LevelMgt.action'
import { useDispatch } from 'react-redux'

function ManagementLevel() {
  const dispatch = useDispatch();

  levelServices.getAllLevels().then((levels) => {
    dispatch(loadLevels(levels))
  })


  return (
    <>
      <TopBar />

      <div className={styles.mainContainer}>
        <SideNav />
        <Levels />
      </div>
    </>
  )
}

export default ManagementLevel