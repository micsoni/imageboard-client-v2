import React, { Component } from "react";
import store from "./store/index";
import { Provider } from "react-redux";
import Homepage from "./components/Homepage";
import { Route } from "react-router-dom";
import AllUsersPage from "./components/AllUsersPage";
import SingleUserPage from "./components/SingleUserPage"
import Navbar from "./components/Navbar"
import LoginPage from "./components/LoginPage"
import SignupFormPage from "./components/SignupFormPage"
import UserLoggedInPage from "./components/UserLoggedInPage"


class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupFormPage} />
        <Route exact path="/user" component={AllUsersPage} />
        <Route exact path="/user/:userId" component={SingleUserPage} />
        <Route exact path="/myimageboard" component={UserLoggedInPage}/>
      </Provider>
    );
  }
}
export default App;
