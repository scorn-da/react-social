import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from "src/App";
import store from "src/redux/reduxStore";

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <Router>
        <App store={store} />
      </Router>
    </React.StrictMode>
  );
};

rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});
