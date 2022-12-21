import React from 'react'
import People3 from "../../Assets/images/people3.jpg";
import People4 from "../../Assets/images/people4.jpg";
import Woman from "../../Assets/images/woman.jpeg";
import Communication from "../../Assets/images/610413.png";
import Leave from "../../Assets/images/4550071.png";
import Employee from "../../Assets/images/1283187.png";
import styles from "./homepage.module.css";

const Services = () => {
  return (
    <>
   <section id="services" className={styles.servicesSection} >
  <div className={styles.container}>
    <div className={styles.servicesWrapper}>
      <div className={`${styles.servicesSectionHeading} ${styles.sectionHead}`}>Services</div>
      <div className= {`${styles.service} ${styles.topService}`}>
        <div className={`${styles.serviceImageWrapper} ${styles.service1} ${styles.mbMediumScreen}`}>
          <img src={People3} alt="people" />
        </div>
        <div className= {`${styles.serviceText} ${styles.service2} ${styles.mbMediumScreen}`}>
          <div className={styles.serviceTextImage}>
            <img src={Communication} alt= "Communication icon" />
          </div>
          <h2 className= {styles.serviceTextSummary}>Centralized Communication</h2>
          <p className= {styles.serviceTextDescription}>
            Share project plans and information in a central hub.
          </p>
        </div>
        <div className={`${styles.serviceImageWrapper} ${styles.service3} ${styles.mbMediumScreen}`}>
          <img src={Woman} alt="Woman" />
        </div>
        <div className={`${styles.serviceText} ${styles.service4} ${styles.mbMediumScreen}`}>
          <div className= {styles.serviceTextImage}>
            <img src={Leave} alt="Leave icon" />
          </div>
          <h2 className= {styles.serviceTextSummary}>Leave Management</h2>
          <p className= {styles.serviceTextDescription}>
            Manage leave application and approval seamlessly with custom
            leave management policies.
          </p>
        </div>
        <div className={`${styles.serviceImageWrapper} ${styles.service5} ${styles.mbMediumScreen}`}>
          <img src={People4} alt="People" />
        </div>
        <div className= {`${styles.serviceText} ${styles.serviceTextSecondary} ${styles.service6} ${styles.mbMediumScreen}`}>
          <div className={styles.serviceTextImage}>
            <img src={Employee} alt="employees icon" />
          </div>
          <h2 className={styles.serviceTextSummary}>Employee Management</h2>
          <p className= {styles.serviceTextDescription}>
            Manage and
            interact with your employees. Enable employee perform at
            their best and achieve business goals
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Services