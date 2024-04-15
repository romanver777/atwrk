import { useState } from "react";
import UserCard from "../user-card/user-card";
import AvatarImg from "@/assets/user.png";
import type { User } from "@/store/users-list/types";
import style from "./user-list.module.css";

type Props = {
  title: string;
  users: User[];
  actions: string[];
  onAction: (name: string, id: number) => void;
};

const UserList = ({ title, users, actions, onAction }: Props) => {
  const [active, setActive] = useState<number | null>(null);

  const onSetActive = (id: number) => {
    if (id === active) {
      setActive(null);
      return;
    }
    setActive(id);
  };

  return (
    <div className={style["user-list"]}>
      <h2 className={style["user-list__title"]}>{title}</h2>
      {users.length > 0 ? (
        <ul className={style["user-list__ul"]}>
          {users.map((user) => (
            <li key={user.id} className={style["user-list__li"]}>
              <UserCard
                id={user.id}
                name={user.name}
                city={user.address.city}
                company={user.company.name}
                avatar={AvatarImg}
                isArchived={title === "Архив"}
                isOpen={active === user.id}
                onOpenModal={onSetActive}
                actions={actions}
                onAction={onAction}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h4 className={style["user-list__empty"]}>Пока пусто</h4>
      )}
    </div>
  );
};

export default UserList;
