import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Content from "src/components/Content/Content";
import Dialogs from "src/pages/dialogs/Dialogs";
import Profile from "src/pages/profile/Profile";
import Users from "src/pages/users/Users";
import HeaderContainer from "src/components/Header/HeaderContainer";

function App() {
  return (
    <div className="appWrapper">
      <HeaderContainer />
      <Navbar/>
      <Content>
        <Routes>
          <Route exact path="/profile/" element={<Profile />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route exact path="/dialogs" element={<Dialogs />} />
          <Route exact path="/users" element={<Users />} />
        </Routes>
      </Content>
      <Footer/>
    </div>
  );
}

export default App;
