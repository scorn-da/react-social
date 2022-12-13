import { combineReducers, createStore } from "redux";
import profileReducer from "src/redux/profileReducer";
import dialogsReducer from "src/redux/dialogsReducer";

const reducers = combineReducers({ profilePage: profileReducer, dialogsPage: dialogsReducer });

const store = createStore(reducers);

export default store;
