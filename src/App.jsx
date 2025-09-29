import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Action from './components/Acution/Action';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Action></Action>
      <Footer></Footer>
    </div>
  );
};

export default App;