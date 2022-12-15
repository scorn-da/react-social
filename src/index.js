import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from "src/App";
import store from "src/redux/reduxStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
