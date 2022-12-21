import React from "react";
import edh from "./edh.module.css";

const Empitemdisplay = ({title, text}) => {
  return (

    
      <div className={edh.itemdisplay}>
        <h5>{title}</h5>
        <p className={edh.text}>
         {text}
        </p>
      
    </div>
    
  );
};

export default Empitemdisplay;
