import style from "./catalog.module.css";

type Props = {
  children: React.ReactNode;
};

const Catalog = ({ children }: Props) => {
  return <div className={style["catalog"]}>{children}</div>;
};

export default Catalog;
