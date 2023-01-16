import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Content from "src/components/Content/Content";
import HeaderContainer from "src/components/Header/HeaderContainer";
import ProfilePage from "src/pages/profile/ProfilePage";
import DialogsPage from "src/pages/dialogs/DialogsPage";
import UsersPage from "src/pages/users/UsersPage";
import LoginPage from "src/pages/login/LoginPage";

function App() {
  return (
    <div className="appWrapper">
      <HeaderContainer />
      <Navbar/>
      <Content>
        <Routes>
          <Route exact path="/profile/" element={<ProfilePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route exact path="/dialogs" element={<DialogsPage />} />
          <Route exact path="/users" element={<UsersPage />} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      </Content>
      <Footer/>
    </div>
  );
}

export default App;
