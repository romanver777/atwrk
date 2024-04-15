import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  loadUsers,
  setArchived,
  setActive,
  removeItem,
} from "@/store/users-list/users-list";
import PageLayout from "@/components/page-layout/page-layout";
import Header from "@/components/header/header";
import Catalog from "@/components/catalog/catalog";
import UserList from "@/components/user-list/user-list";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.users.active);
  const archived = useAppSelector((state) => state.users.archived);
  const loading = useAppSelector((state) => state.users.loading);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const handleAction = (name: string, id: number) => {
    switch (name) {
      case "Архивировать":
        dispatch(setArchived(id));
        break;
      case "Скрыть":
        dispatch(removeItem(id));
        break;
      case "Активировать":
        dispatch(setActive(id));
        break;
    }
  };

  if (loading) return <div style={{ textAlign: "center" }}>Загружаем..</div>;

  return (
    <PageLayout>
      <Header />
      <Catalog>
        <UserList
          title="Активные"
          users={active}
          actions={["Редактировать", "Архивировать", "Скрыть"]}
          onAction={handleAction}
        />
        <UserList
          title="Архив"
          users={archived}
          actions={["Активировать"]}
          onAction={handleAction}
        />
      </Catalog>
    </PageLayout>
  );
};

export default MainPage;
