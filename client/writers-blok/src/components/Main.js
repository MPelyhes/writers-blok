import React from 'react';
import Prompt from './Prompt';
import Navbar from './Navbar';
import CreatePrompt from './CreatePrompt'

const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <CreatePrompt />
      {/* <Prompt />
      <Prompt />
      <Prompt />
      <Prompt />
      <Prompt />
      <Prompt /> */}
    </div>
  )
}

export default Main;