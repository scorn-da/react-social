import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from "./redux/state";
import { addPost, updateNewPostText, subscribe } from "./redux/state";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <Router>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </Router>
    </React.StrictMode>
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
