import { combineReducers } from "redux";
import userLoggedIn from "./userLoggedIn";
import images from "./images";
import users from "./users"
export default combineReducers({
  images,
  userLoggedIn,
  users
});

