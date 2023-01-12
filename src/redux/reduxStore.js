import { combineReducers, createStore } from "redux";
import profileReducer from "src/redux/profileReducer";
import dialogsReducer from "src/redux/dialogsReducer";
import usersReducer from "src/redux/usersReducer";
import authReducer from "src/redux/auth";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(reducers);

export default store;
