/// <reference types="vite-plugin-svgr/client" />
import { BrowserView, MobileView } from "react-device-detect";
import DropDown from "../drop-down/drop-down";
import MenuIcon from "@/assets/menu-dots.svg?react";
import MenuIconMobile from "@/assets/menu-dots-mobile.svg?react";
import style from "./user-card.module.css";

type Props = {
  id: number;
  name: string;
  city: string;
  company: string;
  avatar: string;
  isArchived: boolean;
  isOpen: boolean;
  onOpenModal: (id: number) => void;
  actions: string[];
  onAction: (name: string, id: number) => void;
};

const UserCard = ({
  id,
  name,
  city,
  company,
  avatar,
  isArchived,
  isOpen,
  onOpenModal,
  actions,
  onAction,
}: Props) => {
  const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onOpenModal(id);
  };

  const handleAction = (name: string) => onAction(name, id);

  return (
    <div className={style["user-card"]}>
      <div className={style["user-card__img-wr"]}>
        <img
          src={avatar}
          alt="avatar"
          className={
            isArchived
              ? `${style["user-card__img"]} ${style["user-card__img_arch"]}`
              : style["user-card__img"]
          }
        />
      </div>
      <div className={style["user-card__content"]}>
        <div className={style["user-card__top"]}>
          <div className={style["user-card__name-wr"]}>
            <h3
              className={
                isArchived
                  ? `${style["user-card__name"]} ${style["user-card__name_arch"]}`
                  : style["user-card__name"]
              }
            >
              {name}
            </h3>
            <button
              className={style["user-card__btn"]}
              onClick={handleOpenModal}
            >
              <BrowserView className={style["user-card__icon-wr"]}>
                <MenuIcon className={style["user-card__icon"]} />
              </BrowserView>
              <MobileView className={style["user-card__icon-wr"]}>
                <MenuIconMobile className={style["user-card__icon_mob"]} />
              </MobileView>
            </button>
          </div>
          <div
            className={
              isArchived
                ? `${style["user-card__comp"]} ${style["user-card__comp_arch"]}`
                : style["user-card__comp"]
            }
          >
            {company}
          </div>
        </div>
        <div
          className={
            isArchived
              ? `${style["user-card__city"]} ${style["user-card__city_arch"]}`
              : style["user-card__city"]
          }
        >
          {city}
        </div>
      </div>
      {isOpen && (
        <DropDown
          onClose={() => onOpenModal(id)}
          actions={actions}
          onAction={handleAction}
        />
      )}
    </div>
  );
};

export default UserCard;
