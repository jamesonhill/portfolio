import React from 'react';
import img from './assets/imgs/profile.jpg';
import './App.scss';
import './tailwind.output.css';

function App() {
  return (
    <div className='App'>
      <nav className='nav'>
      </nav>
      <header>
        <img src={img} alt='profile' className='profilePic' />
        <h2>Hi, I'm Jameson Hill</h2>
        <div className='bio'>
          <span className='item'>Husband</span>
          <span className='item'>Father</span>
          <span className='item'>Software Developer</span>
        </div>
        <div>Building delightful user experiences since 2015</div>
      </header>
    </div>
  );
}

export default App;
