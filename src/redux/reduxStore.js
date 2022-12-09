import { combineReducers, createStore } from "redux";
import profileReducer from "src/redux/profileReducer";
import dialogsReducer from "src/redux/dialogsReducer";

const reducers = combineReducers({ profileReducer, dialogsReducer });

const store = createStore();

export default store;
