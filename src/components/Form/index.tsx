import React, { useState } from "react";
import Button from "../Buttton";
import style from "./Form.module.scss";
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from "uuid";

export default function Form({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}) {
  const [taskdsc, setTaskdsc] = useState("");
  const [time, setTime] = useState("00:00:00");

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const tasks = { task: taskdsc, time };

    setTasks((tasksOld: any) => [
      ...tasksOld,
      {
        ...tasks,
        select: true,
        complete: false,
        id: uuidv4(),
      },
    ]);

    setTaskdsc("");
    setTime("00:00:00");
  };

  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que você quer estudar?"
          value={taskdsc}
          onChange={(e) => setTaskdsc(e.target.value)}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>

      <Button title="Adicionar" type="submit" />
    </form>
  );
}
