import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Content from "src/components/Content/Content";
import HeaderContainer from "src/components/Header/HeaderContainer";
import ProfilePage from "src/pages/profile/ProfilePage";
import UsersPage from "src/pages/users/UsersPage";
import LoginPage from "src/pages/login/LoginPage";
import React, { Component } from "react";
import { compose } from "redux";
import { connect, Provider } from "react-redux";
import { initializedSuccessfully } from "src/redux/appReducer";
import Loader from "src/components/common/Loader/Loader";
import store from "src/redux/reduxStore";

const DialogsPage = React.lazy(() => import("src/pages/dialogs/DialogsPage"))

class App extends Component {
  catchAllUnhandledErrors = () => {
    alert("Some unhandled error");
  }

  componentDidMount() {
    this.props.initializedSuccessfully();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />
    }

    return (
      <div className="appWrapper">
        <HeaderContainer/>
        <Navbar/>
        <Content>
          <React.Suspense>
            <Routes>
              <Route path="/profile/:userId" element={<ProfilePage/>}/>

              <Route path="/profile/" element={<ProfilePage/>}/>
              <Route path="/dialogs" element={<DialogsPage/>}/>
              <Route path="/users" element={<UsersPage/>}/>
              <Route path="/login" element={<LoginPage/>}/>

              <Route path="*" element={<div>Not found</div>}/>
            </Routes>
          </React.Suspense>
        </Content>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(connect(mapStateToProps, { initializedSuccessfully })(App));

const MainApp = (props) => {
  return (
    <Router>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </Router>
  )
}

export default MainApp;
