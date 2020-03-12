import React, { Component } from "react";
import store from "./store/index";
import { Provider } from "react-redux";
import ListContainer from "./components/ListContainer";
import { Route } from "react-router-dom";
import AllUsersContainer from "./components/AllUsersContainer";
import SingleUserImages from "./components/SingleUserImages"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route exact path="/" component={ListContainer} />
        <Route exact path="/user" component={AllUsersContainer} />
        <Route exact path="/user/:userId" component={SingleUserImages} />
      </Provider>
    );
  }
}
export default App;
