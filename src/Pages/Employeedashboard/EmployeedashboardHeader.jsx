import React from "react";
import edh from "./edh.module.css" 

const EmployeedashboardHeader = ({title, icon} ) => {
  return (
    <div className={edh.subcontainertopbar}>
      <h4 className={edh.h4}>{title}</h4>
      {icon}
    </div>
  );
};

export default EmployeedashboardHeader;
