import style from "./drop-down.module.css";
import { useEffect, useRef } from "react";

type Props = {
  isArchived: boolean;
  onClose: () => void;
  actions: string[];
  onAction: (name: string) => void;
};

const DropDown = ({ isArchived, onClose, actions, onAction }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        onClose();
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  });

  const handleAction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onAction((e.target as HTMLButtonElement).innerText);
  };

  return (
    <div
      className={
        isArchived
          ? `${style["drop-down"]} ${style["drop-down_arch"]}`
          : style["drop-down"]
      }
      ref={ref}
    >
      <ul className={style["drop-down__ul"]}>
        {actions.map((item, ind) => (
          <li key={ind} className={style["drop-down__li"]}>
            <button className={style["drop-down__btn"]} onClick={handleAction}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
