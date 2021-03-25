import React from 'react';
// import Navbar from './Navbar';
import Main from './Main';
import Notepad from './Notepad';
import './styles.css';

const App = () => {
  return (
    <div className="app-container">
      <Main />
      <Notepad />
    </div>
  )
}

export default App;