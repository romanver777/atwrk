import { Link } from "react-router-dom";
import LogoIcon from "@/assets/logo-sign.svg";
import LogoTextIcon from "@/assets/logo-text.svg";
import FavoriteIcon from "@/assets/favorite.svg";
import NotificationIcon from "@/assets/notification.svg";
import UserImg from "@/assets/user.png";

import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header__container}>
        <div className={style["header__logo"]}>
          <Link to="/" className={style["header__logo-link"]}>
            <img src={LogoIcon} alt="at-work icon" width={24} height={24} />
          </Link>
          <Link to="/" className={style["header__logo-link"]}>
            <img
              src={LogoTextIcon}
              alt="at-work name icon"
              width={92}
              height={20}
            />
          </Link>
        </div>
        <div className={style["header__menu"]}>
          <div className={style["header__serv"]}>
            <Link to="#" className={style["header__serv-link"]}>
              <img
                src={FavoriteIcon}
                alt="favorite icon"
                width={24}
                height={24}
              />
            </Link>
            <Link to="#" className={style["header__serv-link"]}>
              <img
                src={NotificationIcon}
                alt="notification icon"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <Link to="#" className={style["header__user"]}>
            <div className={style["header__user-img-wr"]}>
              <img
                src={UserImg}
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
