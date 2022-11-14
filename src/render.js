import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from "./redux/state";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <Router>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </Router>
    </React.StrictMode>
  );
};
