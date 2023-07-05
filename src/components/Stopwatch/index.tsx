import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../Buttton";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";

interface Props {
  select: ITask | undefined;
  finishTask: () => void;
}

export default function Stopwatch({ select, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (select?.time) {
      setTime(timeToSeconds(select.time));
    }
  }, [select]);

  function regressive(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return regressive(count - 1);
      }
      
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inice o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)} title="Começar!" />
    </div>
  );
}
