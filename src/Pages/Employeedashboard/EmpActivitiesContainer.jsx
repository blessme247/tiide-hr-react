import React from "react";
import Empitemdisplay from "./Empitemdisplay";

const EmpActivitiesContainer = () => {
  const activities = [
    {
      title: "Morning Standups",
      body: "Morning standups to observe announcements, attendance and assigned tasks. Time: 9:00(AM)",
    },
    {
      title: "Morning Standups",
      body: "Morning standups to observe announcements, attendance and assigned tasks. Time: 9:00(AM)",
    },
  ];

  return (
    <>
      {activities.map((item, index) => {
        return (
          <Empitemdisplay text={item.body} key={index} title={item.title} />
        );
      })}
    </>
  );
};

export default EmpActivitiesContainer;
