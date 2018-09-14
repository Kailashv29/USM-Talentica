import { combineReducers } from "redux";
import { users, usersHasErrored, usersIsLoading } from "./fetchUsers";
import {
  logedInUser,
  loginLoading,
  loginHasErrored,
  logOutHasErrored,
  logOutLoading
} from "./loginUser";
import {
  userHasErrored,
  userIsLoading,
  userEditHasErrored,
  userEditIsLoading
} from "./addUser";

const rootReducer = combineReducers({
  users,
  usersHasErrored,
  usersIsLoading,
  logedInUser,
  loginLoading,
  loginHasErrored,
  userHasErrored,
  userIsLoading,
  userEditHasErrored,
  userEditIsLoading,
  logOutHasErrored,
  logOutLoading
});

export default rootReducer;
