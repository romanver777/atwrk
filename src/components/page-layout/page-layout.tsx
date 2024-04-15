import style from "./page-layout.module.css";

type Props = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return <div className={style["page-layout"]}>{children}</div>;
};

export default PageLayout;
