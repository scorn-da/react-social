import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from "src/redux/profileReducer";
import dialogsReducer from "src/redux/dialogsReducer";
import usersReducer from "src/redux/usersReducer";
import authReducer from "src/redux/auth";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "src/redux/appReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));
window.__store__ = store;
export default store;
