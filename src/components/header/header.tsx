/// <reference types="vite-plugin-svgr/client" />
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-sign.svg";
import logoTextIcon from "@/assets/logo-text.svg";
import FavoriteIcon from "@/assets/favorite.svg?react";
import NotificationIcon from "@/assets/notification.svg?react";
import userImg from "@/assets/user.png";

import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header__container}>
        <div className={style["header__logo"]}>
          <Link to="/" className={style["header__logo-link"]}>
            <img src={logoIcon} alt="at-work icon" width={24} height={24} />
          </Link>
          <Link to="/" className={style["header__logo-link"]}>
            <img
              src={logoTextIcon}
              alt="at-work name icon"
              width={92}
              height={20}
            />
          </Link>
        </div>
        <div className={style["header__menu"]}>
          <div className={style["header__serv"]}>
            <Link to="#" className={style["header__serv-link"]}>
              <FavoriteIcon className={style["header__serv-icon-fav"]} />
            </Link>
            <Link to="#" className={style["header__serv-link"]}>
              <NotificationIcon className={style["header__serv-icon-notif"]} />
            </Link>
          </div>
          <Link to="#" className={style["header__user"]}>
            <div className={style["header__user-img-wr"]}>
              <img
                src={userImg}
                alt="user foto"
                className={style["header__user-img"]}
              />
            </div>
            <div className={style["header__user-name"]}>User name</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
