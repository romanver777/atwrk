import { useCallback, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loadProfile, setData, closeModal } from "@/store/profile/profile";
import PageLayout from "@/components/page-layout/page-layout";
import Header from "@/components/header/header";
import Navigation from "@/components/navigation/navigation";
import Profile from "@/components/profile/profile";
import ModalSuccess from "@/components/modal-success/modal-success";
import type { SubmittedData } from "@/components/profile-form/profile-form";

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { userId } = useParams();
  const timer = useRef<number>();

  const profile = useAppSelector((state) => state.profile.data);
  const loading = useAppSelector((state) => state.profile.loading);
  const modal = useAppSelector((state) => state.profile.modal);

  useEffect(() => {
    if (userId) dispatch(loadProfile(+userId));
  }, [userId, dispatch]);

  const onCloseModal = useCallback(() => dispatch(closeModal()), [dispatch]);

  useEffect(() => {
    if (modal) {
      timer.current = setTimeout(() => onCloseModal(), 4000);
    }
    return () => clearTimeout(timer.current);
  }, [modal, onCloseModal]);

  const onSave = (data: SubmittedData) => dispatch(setData(data));

  if (loading) return <div style={{ textAlign: "center" }}>Загружаем..</div>;

  return (
    <PageLayout>
      <Header />
      <Navigation />
      <Profile user={profile} onSave={onSave} />
      {modal && <ModalSuccess onClose={onCloseModal} />}
    </PageLayout>
  );
};

export default ProfilePage;
