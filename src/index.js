import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from "src/App";
import store from "src/redux/reduxStore";

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <Router>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </Router>
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  const state = store.getState();
  rerenderEntireTree(state);
});
