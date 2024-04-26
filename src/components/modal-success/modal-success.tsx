import crossIcon from "@/assets/cross.svg";
import okIcon from "@/assets/ok.svg";
import style from "./modal-success.module.css";

type Props = {
  onClose: () => void;
};

const ModalSuccess = ({ onClose }: Props) => {
  return (
    <div className={style["modal-success"]}>
      <div className={style["modal-success__box"]}>
        <button className={style["modal-success__btn"]} onClick={onClose}>
          <img src={crossIcon} alt="success" width={28} height={28} />
        </button>
        <img
          className={style["modal-success__okIcon"]}
          src={okIcon}
          alt="success"
          width={84}
          height={84}
        />
        <div className={style["modal-success__text"]}>Изменения сохранены!</div>
      </div>
    </div>
  );
};

export default ModalSuccess;
