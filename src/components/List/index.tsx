import { ITask } from "../../types/task";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
  tasks: ITask[];
  taskSelected: (taskSelected: ITask) => void;
}

export default function List({ tasks, taskSelected }: Props) {
  return (
    <aside className={style.ListaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item taskSelected={taskSelected} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}
