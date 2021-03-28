import React from 'react';
import Prompt from './Prompt';
import Navbar from './Navbar';
import CreatePrompt from './CreatePrompt';
import Auth from './Auth';

const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <CreatePrompt />
      <Prompt />
      <Prompt />
      <Prompt />
      <Prompt />
      <Prompt />
      <Prompt /> 
      <Auth />
    </div>
  )
}

export default Main;