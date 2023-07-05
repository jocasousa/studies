import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import style from "./App.module.scss";
import Stopwatch from "../components/Stopwatch";
import { ITask } from "../types/task";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [select, setSelect] = useState<ITask>();

  function selectTask(taskSelected: ITask) {
    setSelect(taskSelected);
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        select: task.id === taskSelected.id ? true : false,
      }))
    );
  }

  function finishTask() {
    if (select) {
      setSelect(undefined);
      setTasks((tasksOld) =>
        tasksOld.map((task) => {
          if (task.id === select.id) {
            return {
              ...task,
              select: false,
              complete: true,
            };
          }

          return task;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} taskSelected={selectTask} />
      <Stopwatch select={select} finishTask={finishTask} />
    </div>
  );
}

export default App;
