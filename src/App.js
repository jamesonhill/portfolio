import React from 'react';
import img from './assets/imgs/profile.jpg';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <header>
        <img src={img} alt='profile' className='profilePic' />
      </header>
    </div>
  );
}

export default App;
