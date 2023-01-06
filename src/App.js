import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Content from "src/components/Content/Content";
import Dialogs from "src/pages/dialogs/Dialogs";
import Profile from "src/pages/profile/Profile";
import Users from "src/pages/users/Users";

function App() {
  return (
    <div className="appWrapper">
      <Header/>
      <Navbar/>
      <Content>
        <Routes>
          <Route path="/profile/*" element={<Profile />} />
          <Route exact path="/dialogs" element={<Dialogs />} />
          <Route exact path="/users" element={<Users />} />
        </Routes>
      </Content>
      <Footer/>
    </div>
  );
}

export default App;
