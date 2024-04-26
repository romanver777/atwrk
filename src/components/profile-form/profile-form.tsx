import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../input/input";
import type { User } from "@/store/users-list/types";
import style from "./profile-form.module.css";

export type TForm = {
  name: string;
  username: string;
  email: string;
  city: string;
  phone: string;
  company: string;
};

export type SubmittedData = {
  name?: string;
  username?: string;
  email?: string;
  city?: string;
  phone?: string;
  company?: string;
};

type Props = {
  user: User | null;
  onSave: (data: SubmittedData) => void;
};

const ProfileForm = ({ user, onSave }: Props) => {
  const {
    reset,
    resetField,
    register,
    formState: { isDirty, dirtyFields },
    handleSubmit,
    formState: { errors },
  } = useForm<TForm>({
    defaultValues: {
      name: user?.name,
      username: user?.username,
      email: user?.email,
      phone: user?.phone,
      city: user?.address.city,
      company: user?.company.name,
    },
  });

  const onSubmit: SubmitHandler<TForm> = (data: { [key: string]: string }) => {
    if (!isDirty) return;

    const result: { [key: string]: string } = {};

    for (const key of Object.keys(dirtyFields)) {
      result[key] = data[key];
    }

    onSave(result);
    reset(data);
  };

  return (
    <form className={style["profile-form"]} onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Имя"
        name="name"
        value={user?.name || ""}
        register={register}
        error={errors.name?.message}
        reset={() => resetField("name")}
        isChanging={Object.prototype.hasOwnProperty.call(dirtyFields, 'name')}
      />
      <Input
        label="Никнейм"
        name="username"
        value={user?.username || ""}
        register={register}
        error={errors.username?.message}
        isChanging={Object.prototype.hasOwnProperty.call(dirtyFields, 'username')}
      />
      <Input
        label="Почта"
        name="email"
        value={user?.email || ""}
        register={register}
        error={errors.email?.message}
        isChanging={Object.prototype.hasOwnProperty.call(dirtyFields, 'email')}
      />
      <Input
        label="Город"
        name="city"
        value={user?.address.city || ""}
        register={register}
        error={errors.city?.message}
        isChanging={Object.prototype.hasOwnProperty.call(dirtyFields, 'city')}
      />
      <Input
        label="Телефон"
        name="phone"
        value={user?.phone || ""}
        register={register}
        error={errors.phone?.message}
        isChanging={Object.prototype.hasOwnProperty.call(dirtyFields, 'phone')}
      />
      <Input
        label="Название компании"
        name="company"
        value={user?.company.name || ""}
        register={register}
        error={errors.company?.message}
        isChanging={Object.prototype.hasOwnProperty.call(dirtyFields, 'company')}
      />
      <input
        type="submit"
        className={style["profile-form__btn"]}
        value="Сохранить"
      />
    </form>
  );
};

export default ProfileForm;
