import { combineReducers } from "redux";
import user from "./user";
import images from "./images";
import allUsers from "./allUsers"
export default combineReducers({
  images,
  user,
  allUsers
});
