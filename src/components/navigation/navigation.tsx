/// <reference types="vite-plugin-svgr/client" />
import { useLocation, useNavigate } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import ArrowIcon from "@/assets/arrow-left.svg?react";
import arrowMobIcon from "@/assets/arrow-left-mob.svg";
import style from "./navigation.module.css";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onBack = () => {
    if (location.state) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className={style.navigation}>
      <button className={style.navigation__link} onClick={onBack}>
        <BrowserView className={style["navigation__icon-wr"]}>
          <ArrowIcon className={style["navigation__icon"]} />
        </BrowserView>
        <MobileView className={style["navigation__mobIcon-wr"]}>
          <img src={arrowMobIcon} alt="Back icon" />
        </MobileView>
        <span className={style.navigation__txt}>Назад</span>
      </button>
    </div>
  );
};

export default Navigation;
