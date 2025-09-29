import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Action from './components/Acution/Action';

const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Action></Action>
    </div>
  );
};

export default App;