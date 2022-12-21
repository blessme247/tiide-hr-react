import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./privacy.module.css";

function PrivacyText() {
  return<>
  <h1 className={`${styles.heading} ${styles.container}`}>Privacy Policy</h1>
      <section className= {`${styles.introductionSection} ${styles.section} ${styles.container}`}>
        <h4 className={styles.policyTitle}>Introduction</h4>
        <p className={styles.policyText}>This Tiide HR Privacy Policy describes how we collect, use, disclose, 
            transfer, and store your personal data. It also describes your choices
             and rights related to your personal data.</p>
      </section>

      <section className= {`${styles.reasonSection} ${styles.section} ${styles.container}`}>
        <h4 className={styles.policyTitle}>What is this Privacy Notice For?</h4>
        <p className={styles.policyText}>Tiide HR values your Personal Data 
            and we are committed to protecting your privacy whenever you interact with us.
             Please read this Privacy Notice to understand our policies, processes 
             and procedures regarding the processing of your personal data. By this Notice,
              We explain to you how your Personal Data is collected, used, managed and transferred
               by Tiide HR and also explain how you can update your Personal Data with us and exercise 
            your rights in respect of the Personal Data provided to us.</p>
      </section>

      <section className= {`${styles.whenSection} ${styles.section} ${styles.container}`}>
        <h4 className={styles.policyTitle}>When Do We Collect Your Personal Data?</h4>
        <p className={styles.policyText}>We collect Personal Data that you give to us, for example, where you
             create an account with us, request for further information about our
              product, fill a form, apply for a job through our 
            website or you subscribe to newsletters on our website.</p>
      </section>

      <section className= {`${styles.purposeSection} ${styles.section} ${styles.container}`}>
        <h4 className={styles.policyTitle}>What Purpose do we use your Personal Data for?</h4>
        <p className={styles.policyText}>We may process your Personal Data to communicate with you
             (including sending emails to you), 
             provide you with further information about our product and how 
             we can serve you better, respond to your complaints,
              or to fulfil our contractual obligations with you.</p>
      </section>

      <section className= {`${styles.whoSection} ${styles.section} ${styles.container}`}>
        <h4 className={styles.policyTitle}>Who Do We Share Your Personal Data With?</h4>
        <p className={styles.policyText} >We respect your privacy and we limit disclosure of your Personal Data
             to third parties. We do not sell, give or trade any Personal Data 
             that We obtain from you to any third party for data-mining or marketing 
             purposes. However, We may share your Personal Data with  
             service providers engaged by us to provide services to 
            Tiide HR subject to appropriate data security and protection. </p>
      </section>

      <section className= {`${styles.dataSecuritySection} ${styles.section} ${styles.container}`}>
                <h4 className={styles.policyTitle}>Security of Your Personal Data</h4>
                <p className={styles.policyText}>We take security of your Personal Data serious and We make every 
                    effort to keep your Personal Data secure. We have put in place 
                    technological and organizational procedures, including requiring
                     our staff and any third parties who carry out any work on 
                     our behalf to comply with appropriate security 
                    standards in order to protect your Personal Data. </p>
      </section>
        
      <section className={`${styles.dataRetentionSection} ${styles.section} ${styles.container}`}>
        <h4 className={styles.policyTitle}>Retention of Your Personal Data</h4>
        <p className={styles.policyText}>We take appropriate measures to ensure that your Personal Data is 
            only processed for the minimum period necessary in line with 
            the purposes set out in this Notice or as required by applicable 
            laws, until a time it is no longer required or has no use.
             Once your Personal Data is no longer required.
             We destroy it in a safe and secure manner.</p>
      </section>


      <section className= {`${styles.rightsSection} ${styles.section} ${styles.container}`}>
        <h4 className={styles.policyTitle}>Your Rights</h4>
        <p className={styles.policyText}>Tiide HR collects Personal Data only for the purposes identified in 
            this Policy and such information cannot be reused for 
            another purpose that is incompatible with the original purpose. </p>
            <p className= {`${styles.rightsIntro} ${styles.policyText}`}>
                You can exercise the following rights with respect to your Personal Data with Tiide HR:
            </p>

            <ul className={styles.rightsListWrapper}>
                <li className={styles.listItem }>request for and access your Personal Data collected and stored by Tiide HR;</li>
                <li className={styles.listItem} >request rectification and modification of Personal Data kept by Tiide HR;</li>
                <li className={styles.listItem} >request for deletion of your Personal Data;</li>
                <li className={styles.listItem}>be informed of and entitled to provide consent prior to the 
                    processing of Personal Data for purposes other than that for 
                    which the Personal Data were collected;
                </li>
                <li className={styles.listItem}>request that Tiide HR restricts processing of your Personal Data; and </li>
                <li className={styles.listItem}>complain to a regulator or data protection authority about our collection and 
                    use of your personal data. For more information,
                     please contact your local data protection authority.</li>
            </ul>
           <p className={`${styles.rightsEnding} ${styles.policyText}`}>Tiide HR will not discriminate against you for exercising your rights. 
           You can exercise the applicable rights by contacting us via 
        </p>
      </section>

      <section className= {`${styles.updateSection} ${styles.section} ${styles.container}`}>
        <h4 className={styles.policyTitle}>Updates and Changes to our Privacy Policy</h4>
        <p className={styles.policyText}>
            Due to constant changes in technology and regulatory requirements,
             we may need to change our privacy policies or update this Notice
             from time to time. You will always be able to find
            the most recent version of our updated privacy policy on this site.
            You will also be informed if any change is made.
        </p>
      </section>

       <section className= {`${styles.contactSection} ${styles.section} ${styles.container}`}>
        <h4 className={styles.policyTitle}>Contact and Communication</h4>
        <p className={styles.policyText}>
            If you would like further information on this Notice, you may contact
            us via  <Link to="/contact" className= {styles.contactLink}>our contact page.</Link>
        </p>
      </section>
  </>
  
}

export default PrivacyText