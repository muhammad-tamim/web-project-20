import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default App;