import style from "./Item.module.scss";
import { ITask } from "../../../types/task";

interface Props extends ITask {
  taskSelected: (taskSelected: ITask) => void;
}

export default function Item({
  task,
  time,
  select,
  complete,
  id,
  taskSelected,
}: Props) {
  return (
    <>
      <li
        className={`${style.item} ${select ? style.itemSelecionado : ""} ${
          complete ? style.itemCompletado : ""
        }`}
        onClick={() =>
          !complete && taskSelected({ task, time, select, complete, id })
        }
      >
        <h3>{task}</h3>
        <span>{time}</span>
        {complete && (
          <span
            className={style.concluido}
            aria-label="tarefa completada"
          ></span>
        )}
      </li>
    </>
  );
}
