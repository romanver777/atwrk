import { useState } from "react";
import ProfileForm from "../profile-form/profile-form";
import userImg from "@/assets/user.png";
import type { User } from "@/store/users-list/types";
import type { SubmittedData } from "../profile-form/profile-form";
import style from "./profile.module.css";

type Props = {
  user: User | null;
  onSave: (data: SubmittedData) => void;
};

const Profile = ({ user, onSave }: Props) => {
  const menuSett = [
    "Данные профиля",
    "Рабочее пространство",
    "Приватность",
    "Безопасность",
  ];
  const [activeTab, setActiveTab] = useState(menuSett[0]);

  const onActiveTab = (e: React.MouseEvent<HTMLButtonElement>) =>
    setActiveTab((e.target as HTMLButtonElement).innerText);

  return (
    <div className={style.profile}>
      <div className={style.profile__sett}>
        <div className={style["profile__sett-img-wr"]}>
          <img
            src={userImg}
            alt="user img"
            className={style["profile__sett-img"]}
          />
        </div>
        <ul className={style["profile__sett-ul"]}>
          {menuSett.map((item, ind) => (
            <li key={ind} className={style["profile__sett-li"]}>
              <button
                className={
                  activeTab === item
                    ? `${style["profile__sett-btn"]} ${style["profile__sett-btn_act"]}`
                    : style["profile__sett-btn"]
                }
                onClick={onActiveTab}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.profile__data}>
        <h3 className={style["profile__data-title"]}>{activeTab}</h3>
        {activeTab == menuSett[0] && (
          <ProfileForm user={user} onSave={onSave} />
        )}
      </div>
    </div>
  );
};

export default Profile;
