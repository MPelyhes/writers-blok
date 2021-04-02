import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";
import Notepad from './Notepad';
import './styles.css';
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from 'jwt-decode';

const store = configureStore();

// if(localStorage.jwtToken){
//   setAuthorizationToken(localStorage.jwtToken);
//   //prevent someone from manually tampering with the key of jwtTokaen in localStorage
//   try{
//     store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
//   }catch(error){
//     store.dispatch(setCurrentUser({}));
//   }
// }

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
