import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Profile from "./components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

function App(props) {
  return (
    <div className="appWrapper">
      <Header/>
      <Navbar/>
      <Content>
        <Routes>
          <Route path="/profile" element={<Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
          <Route exact path="/dialogs" element={<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}  />} />
        </Routes>
      </Content>
      <Footer/>
    </div>
  );
}

export default App;
