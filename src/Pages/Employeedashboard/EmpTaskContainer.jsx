import React from 'react'
import Empitemdisplay from "./Empitemdisplay";
import TodoIcons from './TodoIcons';
import tdcss from './todoicon.module.css'

const EmpTaskContainer = () => {

    const task = [
        {
            title: "Make WireFrame & Sketch",
            body: "Nothing special",
          },
          {
            title: "UI Team meeting",
            body: "Nothing special",
          },
          {
            title: "UI Team meeting",
            body: "Nothing special",
          },
          {
            title: "UI Team meeting",
            body: "Nothing special",
          },
    ];


    return (
        <>
          {task.map((item, index) => {
            return (
                <div className={tdcss.todostyling}>
                <Empitemdisplay text={item.body} title={item.title} key={index} />
                <TodoIcons/>
                </div>
            );
          })}
        </>
      );
}

export default EmpTaskContainer