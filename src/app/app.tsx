import { Route, Routes } from "react-router-dom";
import MainPage from "./main-page/main-page";
import ProfilePage from "./profile-page/profile-page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/users/:userId" element={<ProfilePage />} />
    </Routes>
  );
};

export default App;
