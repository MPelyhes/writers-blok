import React, { Component } from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";
import Notepad from './Notepad';
import './styles.css';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="app-container">
        <Main />
        <Notepad />
      </div>
    </Router>
  </Provider>
);




export default App;
