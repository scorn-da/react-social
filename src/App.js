import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Content from "src/components/Content/Content";
import DialogsPage from "src/pages/DialogsPage";
import ProfilePage from "src/pages/ProfilePage";

function App() {
  return (
    <div className="appWrapper">
      <Header/>
      <Navbar/>
      <Content>
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route exact path="/dialogs" element={<DialogsPage />} />
        </Routes>
      </Content>
      <Footer/>
    </div>
  );
}

export default App;
