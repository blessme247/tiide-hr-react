import React from "react";
import Empitemdisplay from "./Empitemdisplay";

const EmpNotificationsContainer = () => {
  const notification = [
    {
      title: "Games Night",
      body: "Nothing special",
    },
    {
      title: "Games Night",
      body: "Nothing special",
    },
  ];

  return (
    <>
      {notification.map((item, index) => {
        return (
          <Empitemdisplay text={item.body} title={item.title} key={index} />
        );
      })}
    </>
  );
};

export default EmpNotificationsContainer;
