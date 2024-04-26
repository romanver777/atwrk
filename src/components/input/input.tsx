import { UseFormRegister } from "react-hook-form";
import type { TForm } from "../profile-form/profile-form";
import style from "./input.module.css";

type Props = {
  label: string;
  name: "name" | "username" | "email" | "city" | "phone" | "company";
  value: string;
  register: UseFormRegister<TForm>;
  error?: string;
  reset?: () => void;
  isChanging: boolean;
};

function Input({ label, name, value, register, error, isChanging }: Props) {
  return (
    <div className={style["input__field"]}>
      <label className={style["input__label"]}>{label}</label>
      <input
        type="search"
        id={name}
        className={
          isChanging
            ? `${style["input__inp"]} ${style["input__inp_changing"]}`
            : style["input__inp"]
        }
        {...register(name, {
          required: "Это обязательное поле",
        })}
        defaultValue={value || ""}
      />
      {error && <div className={style["input_error"]}>{error}</div>}
    </div>
  );
}

export default Input;
