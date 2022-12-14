import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProfileContainer from "src/components/Profile/ProfileContainer";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "src/components/Dialogs/DialogsContainer";
import Content from "src/components/Content/Content";

function App() {
  return (
    <div className="appWrapper">
      <Header/>
      <Navbar/>
      <Content>
        <Routes>
          <Route path="/profile" element={<ProfileContainer />} />
          <Route exact path="/dialogs" element={<DialogsContainer />} />
        </Routes>
      </Content>
      <Footer/>
    </div>
  );
}

export default App;
