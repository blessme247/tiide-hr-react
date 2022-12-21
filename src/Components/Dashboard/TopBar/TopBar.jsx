import React from 'react'
import tiidehrlogo from '../../../Assets/images/logo.png'

// css import
import topbarstyling from './topbar.module.css'
import TopBarDate from './TopBarDate'
import TopBarTime from './TopBarTime'


function TopBar() {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const firstName = currentUser[0].firstName;
  const lastName = currentUser[1].lastName;


  return (
    <section className={topbarstyling.topbar}>
      {/* <!-- logo --> */}
      <img src={tiidehrlogo} alt="biz logo" className={topbarstyling.comlogo} />

      {/* <!-- time and date --> */}
      <div className={topbarstyling.topbarinfo}>
        <div className={topbarstyling.timedate}>
        <TopBarTime />
          <TopBarDate />
          
        </div>

        {/* <!-- topbar profile --> */}

        <div className={topbarstyling.profilediv} >

          <div className={topbarstyling.profiledetials}>
            <p className={topbarstyling.smallTextBold} id="userFullName">
              {`${firstName} ${lastName}`}
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default TopBar