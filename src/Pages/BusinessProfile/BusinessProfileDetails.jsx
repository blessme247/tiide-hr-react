import React from 'react'
import { useSelector } from 'react-redux'
import axiosInstance from '../../_Helper/_Redux/AxiosConfig/axiosConfig'
import userServices from '../../_Helper/_Redux/redux/User/user.services'
import styles from "./profile.module.css"



const BusinessProfileDetails =  () => {

   
    const  {currentUser} = useSelector((state) => state.currentUserStore);
    let business = currentUser.business; 

     
    

  return (
    <>
        <section className={styles.profileDetailsContainer}>
            <h4>About my business </h4>
            {/* <p className={styles.pageIntro}>Manage your business account.</p> */}
 
            
            <div className={styles.profileDetailsHeader}>
                <div className={styles.title}>
                    Business Name
                </div>  
                <div className={styles.profileDetails}>
                    {business?.name}
                </div>
            </div>
            <div className={styles.profileDetailsHeader}>
                <div className={styles.title}>
                    Business Email
                </div>  
                <div className={styles.profileDetails}>
                    {business?.email}
                </div>
            </div>
            <div className={styles.profileDetailsHeader}>
                <div className={styles.title}>
                    Business Address
                </div>  
                <div className={styles.profileDetails}>
                    {business?.address}
                </div>
            </div>
            <div className={styles.profileDetailsHeader}>
                <div className={styles.title}>
                    Business CAC No.
                </div>  
                <div className={styles.profileDetails}>
                    {business?.rcno}
                </div>
            </div>
            <div className={styles.profileDetailsHeader}>
                <div className={styles.title}>
                    Business TaxID
                </div>  
                <div className={styles.profileDetails}>
                    {business?.taxid}
                </div>
            </div>
        </section>

    </>
  )
}

export default BusinessProfileDetails