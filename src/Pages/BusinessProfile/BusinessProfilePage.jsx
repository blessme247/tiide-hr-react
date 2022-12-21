import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import SideNav from '../../Components/Dashboard/SideNav/SideNav'
import TopBar from '../../Components/Dashboard/TopBar/TopBar'
import { loadCurrentUser } from '../../_Helper/_Redux/redux/User/user.action'
import userServices from '../../_Helper/_Redux/redux/User/user.services'
import BusinessProfileDetails from './BusinessProfileDetails'
import styles from "./profile.module.css"

const BusinessProfilePage = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
  
    userServices.getCurrentUser().then((response)=> {
      dispatch(loadCurrentUser(response))

    })


  }, [])


  return (
    <>
    <TopBar />

    <section className={styles.businessProfile}>

        <SideNav />

        <section className={styles.businessProfilePage}>

            <BusinessProfileDetails/>
        </section>
    </section>


    </>
  )
}

export default BusinessProfilePage