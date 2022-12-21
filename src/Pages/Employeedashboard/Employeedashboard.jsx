import React from "react";
import TopBar from "../../Components/Dashboard/TopBar/TopBar";
import EmployeeSideNav from "./EmployeeSideNav";
import edsh from "./employeedashboard.module.css";
import EmployeedashboardHeader from "./EmployeedashboardHeader";
import EmpActivitiesContainer from "./EmpActivitiesContainer";
import EmpNotificationsContainer from "./EmpNotificationsContainer";
import { FaBell, FaCheck, FaGripLines, FaPlusCircle } from "react-icons/fa";
import EmpTaskContainer from "./EmpTaskContainer";


const Employeedashboard = () => {
  return (
    <>
      <TopBar />
      <section className={edsh.employeedashboardcontent}>
        <EmployeeSideNav />

        <div className={edsh.employeesectioncontainer}>
          <div className={edsh.employeesectionsubcontainer}>
            <section className={edsh.subsubcontainer}>
              <EmployeedashboardHeader title="Activities" icon={<FaGripLines/>} />
              <div className={edsh.subsubcontainerbody}>
                <EmpActivitiesContainer />
              </div>
            </section>

            {/* NOTIFICATION  */}
            <section className={edsh.subsubcontainer}>
              <EmployeedashboardHeader title="Notifications" icon={<FaBell/>} />
              <div className={edsh.subsubcontainerbody}>
                <EmpNotificationsContainer />
              </div>
            </section>
          </div>

          <section className={edsh.subsubcontainer}>
            <EmployeedashboardHeader title="Todo" icon={<FaPlusCircle/>} />
            <div className={edsh.subsubcontainerbody}>
              <EmpTaskContainer />

            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Employeedashboard;
