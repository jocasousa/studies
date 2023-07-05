import style from "./Button.module.scss";

export default function Button({
  title,
  type,
  onClick,
}: {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {title}
    </button>
  );
}
